# Telehealth App Web

## Overview

---

## Getting Started

### Prerequisites

List any prerequisites that contributors need to have installed before starting. For example:

- **Git**: [Download and install Git](https://git-scm.com/downloads)
- **Node.js**: [Download and install Node.js](https://nodejs.org/)

### Cloning the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/Meekunn/telehealth_app_web.git
```

### Creating a New Branch

After cloning the repository, navigate to the project directory and create a new branch for your feature or bug fix. The branch name should follow the convention: yourname_dev. For example, if your name is Miku, your branch name would be mikun_dev.

```bash
cd telehealth_app_web
git checkout -b yourname_dev
```

### Making Changes

Make your changes to the codebase. Once you're done, commit your changes with a meaningful commit message.

```bash
git add .
git commit -m "Your commit message"
```

### Pushing Changes

Important: Do not push directly to the main branch. Always push to your feature branch.

```bash
git push origin yourname_dev
```

### Pulling from Main and Merging with Feature Branch

To keep your feature branch up-to-date with the latest changes from the `main` branch, follow these steps:

1. **Switch to the Main Branch**

First, ensure you are on the `main` branch:

```bash
git checkout main
```

2. **Pull the Latest Changes from the Main Branch**

Fetch the latest changes from the remote repository and update your local main branch:

```bash
git pull origin main
```

3. **Switch Back to Your Feature Branch**

Checkout your feature branch (e.g., yourname_dev):

```bash
git checkout yourname_dev
```

4. **Merge the Main Branch into Your Feature Branch**

Merge the latest changes from the main branch into your feature branch. Resolve any conflicts if they arise:

```bash
git merge main
```

5. **Resolve Conflicts (if any)**

If there are merge conflicts, Git will highlight them in the files. Open the affected files, resolve the conflicts, then add the resolved files to the staging area:

```bash
git add <file_name>
```

After resolving conflicts and adding the files, commit the merge:

```bash
git commit -m "Resolved conflicts and merged main into yourname_dev"
```

6. **Push the Updated Feature Branch**

Finally, push your updated feature branch to the remote repository:

```bash
git push origin yourname_dev
```

### Creating a Pull Request (PR)

Once your changes are pushed, you need to create a Pull Request (PR) to merge your changes into the main branch. Go to the GitHub repository page and follow these steps:

1. Navigate to the "Pull requests" tab.
2. Click on "New pull request".
3. Select the base branch (main) and compare it with your feature branch (`yourname_dev`).
4. Add a descriptive title and description for your PR.
5. Click on "Create pull request".

### Requesting Code Review

Before your PR can be merged, it needs to be reviewed by other team members. Tag the relevant reviewers in the PR description or in a comment.

```text
@reviewer_username Could you please review this PR?
```

### Warnings and Best Practices

1. Do not push directly to the main branch. Always create a new branch for your changes and follow the proper workflow for merging.
2. Write clear and descriptive commit messages to explain what changes you made and why.
3. Keep your branch up-to-date with the main branch to avoid conflicts.
4. Test your changes thoroughly before pushing them to your branch.
5. Follow the project's coding standards and guidelines, if any.
