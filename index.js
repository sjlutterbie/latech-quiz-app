'use strict';

/*  CODE OUTLINE
* 
* 1. Starting Display
*    - (startingDisplay built in default HTML)
*    - Event handler
* 2. User Progress Display (in page header)
*    - Update Question Number
*    - Update User Score
* 3. Quiz Display
*    - Build quizDisplay & support functions
* 4. Quiz Response Handling
*    - Event handler & support functions
* 5. Feedback Display
*    - Build feedbackDisplay
*    - Event handlers
* 6. Final Results Display
*    - Build finalResultsDisplay
*    - Event handlers
* 7. Init & document load functions
* 
* NOTE: Global variables loaded in HTML, from globalVars.js
*
*/


/* =========================== *
*  === 1. STARTING DISPLAY === *
*  =========================== */


function handleStartingDisplay() {
  // When user clicks the "Start" button, initialize the quiz setup and
  // progress to displaying the first question.

  $('main').on('click', '.js-start-quiz-button', function(event){
    event.preventDefault();
    
    // Initialize previous correct answer tracking, to avoid repeat questions
    let prevCorrectAnswer;
      // TODO: Replace prevCorrectAnswer path with a shuffled array.

    // Display a quiz question
    renderQuizDisplay(prevCorrectAnswer);

  });

}

/* ================================ *
*  === 2. USER PROGRESS DISPLAY === *
*  ================================ */

function renderHeaderQuestionNumber() {
  // Updates the "Question #" display in the page header
  
  //Compose string to display
  let questionNumberString = `Question #${userProgressGlobal.questionNumber}`;
  
  // Update DOM
  $('.js-header-question-number').html(questionNumberString);
  
}

function renderHeaderUserScore () {
  // Updates the User score tracker in the page header
  
  // Calculate percentage, limit to 1 decimal place
  let percentageCorrect = calculatePercentageCorrect(
                            userProgressGlobal.correctAnswers,
                            userProgressGlobal.questionNumber,
                            1);

  // Compose string to display
  let userScoreString = `Correct: ${userProgressGlobal.correctAnswers}`
                        + `/${userProgressGlobal.questionNumber}`
                        + ` (${percentageCorrect}%)`;
  
  // Update DOM
  $('.js-header-user-score').html(userScoreString);
  
}

/* ======================= *
 * === 3. QUIZ DISPLAY === *
 * ======================= */

function renderQuizDisplay(prevCorrectAnswer) {
  // Advances the quiz game and displays a new quiz question
  
  // Update the question number and user progress display
  updateQuestionNumber();
  
  // Build the Quiz Display
  
    // Create the Quiz Display HTML container & form
    let quizDisplayHTML = `
      <div class="md-whiteframe-15dp quiz-form-container">
        <form class="quiz-form">
        </form>
      </div>`;
    
    // Update DOM
    $('main').html(quizDisplayHTML);
    
  // Build the Quiz Form
  renderQuizForm(prevCorrectAnswer);
  
}

  function updateQuestionNumber() {
    // Updates the question number and associated user progress display
    
    // Increase question number
    userProgressGlobal.questionNumber += 1;
    
    // Update the user progress display
    renderHeaderQuestionNumber();
    
  }

  function renderQuizForm(prevCorrectAnswer) {
    //Generate a quiz question and build the form HTML
    
    // Build a quiz question
      // Select Quiz Options
      let quizOptions = selectQuizOptions(4, quizDataGlobal.length);
      // Select correct answer
      let correctAnswer = selectCorrectAnswer(quizOptions, prevCorrectAnswer);


    // Build the Quiz Form content
    // NOTE: The correct answer is passed out via the submit button's name
    let quizFormHTML = `
      <fieldset>
        <legend>
          <h2>${quizDataGlobal[correctAnswer].companyQuestion}</h2>
        </legend>
        <div class="fieldset-flex-container"></div>
      </fieldset>
      <input type="submit"
             class="md-whiteframe-4dp quiz-submit-button js-quiz-submit-button"
             name="${correctAnswer}">
      </input>`;
    
    // Update DOM
    $('.quiz-form').html(quizFormHTML);
    
    // Generate the Quiz Option HTML, which render within the Quiz Form
    quizOptions.forEach(index => renderQuizOption(index));

  }

    function selectQuizOptions(optCount, maxIndex) {
      // Generates an array of optCount indexes for an array of length maxIndex
      
      let array = [];
      
      while (array.length < optCount) {
        let rand = Math.floor(Math.random() * maxIndex);
        // If the rand isn't already in the array, add it. (Prevents duplicates)
        if (!array.includes(rand)){
          array.push(rand);
        }
      }
      
      return array;
      
    }
  
    function selectCorrectAnswer(quizOptions, prevCorrectAnswer) {
      // Select a correct answer from provided quiz options.
      // To avoid repetition, the correct answer can't have the same index as
      // the previous correct answer.
      
      // Start with the new answer = the previous answer, for the while loop.
      let newAnswer = prevCorrectAnswer;
      
      // If the new answer is the same as the previous answer...
      while (newAnswer === prevCorrectAnswer) {
        // ... generate a new correct answer
        newAnswer = quizOptions[Math.floor(Math.random() * quizOptions.length)];
      }
      
      // Update prevCorrectAnswer for the next go around.
      prevCorrectAnswer = newAnswer;
      
      return newAnswer; 
    }
 
    function renderQuizOption(index) {
      // Render the label & input for the quiz option with a given index
      
      // Build the HTML
      let quizOptionHTML = `
            <div class="quiz-option-container">
              <label class="md-whiteframe-4dp quiz-option"
                     for="${index}">${quizDataGlobal[index].companyName}
                <input type="radio" name="answer" 
                       id="${index}" value="${index}" required>
              </label>
            </div>`;
      
      //Update DOM
      $('div.fieldset-flex-container').append(quizOptionHTML);

    }

/* ================================= *
 * === 4. QUIZ RESPONSE HANDLING === *
 * ================================= */

function handleQuizAnswer() {
  // When user presses the "Submit" button, collect and evaluate the answer,
  // and trigger the appropriate feedback display.
  
  $('main').on('click', '.js-quiz-submit-button', function(event) {
    event.preventDefault();
    
    // Get submitted quiz answer from the form
    let answerVal = $('input[name="answer"]:checked').val();
    
    // Get correct answer stored in the submit button
    let correctAnswer = $('.quiz-submit-button').attr('name');
    
    // If no response, trigger an alert and exit the function
    if (!answerVal) {
      alert('Please select an answer.');
      
      // TODO: Convert this to an in-page warning
      
      return;
    }

    //Check Answer
    let boolCorrect = processQuizAnswer(answerVal, correctAnswer);
      
    // render Feedback display
    renderFeedbackDisplay(boolCorrect, answerVal, correctAnswer);
  
  });
  
}

  function processQuizAnswer(answerVal, correctAnswer) {
    // Check if the answer is correct. If it is, advance the global variable
    // userProgressGlobal.correctAnswers
    
    //Check for correct answer
    let boolCorrect = (answerVal === correctAnswer);
    
    //If correct, update userProgressGlobal
    if (boolCorrect) {
      userProgressGlobal.correctAnswers += 1;
    }
    
    return boolCorrect;
    
  }

/* =========================== *
*  === 5. FEEDBACK DISPLAY === *
*  =========================== */

function renderFeedbackDisplay(boolCorrect, answerVal, correctAnswer) {
  // Build the Quiz Item Feedback Display, including the user score in the
  // page header.

  // Update user score in page header
  renderHeaderUserScore();
  
  // Generate response text
  let feedbackText = boolCorrect ?
    `Yes, ${quizDataGlobal[answerVal].companyName} is correct!` :
    `I'm sorry, ${quizDataGlobal[answerVal].companyName} is incorrect.`;
  
  // Build Feedback Display HTML
  let feedbackDisplayHTML = `
    <div class="md-whiteframe-15dp question-feedback-display">
      <h2>${feedbackText}</h2>
      <p>${quizDataGlobal[correctAnswer].companyDescription}</p>
      <button role="button" class="md-whiteframe-4dp next-question-button js-next-question-button">Continue</button>
      <button role="button" class="md-whiteframe-4dp finish-quiz-button js-finish-quiz-button">Exit</button>
    </div>`;
  
  // Update DOM
  $('main').html(feedbackDisplayHTML);
  
}

function handleFeedbackDisplay() {
  // The user can either click the "Continue" button to load another question, or
  // they can click the "Finish" button to end the quiz and see final results.
    // NOTE: To match project requirements, the "Finish" button is not displayed
    // until the user has responed to at least 5 questions.
  
  // When the user clicks the "Continue" button...
  $('main').on('click', '.js-next-question-button', function(event){
    event.preventDefault();
    
    // ...Render another question, and the cycle continues!
    renderQuizDisplay();
    
  });
  
  // When the user clicks the "Finish" button...
  $('main').on('click', '.js-finish-quiz-button', function(event) {
    event.preventDefault();
    
    // ...Render the Final Results Display
    renderFinalResultsDisplay();
    
  });
  
}
    
/* ================================ *
 * === 6. FINAL RESULTS DISPLAY === *
 * ================================ */

function renderFinalResultsDisplay() {
  // When the user clicks the "Finish" button, display their overall score, and
  // give them the option of starting a new quiz

  // Hide the question number and user score from the header,
  // to avoid repetition.
  $('.js-header-question-number').html("");
  $('.js-header-user-score').html("");
  
  // Calculate & format percentage correct
  let percentageCorrect = calculatePercentageCorrect(
                            userProgressGlobal.correctAnswers,
                            userProgressGlobal.questionNumber,
                            1);
                            
    //TODO: This calculation has been run earlier -> split it into a function
  
  // Build the Final Results Display HTML
  let finalResultsDisplayHTML = `
    <div class="md-whiteframe-15dp final-results-display">
      <h2>Final results</h2>
      <p>Total questions: ${userProgressGlobal.questionNumber}</p>
      <p>Correct answers: ${userProgressGlobal.correctAnswers}</p>
      <p>Performance: ${percentageCorrect}%</p>
      <button role="button" class="md-whiteframe-4dp start-new-quiz-button js-start-new-quiz-button">Restart</button>
    </div>`;
  
  // Update the DOM
  $('main').html(finalResultsDisplayHTML);
  
}

  function calculatePercentageCorrect(correct, total, fixLength) {
    // Calculate the percentage of correct answers, limiting the result to 
    // fixLength decimal points.
    
      let percent = ((correct / total) * 100).toFixed(fixLength);
      
      return percent;
  }

function handleFinalResultsDisplay () {
  // If the user clicks the "Restart" button, reloads the page, thus starting
  // a fresh quiz.
  
  // When the user presses the "Restart" button...
  $('main').on('click', '.js-start-new-quiz-button', function(event) {
    
    // ...Reload the page, taking the user back to the Start Display
    location.reload();
    
  });
  
}

/* =========================================== *
 * === 7. INIT AND DOCUMENT LOAD FUNCTIONS === *
 * =========================================== */

function handleQuizApp() {
  // Load event handler functions

  handleStartingDisplay();
  handleQuizAnswer();
  handleFeedbackDisplay();
  handleFinalResultsDisplay();

}

// And finally... the jQuery launch code!  
$(handleQuizApp);