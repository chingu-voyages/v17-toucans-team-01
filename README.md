# v17-toucans-team-01 <!-- omit in toc -->

Final Project is deployed on Github Pages here: <https://chingu-voyages.github.io/v17-toucans-team-01/>

## Table of Contents <!-- omit in toc -->

- [🏆 Team Goals](#-team-goals)
- [✅ Project Information](#-project-information)
  - [About](#about)
  - [MVP Definition](#mvp-definition)
  - [Included Functions & Features](#included-functions--features)
  - [User Stories](#user-stories)
  - [Tech Stack](#tech-stack)
  - [Design Mockup](#design-mockup)
- [🔀 Git Strategy](#-git-strategy)
  - [Pull Requests & Merging](#pull-requests--merging)
    - [Development Branch](#development-branch)
    - [Master Branch](#master-branch)
- [🚀 Development Workflow](#-development-workflow)
  - [Get Started Developing](#get-started-developing)
  - [Commit Messages](#commit-messages)
  - [Pushing Changes](#pushing-changes)
- [💅 Code Style Guide](#-code-style-guide)
  - [HTML formatting and style rules](#html-formatting-and-style-rules)
  - [CSS formatting and style rules](#css-formatting-and-style-rules)
  - [JavaScript formatting and style rules](#javascript-formatting-and-style-rules)

## 🏆 Team Goals

- Develop and deploy a working MVP.
- Gain confidence using Github & Git in collaborative projects.
- Become more comfortable and efficient with page layouts.

## ✅ Project Information

### About

This project is a clone of the [mouseless.app](mouseless.app) product webpage. The product is an application that helps users remember keyboard shortcuts to their favorite apps by delivering them bite-sized exercises.

### MVP Definition

The MVP will be a visual clone of the site's landing page. It will keep the same aesthetic as the original site and provide a simple and clean interface for users to both learn about and buy the product across different device sizes. The following features are to be included:

- [x] Every section from the original page will be cloned.
- [x] The page is fully responsive with breakpoints for mobile, tablet, and desktop views.
- [x] The testimonial section features both click and drag and auto scroll movement.
- [x] A dynamic countdown timer for the sale price. The timer resets to 11 hours everyday at 12am PST.
- [x] FAQ section with hidden dropdown answers for each question. Clicking each question's icon will reveal the answer.
- [x] Features section with 4X3 icon grid.
- [x] Custom colored vertical scroll bar.

#### Stretch Goals

- Buy button that links to a payment page.
- Icons in grid section flip randomly.
- Implement a shortcuts page, for [example](https://mouseless.app/webflow-keyboard-shortcuts)

### Tech Stack

The site is static with no server or database. Only vanilla HTML/CSS/JS will be used except Sass(SCSS) is used for preprocessing styles. Parcel is used to bundle files prior to deployment on Github pages.

### Design Mockup

Wireframes for the project can be viewed on [Sketch Cloud](https://sketch.cloud/s/z39Jr).

## 🔀 Git Strategy

### Pull Requests & Merging

- All Pull Requests and code merging will take place in the project's Github repo.
- To reduce merge conflicts, the destination branch should be pulled into the merging branch prior to opening a pull request.
- To test changes and review a PR locally before approving it, [read modifying an active pull request locally](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally#modifying-an-active-pull-request-locally). For the purposes of testing, just use the commands in "Step 1" which brings the PR local. After testing, you can go back to Github and approve or comment on the PR.

#### Development Branch

- Working branches will be merged into the development branch during weekly development.
- At least one team member other than the requester must review and approve a request before it can be merged.
- After the merge has been approved, the requester will perform the merge on Github and delete the merged branch from the repository upon a successful merge.
- If any merge conflicts occur, the requester must work with the author of the conflicting code to resolve them and re-submit the PR for approval.

#### Master Branch

- A PR to merge to the master should reflect the goals of the prior week's sprint and produce an updated MVP. This PR will typically take place following the weekly sprint meeting.
- All team members must approve a request for merging into the master branch.

## 🚀 Development Workflow

A three-level hierarchy of branches is used, through which changes are promoted.

- **Working branches:** Individual branches created by each developer when they are working on changes and bug fixes. The type can be one of these types:

  - **feature:** a new feature
  - **fix:** a bug fix
  - **docs:** changes to documentation
  - **style:** formatting, missing semi colons, etc; no code change
  - **refactor:** refactoring production code
  - **test:** adding tests, refactoring test; no production code change
  - **chore:** updating build tasks, package manager configs, etc; no production code change
    basic types of branches:

- **Development:** Reflects the code for the next release. Developers work in working branches, which are then pulled into this branch. All code pulled into this branch must be tested and undergo peer review as part of the PR process.
- **Master:** Only updated from the development branch Pull Requests. This branch always reflects the current production release that is seen by live users.

### Get Started Developing

1. Clone the repo to your local computer.

   **Note**: this should be the only time you will be on the master branch locally, so immediately get to step #2 after cloning.

   ```text
   git clone https://github.com/chingu-voyages/v17-toucans-team-01 <custom-folder-name>
   ```

2. Checkout the development branch.

   ```text
     git checkout development
   ```

3. Create a working branch for a specific feature or task in the backlog (like bug fixes).

   ```text
   git checkout -b feature/course-review
   ```

4. Update project dependencies.

   ```text
     npm install
   ```

5. To set up linting and code formatting (VS Code)

   - Install Babel plugin
   - Install Prettier plugin
   - In VS Code global settings, make sure "auto format on save" is checked on.
   - In Prettier plugin settings, turn on single quote and semi colons.

6. Start the development server

   ```text
     npm run start
   ```

7. Work and make commits on local feature branch.

### Commit Messages

All normal development activities occur on team members' individual computers. Commits should be frequent and each commit should have a discrete, atomic purpose.

A commit messages consists of three distinct parts separated by a blank line:

- Title
- Body (optional)
- Footer (optional)

The layout looks like this:

```text
type: subject

body

footer
```

- The title consists of the type of the message and subject.

  - The type is contained within the title and should be consistent with the working branches' type e.g **feature**, **bug** etc.

  - Subjects should be no greater than 50 characters, should begin with a capital letter and do not end with a period. Use an imperative tone to describe what a commit does, rather than what it did. For example, use change; not changed or changes.

  ```text
  feat: Summarize changes in around 50 characters or less

  ```

### Pushing Changes

1. **Changes should be frequently pushed to the matching working branch on GitHub.** This ensures that if a computer is lost, stolen, or malfunctions, your work will still be available to the rest of your team. **Before every single push, the development branch needs to be pulled to make sure there is no conflict. If there is, conflicts should be resolved before the code is pushed to the matching working branch on GitHub.**

   ```text
   // we start from branch fix/my-branch
    git checkout development
    git pull origin development
    git checkout fix/my-branch
    git merge development

   // Then
   git push origin <working-branch>
   ```

2. Once a feature has been unit tested, a Pull Request (PR) should be created to fold it into the development branch. It's always a good idea to require that PR's be reviewed by another member of the team. This helps to ensure that the quality of the app is maintained.

3. When a group of features are ready to be promoted to Production, they should be thoroughly tested together. Then, a Pull Request should be created in order to move them into the master branch which reflects the code base that's in Production or soon to be promoted to Production.

4. Once the PR to the master branch has been completed, you are then ready to release its contents into your Production runtime environment.

![The Workflow](https://github.com/Chingu-cohorts/voyage-wiki/raw/development/images/Git%20Workflow.png)

## 💅 Code Style Guide

The following rules are enforced:

### HTML formatting and style rules

- HTML5 semantic tags such as `<header>`, `<footer>`, `<article>`, `<section>1`, etc. are used to add meaning to the code.
- No div or section selectors are without a CSS class or id.
- All code is lowercase
- The code does not have trailing white spaces.
- Indentation is consistent (2 spaces).
- Code uses a new line for every block, list or table element and indent every such child element (it is acceptable to put all elements in one line).
- When quoting attribute values, code uses consistent "double" quotation marks.
- HTML documents HTML5 `<!doctype html>`
- Code omits type attributes for style sheets and scripts.
- Code does not use entity references unless necessary e.g. characters with special meaning (like < and &) as well as control or 'invisible' characters (like no-break spaces).

### CSS formatting and style rules

- CSS is organized using BEM methodology. See this [link](https://cssguidelin.es/#bem-like-naming) for specific rules.

### JavaScript formatting and style rules

This project uses a Prettier configuration file for code style and follows the [Airbnb Style Guide](https://github.com/airbnb/javascript) for Javascript formatting.
