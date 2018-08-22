# Project Requirements

Lists and tracks the project requirements and user stories for this app.

**Boldface requirements indicate stated Thinkful project specifications.**

## User experience requirements

- [ ] **The starting screen should have a button that users can click to start the quiz.**
  - [ ] When the user loads the `quiz URL`, it loads the `quiz interface` and `starting display`.
  - [ ] The `starting display` has a `Start button`.
    - [ ] When the `Start button` is pressed:
      - [ ] The `starting display` disappears.
      - [ ] The first `quiz form` appears.
- [ ] **Users should be prompted through a series of at least 5 multiple choice questions they can answer.**
  - [ ] **Users should be asked 1 question after the other.**
  - [ ] **Users should only be prompted with 1 question at a time.**
- [ ] **Users should not be able to skip questions**
  - [ ] The `quiz form` requires a response before a `Next question button` is displayed. 
- [ ] **Users should be able to see which questions they're on.**
  - [ ] The `user progress element` displays:
    - [ ] The question number the user is on.
    - [ ] The number of questions they have answered correctly.
    - [ ] The percentage of questions they have answered correctly.
- [ ] **Upon submitting an answer, users should:**
  - [ ] **Receive textual feedback about their answer.**
    - [ ] Upon submitting an answer via the `quiz form`:
      - [ ] The `quiz form` disappears.
      - [ ] A `question feedback display` appears.
    - [ ] **If they were incorrect, they should be told the correct answer.**
      - [ ] The `question feedback display` explains the correct answer.
  - [ ] **Be moved to the next question (or interact with an element to move on)**
    - [ ] The `question feedback display` includes a `Next question button`.
- [ ] **Users should be shown their overall score at the end of the quiz.**
  - [ ] A `Final results display` appears at the end of the quiz, which displays:
    - [ ] The number of questions asked.
    - [ ] The number of questions answered correctly.
    - [ ] The percentage of questions answered correctly.
- [ ] **Users should be able to start a new quiz.**
  - [ ] On the `Final results display` there is a `Start new quiz button`
    - [ ] The `Start new quiz` button re-loads the `quiz URL`.

## Technical requirements

- [ ] **Render answer choices in a `<form>`.**
- [ ] **Use semantic HTML, along with CSS and jQuery.**
- [ ] **Follow `ally` best practices.**
- [ ] **Use responsive design.**
- [ ] **Be fully usable by keyboard.**

## Design requirements
*Expanding upon the project and technical requirements, and user stories, outlined above.*

 - [ ] There is a `quiz URL`.
  - [ ] The final quiz is published as a GitHub page.
- [ ] There is a `quiz interface` which follows HTML responsive design
- [ ] ... And can display:
  - [ ] A `user progress element`, which can display:
    - [ ] Current question number
    - [ ] Number of correct answers
    - [ ] Percentage of correct answers
  - [ ] A `starting screen` which has:
      - [ ] A `Start button`
  - [ ] A `quiz form` which has:
    - [ ] The `question text`
    - [ ] Four `answer options`
    - [ ] A `Submit answer` button
  - [ ] A `question feedback display` which has:
    - [ ] A `correct/incorrect display`
    - [ ] The `correct answer text`
    - [ ] A `Next question button`
  - [ ] A `Final results display` which has:
    - [ ] Total questions asked
    - [ ] Number of correct answers
    - [ ] Percentage of correct answers
    - [ ] A `Start new quiz` button

## Process requirements

- [ ] **Gather content for app.**
  - [ ] **Type up questions and answers.**
  - [ ] **Gather any images or icons required.**
- [ ] **Think about user experiences outlined above, and how your design must make them possible.**
- [ ] **Design app using HTML wireframes.**