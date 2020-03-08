# v17-toucans-team-01 <!-- omit in toc -->

Add-project-description-here | Voyage-17 | <https://chingu.io/> | Twitter: <https://twitter.com/ChinguCollabs>

## Table of Contents <!-- omit in toc -->

- [Sprint 1 Objectives](#sprint-1-objectives)
- [Team Goals](#team-goals)
- [Team Agreements](#team-agreements)
- [Project Information](#project-information)
  - [About](#about)
  - [MVP Definition](#mvp-definition)
  - [Included Functions & Features](#included-functions--features)
  - [End user stories](#end-user-stories)
  - [Tech Stack](#tech-stack)
  - [Design Mockup](#design-mockup)
- [Development Workflow](#development-workflow)
- [Code Style Guide](#code-style-guide)
  - [HTML formatting and style rules](#html-formatting-and-style-rules)
  - [CSS formatting and style rules](#css-formatting-and-style-rules)
  - [JavaScript formatting and style rules](#javascript-formatting-and-style-rules)

## Sprint 1 Objectives

- [ ] Learn any new technologies for your project
- [ ] Set up the project and push it to GitHub
- [ ] Set up local development environments for each teammate.
- [ ] Break down the project, create backlog, and use it as a roadmap for the remainder of the project.
- [ ] Set up project management tools
- [ ] Add tasks needed to reach MVP status to your project backlog. Since you'll be following Agile principles, the backlog won't be complete until the latter part of the project. The team will continuously revise it in each sprint.
- [ ] Designing project using a mockup tool.
- [ ] Define Git Strategy for:
- Pull Requests
-Code Merge Process
- Will you be using GitHub's Pull Request?
- Will you pull the destination branch into your branch first? Or just attempt to merge straight in?
- Will there be a mandatory code review by one other person before merging?
- What happens if there are merge conflicts?
- Can the Pull Request be merged by anyone? Or just the Project Manager? Or only by the person in charge of that code section?

## Team Goals

- Gain significant confidence using Github & Git in collaborative coding projects

- Become more comfortable and efficient with page layouts.

## Team Agreements

- For the duration of the project, there will be a Weekly Sprint Planning Meeting on Sunday 10amEST / 1pm PST.  This meeting is time boxed to one hour.

- A meeting agenda will be created on a rotating basis for each sprint planning meeting. The Meeting agenda is to be sent via___ to teammates by___ each Friday before a Sunday Meeting.

- What does success look like for your team?
- How will you make decisions?
- And how will you deal with conflict?

## Project Information

### About

High Level info about project will go here

### MVP Definition

- [ ] Create a simple, concise statement of what your application will achieve and the value it has to its users.  Every function and feature in the application should reinforce this goal.

### Included Functions & Features

- [ ] List the functions you want to include in the application. Prioritize them by identifying which are needs and which are wants.
- [ ] List the features in each function and prioritize them in the same manner. Identify which are needs and which are wants.

### End user stories

- [ ] Define the attributes and roles of your end users and match them to your features and functions. This helps ensure that the app will have a logical flow, and more importantly, that it meets all user needs.

``` text
I WANT TO review and practice data structures and algorithms on a daily,
SO I can perform well on technical interviews.
```

``` text
I WANT TO review the piece of concept first and then practice
SO I retain the information
```

``` text
I WANT TO receive a new session everyday on related topics,
SO my learning experience circular
```

``` text
I WANT every session TO BE short (15-30 mins),
SO I can practice multiple times a day
```

### Tech Stack

TBA info will go here

### Design Mockup

TBA info will go here

## Development Workflow

A three-level hierarchy of branches is created, through which changes are promoted.

- **Working branches:** Individual branches created by each developer when they are working on changes and bug fixes. The type can be one of these types:

  - **feat:** a new feature
  - **fix:** a bug fix
  - **docs:** changes to documentation
  - **style:** formatting, missing semi colons, etc; no code change
  - **refactor:** refactoring production code
  - **test:** adding tests, refactoring test; no production code change
  - **chore:** updating build tasks, package manager configs, etc; no production code change
    basic types of branches:

- **Development:** Reflects the code for the next release. Developers work in working branches, which are then pulled into this branch. All code pulled into this branch must be tested and undergo peer review as part of the PR process.
- **Master:** Only updated from the development branch Pull Requests. This branch always reflects the current production release that is seen by live users.

1. Once the skeleton repo is built in GitHub, team members will clone it to their individual computers.

   ``` text
   git clone https://github.com/chingu-voyages/v17-toucans-team-01 <custom-folder-name>
   ```

2. Working branches are created for specific features and tasks (like bug fixes).

   ``` text
   git checkout -b feature/course-review
   ```

3. All normal development activities occur on team members' individual computers. Commits should be frequent and each commit should have a discrete, atomic purpose.

   **Commit Messages**
   A commit messages consists of three distinct parts separated by a blank line: the title, an optional body and an optional footer. The layout looks like this:

   ``` text
   type: subject

   body

   footer
   ```

   - The title consists of the type of the message and subject.
   - The type is contained within the title and should be consistent with the working branches' type e.g **feature**, **bug** etc.
   - Subjects should be no greater than 50 characters, should begin with a capital letter and do not end with a period. Use an imperative tone to describe what a commit does, rather than what it did. For example, use change; not changed or changes.
   - Not all commits are complex enough to warrant a body, therefore it is optional and only used when a commit requires a bit of explanation and context. Use the body to explain the what and why of a commit, not the how.
   - The footer is optional and is used to reference issue tracker IDs.

   ``` text
   feat: Summarize changes in around 50 characters or less

   More detailed explanatory text, if necessary.

   Further paragraphs come after blank lines.

     - Bullet points are okay

   Put references to issues in the footer:

   Resolves: #11
   See also: #08, #09
   ```

4. **Changes should be frequently pushed to the matching working branch on GitHub.** This ensures that if a computer is lost, stolen, or malfunctions, your work will still be available to the rest of your team. **Before every single push, development branch need to be pulled to make sure there is no conflict. If there is, conflicts should be resolved before the code is pushed to the matching working branch on GitHub.**

   ``` text
   // In your working branch
   git pull origin development

   // Then
   git push origin <working-branch>
   ```

5. Once a feature has been unit tested, a Pull Request (PR) should be created to fold it into the development branch. It's always a good idea to require that PR's be reviewed by another member of the team. This helps to ensure that the quality of the app is maintained.

6. When a group of features are ready to be promoted to Production, they should be thoroughly tested together. Then, a Pull Request should be created in order to move them into the master branch which reflects the code base that's in Production or soon to be promoted to Production.

7. Once the PR to the master branch has been completed, you are then ready to release its contents into your Production runtime environment.

![The Workflow](https://github.com/Chingu-cohorts/voyage-wiki/raw/development/images/Git%20Workflow.png)

## Code Style Guide

This project uses a Prettier configuration file to format HTML & CSS, and follows the [Airbnb Style Guide](https://github.com/airbnb/javascript) for Javascript style.

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

  ``` js
  // Recommended
  const foo = () => {
    return true // Missing semicolon
  } // Missing semicolon

  function foo() {
    return true;
  }; // Extra semicolon
  ```

- `forEach` or `for` loops are preferred over `for-in` loops when iterating over an array.
- `for-in` loops are used to loop over keys in an object. Make sure to wrap the content of the `for-in` loop in a conditional statement to prevent it from from iterating over the prototype chain:

  ``` js
  // Recommended
  myObj = {'firstName':'Ada','lastName':'Lovelace'};
  for (const key in myObj) {
    if (myObj.hasOwnProperty(key)) {
      console.log(myObj[key]);
    }
  }
  ```

- Use Array and Object literals instead of Array and Object constructors.
- In general, functionNamesLikeThis, variableNamesLikeThis, ClassNamesLikeThis, methodNamesLikeThis, CONSTANT_VALUES_LIKE_THIS and filenameslikethis.js
- Because of implicit semicolon insertion, always start your curly braces on the same line as whatever they're opening.

  ``` js
  // Recommended
  if (something) {
    // Do something
  } else {
    // Do something else
  }
  ```

- Single-line array and object initializers are allowed when they fit on one line. There should be no spaces after the opening bracket or before the closing bracket:

  ``` js
  // Recommended
  const array = [1, 2, 3];
  const object = {a: 1, b: 2, c: 3};
  ```

- Multiline array and object initializers are indented one-level, with the braces on their own line, just like blocks:

  ``` js
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

  ``` js
  // Recommended:
  const element = '<button class="btn">Click Me</button>';
  ```
