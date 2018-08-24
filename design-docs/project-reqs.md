# Project Requirements

Lists and tracks the project requirements and user stories for this app.

**Boldface requirements indicate stated Thinkful project specifications.**

## User experience requirements

- [X] **The starting screen should have a button that users can click to start the quiz.**
  - [X] When the user loads the `quiz URL`, it loads the ~~`quiz interface`~~ `page body` and `starting display`.
  - [X] The `starting display` has a `Start button`.
    - [X] When the `Start button` is pressed:
      - [X] The `starting display` disappears.
      - [X] The first `quiz form` appears.
- [X] **Users should be prompted through a series of at least 5 multiple choice questions they can answer.**
  - *NOTE: Technically, the user **can** stop before completing 5 questions...*
  - [X] **Users should be asked 1 question after the other.**
  - [X] **Users should only be prompted with 1 question at a time.**
- [X] **Users should not be able to skip questions**
  - [X] The `quiz form` requires a response before a `Next question button` is displayed. 
- [X] **Users should be able to see which questions they're on.**
  - [X] The `user progress element` displays:
    - [X] The question number the user is on.
    - [X] The number of questions they have answered correctly.
    - [X] The percentage of questions they have answered correctly.
- [X] **Upon submitting an answer, users should:**
  - [X] **Receive textual feedback about their answer.**
    - [X] Upon submitting an answer via the `quiz form`:
      - [X] The `quiz form` disappears.
      - [X] A `question feedback display` appears.
    - [X] **If they were incorrect, they should be told the correct answer.**
      - [X] The `question feedback display` explains the correct answer.
  - [X] **Be moved to the next question (or interact with an element to move on)**
    - [X] The `question feedback display` includes a `Next question button`.
- [X] **Users should be shown their overall score at the end of the quiz.**
  - [X] A `Final results display` appears at the end of the quiz, which displays:
    - [X] The number of questions asked.
    - [X] The number of questions answered correctly.
    - [X] The percentage of questions answered correctly.
- [X] **Users should be able to start a new quiz.**
  - [X] On the `Final results display` there is a `Start new quiz button`
    - [X] The `Start new quiz` button re-loads the `quiz URL`.

## Technical requirements

- [X] **Render answer choices in a `<form>`.**
- [ ] **Use semantic HTML, along with CSS and jQuery.**
- [ ] **Follow `ally` best practices.**
- [ ] **Use responsive design.**
- [ ] **Be fully usable by keyboard.**

## Design requirements
*Expanding upon the project and technical requirements, and user stories, outlined above.*

 - [ ] There is a `quiz URL`.
  - [ ] The final quiz is published as a GitHub page.
- [X] There is a ~~`quiz interface`~~ `page body` which follows HTML responsive design
- [X] ... And can display:
  - [X] A `site header` which contains:
    - [X] The `site title`
    - [X] A `user progress element`, which can display:
      - [X] Current question number
      - [X] Number of correct answers
      - [X] Percentage of correct answers
  - [X] A `starting screen` which has:
    - [X] A welcome message and `quiz instructions`
    - [X] A `Start button`
  - [X] A `quiz form` which has:
    - [X] The `question text`
    - [X] Four `answer options`
    - [X] A `Submit answer` button
  - [X] A `question feedback display` which has:
    - [X] A `correct/incorrect display`
    - [X] The `correct answer text`
    - [X] A `Next question button`
    - [X] An `End quiz button`
  - [X] A `Final results display` which has:
    - [X] Total questions askedS
    - [X] Number of correct answers
    - [X] Percentage of correct answers
    - [X] A `Start new quiz` button
- [X] A `site footer` that displays:
  - [X] My name and copyright information
- *Nice To Haves:*
  - Footer:
    - [ ] An `Email me icon` that links to my email address.
    - [ ] A `Github icon` that links to my GitHub profile.

## Process requirements

- [ ]**Gather content for app.**
  - [ ] **Type up questions and answers.**
  - [ ] **Gather any images or icons required.**
- [X] **Think about user experiences outlined above, and how your design must make them possible.**
- [X] **Design app using HTML wireframes.**