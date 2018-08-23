'use strict';

//STARTING DISPLAY

function handleStartingDisplay() {
  
  $('main').on('click', '.js-start-quiz-button', function(event){
    event.preventDefault();
    
    //Initialize previous correct answer tracking, to avoid repeat questions
    let prevCorrectAnswer;

    // Display a quiz question
    renderQuizDisplay(prevCorrectAnswer);

    // Event handling testing
    if(TESTING){
      console.log(`The "Start quiz button" was clicked!
        prevCorrectAnswer: ${prevCorrectAnswer}`);
    }

  });

  //handleStartingDisplay testing
  if(TESTING) {
    console.log(`"handleStartingDisplay" was called.`);
  }
}


//===========================================================================//

//QUIZ DISPLAY (quizDisplay, quizForm)

function renderQuizDisplay(prevCorrectAnswer) {
  // Advances the quiz game, renders a new quiz question.
  
  //Update userProgress.questionNumber to reflect the new question
    userProgressGlobal.questionNumber += 1;
    
  //Render the question number
    renderHeaderQuestionNumber();
  
  // Render the quizDisplay
  let quizDisplayInnerHTML = `
    <div class="quiz-form-container">
      <form class="quiz-form">
      </form>
    </div>
  `;
  
  $('main').html(quizDisplayInnerHTML);
  
  // Render the quizForm
  renderQuizForm(prevCorrectAnswer);
  
  if(TESTING) {
    console.log(`"renderQuizDisplay" was called.
      userProgressGlobal.questionNumber: ${userProgressGlobal.questionNumber}
    `);
    $('.quiz-form-container').append(
      `<button role="button" class="js-start-quiz-button">TESTING:<br/>Generate new question</button>`
      );
  }
  
}

function renderQuizForm(prevCorrectAnswer) {
  //Renders the quizForm within the quizDisplay
  
  // Select quizOptions to include in this question
  let quizOptions = selectQuizOptions(quizDataGlobal.length);
    
  // Select the correctAnswer
  let correctAnswer = selectCorrectAnswer(quizOptions, prevCorrectAnswer);
  
  // Create the quizForm innterContent
  //  (correctAnswer is passed out of the function as the submit button's name)
  let quizFormInnerHTML = `
    <h2>${quizDataGlobal[correctAnswer].companyQuestion}</h2>
    <fieldset></fieldset>
    <input type="submit" class="quiz-submit-button" name="${correctAnswer}"></input>
    `;
  
  $('.quiz-form').html(quizFormInnerHTML);
  
  //Generate quizOptions, which render within the quizForm
    quizOptions.forEach(index => renderQuizOption(index));
    
  if(TESTING) {
    console.log(`"renderQuizForm" was called.
      - prevCorrectAnswer: ${prevCorrectAnswer}
      - quizOptions: ${quizOptions}
      - correctAnswer: ${correctAnswer}
      - Correct Company: ${quizDataGlobal[correctAnswer].companyName}
    `);
  }
}

function selectQuizOptions(max) {
  // Generates an array of 4 random numbers, without repeating, in a given range.
  
  let array = [];
  
  while (array.length < 4) {
    let rand = Math.floor(Math.random() * max);
    
    // If the rand isn't in the array, add it.
    if (!array.includes(rand)){
      array.push(rand);
    }
    
  }
  
  return array;
  
  if (TESTING) {
    console.log(`"selectQuizOptions" was called.
      array: ${array}
    `);
  }
}
  
function selectCorrectAnswer(quizOptions, prevCorrectAnswer) {
  // This function selects a correct answer that doesn't match the previous
  // correct answer.
  
  let randAnswer = prevCorrectAnswer;
  
  // If the new answer is the same as the previous answer...
  while (randAnswer === prevCorrectAnswer) {
    // ... generate a new correct answer
    randAnswer = quizOptions[Math.floor(Math.random() * 4)];
    
  }
  
  // Update prevCorrectAnswer for next time.
  prevCorrectAnswer = randAnswer;
  
  return randAnswer; 
  
  if(TESTING) {
    console.log(`"selectCorrectAnswer" was called.
      Previous Answer: ${prevCorrectAnswer}
      Possible Answers: ${quizOptions}
      New Answer: ${randAnswer}
    `);
  }
}
  
function renderQuizOption(index) {
  // This function renders the label->input HTML code for a single quizOption

    let quizOptionInnerHTML = `
      <label class="quiz-option" for="${index}">
        <input type="radio" name="answer" id="${index}" value="${index}">
          ${quizDataGlobal[index].companyName}
        </input>
      </label>
    `
    
    $('fieldset').append(quizOptionInnerHTML);
  
  if(TESTING) {
    console.log(`"renderQuizOption" was called.
    - index: ${index}`);
  }  
  
}

//===========================================================================//

// QUIZ FORM SUBMISSION

function handleQuizAnswer() {
  
  $('main').on('click', '.quiz-submit-button', function(event) {
    event.preventDefault();
    
    // Get form value
    let answerVal = $('input[name="answer"]:checked').val();
    
    // Get correct answer from submit button
    let correctAnswer = $('.quiz-submit-button').attr('name');
    
    // If no response...
    if (!answerVal) {
      alert('Please select an answer.');
      return;
    }

    //Check Answer
    let boolCorrect = processQuizAnswer(answerVal, correctAnswer);
      
    // render Feedback display
    renderFeedbackDisplay(boolCorrect, correctAnswer);
    
    //Quiz answer submission testing
    if(TESTING) {
      console.log(`Quiz answer submitted!
        answerVal: ${answerVal} - ${quizDataGlobal[answerVal].companyName}
        correctAnswer: ${correctAnswer} - ${quizDataGlobal[correctAnswer].companyName}
        boolCorrect: ${boolCorrect}
      `);
    }
    
  });
  
  //handleQuizAnswer testing
  if(TESTING){
    console.log(`"handleQuizAnswer" was called.`);
  }
}

function processQuizAnswer(answerVal, correctAnswer) {
  
  //Check for correct answer
  let boolCorrect = (answerVal === correctAnswer);
  
  //If correct, update userProgressGlobal
  if (boolCorrect) {
    userProgressGlobal.correctAnswers += 1;
  }
  
  return boolCorrect;
  
  console.log(`"processQuizAnswer" was called.
    answerVal: ${answerVal}
    correctAnswer: ${correctAnswer}
    boolCorrect: ${boolCorrect}
  `)
  
}

//===========================================================================//

//FEEDBACK DISPLAY (feedbackDisplay)

function renderFeedbackDisplay(boolCorrect, correctAnswer) {
  // This function displays quiz item feedback.
  
  // Update header user score
  renderHeaderUserScore();
  
  // Generate response text
  let feedbackText = boolCorrect ?
    `Yes, ${quizDataGlobal[correctAnswer].companyName} is correct!` :
    `I'm sorry, ${quizDataGlobal[correctAnswer].companyName} is incorrect.`;
  
  //Render Feedback Display
  
  let feedbackDisplayInnerHTML = `
    <div class="question-feedback-display">
      <h2>${feedbackText}</h2>
      <p>${quizDataGlobal[correctAnswer].companyDescription}</p>
      <button role="button" class="next-question-button js-next-question-button">Next question</button>
      <button role="button" class="finish-quiz-button js-finish-quiz-button">Finish quiz</button>
    </div>
  `;
  
  $('main').html(feedbackDisplayInnerHTML);
  

  if(TESTING) {
    console.log(`"renderFeedbackDisplay" was called.`);
    $('.question-feedback-display').append(
      `<button role="button" class="js-start-quiz-button">TESTING:<br/>Generate new question</button>`
      );
  }
}

function handleFeedbackDisplay() {
  
  // When the user clicks "Next question", render a new quiz question
  $('main').on('click', '.js-next-question-button', function(event){
    event.preventDefault();
    
    // Render another question, and the cycle continues!
    renderQuizDisplay();
    
    // Testing for "Next question" button handling
    if (TESTING) {
      console.log(`"Next Question" button was clicked`);
    }
    
  });
  
  $('main').on('click', '.js-finish-quiz-button', function(event) {
    event.preventDefault();
    
    renderFinalResultsDisplay();
    
    // Testing for "Finish quiz" button handling
    if (TESTING) {
      console.log(`"Finish quiz" button was clicked`);
    }
    
  });
  
  // When the user clicks "Finish quiz", take them to the final results display
  
  if (TESTING) {
    console.log(`"handleFeedbackDisplay" was called.`);
  }
  
}
    
//HEADER QUESTION NUMBER AND USER SCORE (userProgressElement)

function renderHeaderQuestionNumber() {
  
  $('.js-header-question-number').html(`
  Question #${userProgressGlobal.questionNumber}`);
  
  if(TESTING){
    console.log(`"renderHeaderQuestionNumber" was called.
      Question #: ${userProgressGlobal.questionNumber}
    `);
  }
  
}

function renderHeaderUserScore () {
  
  let correctPercentage = ((userProgressGlobal.correctAnswers
                           /userProgressGlobal.questionNumber)
                           * 100).toFixed(1);

  
  let userScoreString = `Correct: ${userProgressGlobal.correctAnswers}`
                        + `/${userProgressGlobal.questionNumber}`
                        + ` (${correctPercentage}%)`;
  
  $('.js-header-user-score').html(userScoreString);
  
  
  if(TESTING){
    console.log(`"renderHeaderUserScore" was called.
      User Score: ${userProgressGlobal.correctAnswers}
    `);
  }
}



//===========================================================================//

//FINAL RESULTS DISPLAY

function renderFinalResultsDisplay() {
  
  // Hide the question number and user score from the top Nav
  
  $('.js-header-question-number').html("");
  $('.js-header-user-score').html("");
  
  // Calculate & format percentage correct
  
  let percentageCorrect = ((userProgressGlobal.correctAnswers
                            / userProgressGlobal.questionNumber)
                           * 100)
                           .toFixed(1);
  
  let finalResultsDisplayInnerHTML = `
    <div class="final-results-display">
      <h2>Final results</h2>
      <p>Total questions: ${userProgressGlobal.questionNumber}</p>
      <p>Correct answers: ${userProgressGlobal.correctAnswers}</p>
      <p>Performance: ${percentageCorrect}%</p>
      <button role="button" class="start-new-quiz-button js-start-new-quiz-button">Start new quiz</button>
    </div>
  `;
  
  $('main').html(finalResultsDisplayInnerHTML);
  
  
  //NOTE: The "Start new quiz" button listener is the same action as the initial
  // "Start quiz" button, and thus is handled by handleStartingDisplay.

  if(TESTING) {
    console.log(`"renderFinalResultsDisplay" was called.
      Total Questions: ${userProgressGlobal.questionNumber}
      Total Correct: ${userProgressGlobal.correctAnswers}
      Performance: ${percentageCorrect}%
    `);
  }
}

function handleFinalResultsDisplay () {
  
  $('main').on('click', '.js-start-new-quiz-button', function(event) {
    
    //Reload the page, taking the user back to the Start Display
    location.reload();
    
  });
  
  
  if (TESTING) {
    console.log(`"handleFinalResultsDisplay" was called"`);
  }
}


// DOCUMENT LOAD (handleQUizApp function)
  // When the user loads the document, the "startingDisplay" appears automatically.

function handleQuizApp() {
  // Subsidiary handler functions get called here
  
  handleStartingDisplay();
  handleQuizAnswer();
  handleFeedbackDisplay();
  handleFinalResultsDisplay();

  if(TESTING) {
    console.log(`"handleQuizApp" was called`);
  }
  
}

//jQuery launch code...  
$(handleQuizApp);