# v17-toucans-team-01 <!-- omit in toc -->

Add-project-description-here | Voyage-17 | <https://chingu.io/> | Twitter: <https://twitter.com/ChinguCollabs>

## Table of Contents <!-- omit in toc -->

- [🏆 Team Goals](#-team-goals)
- [🤝 Team Agreements](#-team-agreements)
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
- Gain significant confidence using Github & Git in collaborative coding projects.
- Become more comfortable and efficient with page layouts.

## 🤝 Team Agreements

- A Weekly Sprint Planning Meeting is held on Google Hangouts every Sunday at 4PM EST / 1PM PST. This meeting is time boxed to one hour.
- A meeting agenda will be created on a rotating basis for each sprint planning meeting. The meeting agenda is to be sent via Discord team channel to teammates by 10PM PST each Friday before the Sunday Meeting. Conor will prepare the agenda for 3/15; Weilan for 3/22; and Robbie for 3/29.

- [ ] What does success look like for your team?
- [ ] How will you make decisions?
- [ ] And how will you deal with conflict?

## ✅ Project Information

### About

This project is a clone of the [mouseless.app](mouseless.app) product webpage. The product is an application that helps users remember keyboard shortcuts to their favorite apps by delivering them bite-sized exercises.

### MVP Definition

The MVP will be a visual clone of the site's landing page. It will keep the same aesthetic as the original site and provide a simple and clean interface for users to both learn about and buy the product across different device sizes. The following features are to be included:

- Every section from the original page will be cloned.
- The page is fully responsive with breakpoints for mobile, tablet, and desktop views.
- The testimonial section features both click and drag and auto scroll movement.
- A dynamic countdown timer for the sale price. The timer resets to 11 hours everyday at 12am PST.
- FAQ section with hidden dropdown answers for each question. Clicking each question's icon will reveal the answer.
- Features section with 4X3 icon grid.
- Custom colored vertical scroll bar.

#### Stretch Goals

- Buy button that links to a payment page.
- Icons in grid section flip randomly.
- Implement a shortcuts page, for [example](https://mouseless.app/webflow-keyboard-shortcuts)

### Tech Stack

The site is static with no server or database. Only vanilla HTML/CSS/JS will be used.

### Design Mockup

TBA info will go here

## 🔀 Git Strategy

### Pull Requests & Merging

- All Pull Requests and code merging will take place in the project's Github repo.
- To reduce merge conflicts, the destination branch should be pulled into the merging branch prior to opening a pull request.

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

5. Set up linting and code formatting (VS Code)

   - Install Babel plugin
   - Install Prettier plugin
   - In VS Code global settings, make sure "auto format on save" is checked on.
   - In Prettier plugin settings, turn on single quote and semi colons.

6. Work and make commits on local feature branch.

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

- Not all commits are complex enough to warrant a body, therefore it is optional and only used when a commit requires a bit of explanation and context. Use the body to explain the what and why of a commit, not the how.

- The footer is optional and is used to reference issue tracker IDs.

  ```text
  feat: Summarize changes in around 50 characters or less

  More detailed explanatory text, if necessary.

  Further paragraphs come after blank lines.

    - Bullet points are okay

  Put references to issues in the footer:

  Resolves: #11
  See also: #08, #09
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

This project uses a Prettier configuration file for code formatting and follows the [Airbnb Style Guide](https://github.com/airbnb/javascript) for Javascript style.

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

- The code does not have trailing white spaces.
- Indentation is consistent (2 spaces).
- Code indents all content, that is rules within rules as well as declarations to reflect hierarchy and improve understanding.
- The code uses a semicolon after every declaration for consistency and extensibility reasons.
- Code always uses a space after a property name's colon, but no space between property and colon, for consistency reasons.
- Code always uses a single space between the last selector and the opening brace that begins the declaration block. Code always start a new line for each selector and declaration.
- Code always put a blank line between rules.
- Code uses consistent quotation marks for attribute selectors or property values (single).
- The code uses meaningful or generic ID and class names that are as short as possible, but as long as necessary.
- The code does not use element names in conjunction with IDs or classes.
- The code uses shorthand properties where possible.
- Code omits unit specification after 0 values.
- Code uses 3-character hexadecimal notation where possible.
- Code separates words in ID and class names by a hyphen.

### JavaScript formatting and style rules

- The code does not have trailing white spaces.
- Indentation is consistent (2 spaces).
- Use comments to explain code: What does it cover, what purpose does it serve, and why is the respective solution used or preferred?
- Mark 'todos and action items with `TODO:`
- When declaring variables, declare variables with `const`, first. If needed, reassign the variable using `let`. There isn't a good reason to use the var keyword anymore for variable declaration.
- **Always use semicolons:**

  ```js
  // Recommended
  const foo = () => {
    return true; // Missing semicolon
  }; // Missing semicolon

  function foo() {
    return true;
  } // Extra semicolon
  ```

- `forEach` or `for` loops are preferred over `for-in` loops when iterating over an array.
- `for-in` loops are used to loop over keys in an object. Make sure to wrap the content of the `for-in` loop in a conditional statement to prevent it from from iterating over the prototype chain:

  ```js
  // Recommended
  myObj = { firstName: 'Ada', lastName: 'Lovelace' };
  for (const key in myObj) {
    if (myObj.hasOwnProperty(key)) {
      console.log(myObj[key]);
    }
  }
  ```

- Use Array and Object literals instead of Array and Object constructors.
- In general, functionNamesLikeThis, variableNamesLikeThis, ClassNamesLikeThis, methodNamesLikeThis, CONSTANT_VALUES_LIKE_THIS and filenameslikethis.js
- Because of implicit semicolon insertion, always start your curly braces on the same line as whatever they're opening.

  ```js
  // Recommended
  if (something) {
    // Do something
  } else {
    // Do something else
  }
  ```

- Single-line array and object initializers are allowed when they fit on one line. There should be no spaces after the opening bracket or before the closing bracket:

  ```js
  // Recommended
  const array = [1, 2, 3];
  const object = { a: 1, b: 2, c: 3 };
  ```

- Multiline array and object initializers are indented one-level, with the braces on their own line, just like blocks:

  ```js
  // Recommended:
  const array = [
    'Joe <joe@email.com>',
    'Sal <sal@email.com>',
    'Dave <dave@email.com>',
    'Q <q@email.com>'
  ];

  const object = {
    id: 'foo',
    class: 'foo-important',
    name: 'notification'
  };
  ```

- Except for JSON objects, use single-quotes (') over double-quotes ("). This is helpful when creating strings that include HTML:

  ```js
  // Recommended:
  const element = '<button class="btn">Click Me</button>';
  ```
