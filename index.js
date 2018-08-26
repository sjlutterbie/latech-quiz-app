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
  
  // When the user clicks the "Start" button...
  $('main').on('click', '.js-start-quiz-button', function(event){
    event.preventDefault();
    
    
    // ... Build the question list
    questionList = buildQuestionList(quizDataGlobal.length);
    
    // Display a quiz question
    renderQuizDisplay(questionList);

  });

}

  function buildQuestionList (length) {
    // Build an array that includes a shuffled list of array IDs for a given
    // length array.
  
    // Create empty array
    let array = [];
    // Populate with indexes
    for (let i = 0; i < length; i++) {
      array.push(i);
    }
    
    // Shuffle array
    array = shuffleArray(array);
    
    return array;
  
  }
  
  function shuffleArray(array) {
    // Shuffles the order of items in an array using the Fisher-Yates shuffle
    // algorithm
    
    // Starting from the END of the array and working backwards...
    for (let i = array.length - 1; i > 0; i--) {
      // Select an earlier item in the array
      const j = Math.floor(Math.random() * (i + 1));
      // Switch the two items in the array
      [array[i], array[j]] = [array[j], array[i]];
    }
     
    return array;
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

function renderQuizDisplay(questionList) {
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
  renderQuizForm(questionList);
  
}

  function updateQuestionNumber() {
    // Updates the question number and associated user progress display
    
    // Increase question number
    userProgressGlobal.questionNumber += 1;
    
    // Update the user progress display
    renderHeaderQuestionNumber();
    
  }

  function renderQuizForm() {
    //Generate a quiz question and build the form HTML
    
    // Build a quiz question
      // If the questionList is empty, rebuild it.
      if (questionList.length === 0) {
        questionList = buildQuestionList(quizDataGlobal.length);
      }
      
    // Choose the next question (aka the next correct answer)
    let correctAnswer = questionList.pop();

    // Select the rest of the question options
    let quizOptions = selectQuizOptions(correctAnswer, 4, quizDataGlobal.length);
    
    // Shuffle the quiz options
    quizOptions = shuffleArray(quizOptions);
    
    // Build the Quiz Form content
    // NOTE: The correct answer is passed out via the submit button's name
    let quizFormHTML = `
      <fieldset>
        <legend>
          <h2>${quizDataGlobal[correctAnswer].companyQuestion}</h2>
        </legend>
        <div class="fieldset-flex-container"></div>
      </fieldset>
      <div tabindex="0" role="button" class="md-whiteframe-8dp answer-required-alert
        js-answer-required-alert">You must select an answer.
        <i class="material-icons">error</i>
      </div>
      <input type="submit"
             class="md-whiteframe-4dp quiz-submit-button js-quiz-submit-button"
             name="${correctAnswer}">
      </input>`;
    
    // Update DOM
    $('.quiz-form').html(quizFormHTML);
    
    // Hide the "response required alert" to start
    $('.js-answer-required-alert').toggle(false);

    
    // Generate the Quiz Option HTML, which render within the Quiz Form
    quizOptions.forEach(index => renderQuizOption(index));

  }

    function selectQuizOptions(correctAnswer, optCount, maxIndex) {
      // Generates an array of optCount indexes, that includes correctAnswer,
      // for an array of length maxIndex
      
      let array = [correctAnswer];
      
      while (array.length < optCount) {
        let rand = Math.floor(Math.random() * maxIndex);
        // If the rand isn't already in the array, add it. (Prevents duplicates)
        if (!array.includes(rand)){
          array.push(rand);
        }
      }
      
      return array;
      
    }
 
    function renderQuizOption(index) {
      // Render the label & input for the quiz option with a given index
      
      // Build the HTML
      let quizOptionHTML = `
            <div class="quiz-option-container">
              <input type="radio" name="answer" 
                       id="${index}" value="${index}" required>
              <label tabindex="0" class="md-whiteframe-4dp quiz-option js-quiz-option"
                     for="${index}">${quizDataGlobal[index].companyName}</label>
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
      
      $('.js-answer-required-alert').toggle(true);

      // TODO: Convert this to an in-page warning
      
      return;
    }

    //Check Answer
    let boolCorrect = processQuizAnswer(answerVal, correctAnswer);
      
    // render Feedback display
    renderFeedbackDisplay(boolCorrect, answerVal, correctAnswer, questionList);
  
  });
  
  // Provide three methods for removing the "answer required" alert:
    // Option 1: Select an answer
    $('main').on('click', '.js-quiz-option', function(event) {
      $('.js-answer-required-alert').toggle(false);
    });
    // Option 2: Click the alert itself
    $('main').on('click', '.js-answer-required-alert', function(event) {
      $('.js-answer-required-alert').toggle(false);
    });
    // Option 3: Keydown click on the alert itself
    $('main').on('keydown', '.js-answer-required-alert', function(event) {
      
      // If the user presses "spacebar" or "enter" keys...
      if ([13,32].includes(event.keyCode)) {
        
        //Click the radio button underlying the label
       $('.js-answer-required-alert').toggle(false);        
      }
      
    });
    
  // Handle label presses, to enable keyboard selection of quiz options
  $('main').on('keydown', '.quiz-option', function(event) {
      
      // If the user presses "spacebar" or "enter" keys...
      if ([13,32].includes(event.keyCode)) {
        
        //Click the radio button underlying the label
        $(`input#${this.htmlFor}`).click();        
      }

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

function renderFeedbackDisplay(boolCorrect, answerVal, correctAnswer, questionList) {
  // Build the Quiz Item Feedback Display, including the user score in the
  // page header.
    // NOTE: To adhere to Thinkful project requirements, the "Exit" button does
    // not display until the user has answered at least 5 questions.

  // Update user score in page header
  renderHeaderUserScore();
  
  // Generate response text
  let feedbackText = boolCorrect ?
    `Yes, ${quizDataGlobal[answerVal].companyName} is correct!` :
    `I'm sorry, ${quizDataGlobal[answerVal].companyName} is incorrect.`;
  
  // Include the "Exit" button if the questionNumber is >= 5
  let finishButtonHTML = (userProgressGlobal.questionNumber >= 5) ?
  `<button role="button"
    class="md-whiteframe-4dp finish-quiz-button js-finish-quiz-button">
    Exit</button>` : "";
    
  
  // Build Feedback Display HTML
  let feedbackDisplayHTML = `
    <div class="md-whiteframe-15dp question-feedback-display">
      <h2>${feedbackText}</h2>
      <p>${quizDataGlobal[correctAnswer].companyDescription}</p>
      <button role="button" class="md-whiteframe-4dp next-question-button js-next-question-button">Continue</button>
      ${finishButtonHTML}
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