# Speedway Motors exact-link reviews

This public repository contains compiled review builds only. Private application source remains in each project's private Speedway Motors repository.

## Access pattern

- The repository root intentionally has no `index.html`; `https://speedwaymotors.github.io/reviews/` must return not found.
- Reviewers receive an exact project URL such as `/reviews/configurators/g-comp/` or `/reviews/toppers/edelbrock/`.
- Category folders must not contain landing pages or project directories.
- `robots.txt` asks search engines not to index any review path. Exact links are unlisted, not password-protected.

## Publishing rules

- Each project owns one fixed review path and uses a dedicated deploy key.
- A project publisher may stage and commit files only inside its assigned path.
- Publish compiled output only: no source, tests, documentation, credentials, package metadata, or source maps.
- The Pages workflow validates the repository structure and the changed-file boundary before any commit can become the live review site.
- Do not delete or replace another project's compiled review.
