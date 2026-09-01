# Review Repository Guidance

## Purpose

This repository is a public, compiled-output destination for exact-link Speedway Motors reviews. It is not a public project directory and is never the source of truth for application code.

## Preservation rules

- Keep the repository root and every category root without an `index.html` so those URLs return not found.
- Change only the exact project path authorized by the current task.
- Preserve every unrelated project folder and its history.
- Never add private source, tests, documentation, credentials, package files, source maps, or generated directory pages.
- Keep `robots.txt` set to disallow indexing. This reduces discovery but does not provide authentication.

## Validation

Run `bash .github/scripts/validate-review-repository.sh` before committing. The Pages workflow must pass before content is deployed.
