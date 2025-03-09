# Release Process

This document outlines the steps for releasing a new version of the project.

## 1. Tagging a Release

- Ensure all changes are merged into the `main` branch.
- Create a Git tag for the new version:
  ```bash
  git tag -a v1.0.0 -m "Release version 1.0.0"
  ```
- Push the tag to the remote repository:
  ```bash
  git push origin v1.0.0
  ```
## 2. Writing Release Notes

* Summarize the changes in the release, including:
    - New features.
    - Bug fixes.
    - Improvements.

* Example:
    ```markdown
    # Release Notes - v1.0.0

    ## New Features
    - Added IoT sensor data collection module.
    - Integrated web dashboard for real-time monitoring.

    ## Bug Fixes
    - Fixed sensor data parsing error (#123).
    - Resolved memory leak in the data pipeline (#456).

    ## Improvements
    - Improved API response time by 20%.
    - Updated documentation for better readability.
    ```