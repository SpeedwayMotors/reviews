#!/usr/bin/env bash
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

fail() {
  echo "Review repository validation failed: $1" >&2
  exit 1
}

[[ ! -e index.html ]] || fail "the repository root must not contain index.html"

allowed_categories=(configurators toppers calculators)
existing_categories=()

while IFS= read -r -d '' top_level_directory; do
  case "$top_level_directory" in
    ./.git|./.github|./configurators|./toppers|./calculators) ;;
    *) fail "unexpected top-level directory ${top_level_directory#./}" ;;
  esac
done < <(find . -mindepth 1 -maxdepth 1 -type d -print0)

for category in "${allowed_categories[@]}"; do
  [[ ! -e "$category/index.html" ]] || fail "$category must not contain a category landing page"
  [[ -d "$category" ]] || continue
  existing_categories+=("$category")

  while IFS= read -r -d '' project_directory; do
    [[ -f "$project_directory/index.html" ]] || fail "$project_directory is missing its compiled index.html"
  done < <(find "$category" -mindepth 1 -maxdepth 1 -type d -print0)
done

if ((${#existing_categories[@]})); then
  forbidden_file="$(find "${existing_categories[@]}" -type f \( -name '*.map' -o -name '*.ts' -o -name '*.tsx' -o -name '*.jsx' -o -name '.env' -o -name '.env.*' -o -name 'package.json' -o -name 'package-lock.json' -o -name 'pnpm-lock.yaml' -o -name 'yarn.lock' -o -name 'bun.lock' -o -name 'bun.lockb' \) -print -quit || true)"
  [[ -z "$forbidden_file" ]] || fail "forbidden source or package file: $forbidden_file"
fi

before_sha="${GITHUB_EVENT_BEFORE:-}"
after_sha="${GITHUB_SHA:-}"
zero_sha="0000000000000000000000000000000000000000"

if [[ -n "$before_sha" && -n "$after_sha" && "$before_sha" != "$zero_sha" ]] &&
  git cat-file -e "$before_sha^{commit}" 2>/dev/null; then
  project_scope=""
  control_change=false

  while IFS= read -r changed_path; do
    [[ -n "$changed_path" ]] || continue

    case "$changed_path" in
      index.html)
        fail "the public root landing page may not be created"
        ;;
      configurators/index.html|toppers/index.html|calculators/index.html)
        fail "category landing pages may not be created"
        ;;
      configurators/*/*|toppers/*/*|calculators/*/*)
        IFS=/ read -r category project _ <<< "$changed_path"
        current_scope="$category/$project"
        if [[ -n "$project_scope" && "$project_scope" != "$current_scope" ]]; then
          fail "one push may not change multiple projects ($project_scope and $current_scope)"
        fi
        project_scope="$current_scope"
        ;;
      .github/*|README.md|AGENTS.md|robots.txt|.nojekyll)
        control_change=true
        ;;
      *)
        fail "unexpected changed path: $changed_path"
        ;;
    esac
  done < <(git diff --name-only "$before_sha" "$after_sha")

  if [[ -n "$project_scope" && "$control_change" == true ]]; then
    fail "a project publish may not also change repository controls"
  fi
fi

echo "Exact-link review validation passed."
