'use strict';


//STARTING DISPLAY

function handleStartingDisplay() {
  
  $('.start-quiz-button').on('click', function(event){
    
    //Initialize previous correct answer tracking, to avoid repeat questions
    let prevCorrectAnswer;
    
    //Clear the display
      // I don't think I need to do this, but I'm leaving it here just in case.
    
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
  // This renders the .quiz-form.container display. The HTML is generated
  // as a template string, within which the renderQuizForm function is called.
  
  //Update userProgress.questionNumber to reflect the new question
    userProgressGlobal.questionNumber += 1;
    
  //Render the "userProgressElement" should be rendered.
    renderUserProgressElement();
  
  // Render the quizDisplay
  let quizDisplayInnerHTML = `
    <div class="quiz-form-container">
      <form class="quiz-form" required>
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
  }
  
}

function renderQuizForm(prevCorrectAnswer) {
  
  //This function renders the quizForm within the quizDisplay
  
  // When quizForm is called to appear:
  let quizOptions = selectQuizOptions();
    
  // Select the correctAnswer
  let correctAnswer = selectCorrectAnswer(quizOptions, prevCorrectAnswer);
  
  // Create the quizForm innterContent
  let quizFormInnerHTML = `
    <h2>${quizDataGlobal[correctAnswer].companyQuestion}</h2>
    <fieldset></fieldset>`;
  
  $('.quiz-form').html(quizFormInnerHTML);
  
  //Generate quizOptions
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

  function selectQuizOptions() {
    // TODO: This function will select 4 IDs from quizDataGlobal, representing
    // the four companies to be used
    
    
    
    return [0,1,2,3]; // TESTING VALUE
    
    if(TESTING) {
      console.log(`"selectQuizOptions" was called.`);
    }
  }
  
  function selectCorrectAnswer(quizOptions, prevCorrectAnswer) {
    // TODO: This function selects a correct answer that doesn't match the previous
    // correct answer.
    
    return 0; //TESTING VALUE
    
    if(TESTING) {
      console.log(`"selectCorrectAnswer" was called.`);
    }
  }
  
  function renderQuizOption(index) {
    // This function renders the label->input HTML code for a single quizOption

      let quizOptionInnerHTML = `
        <label class="quiz-option">
          <input type="radio" name="answer" value="${index}">
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
  // When a quizForm is submitted:
    // 1. Did they answer correctly? (quizForm.val() === correctAnswer?)
      // YES:
        // Set the "feedbackMessage" to the "correctAnswerMessage"
        // Increase userProgress.correctAnswers by 1
      // NO: 
        // Set the "feedbackMessage" to the "incorrectAnswerMessage"
    // 2. The quizForm should disappear
    // 3. The feedbackDisplay should be called to appear

//FEEDBACK DISPLAY (feedbackDisplay)
  //When feedbackDisplay is called to appear, it is populated with the following:
    // feedbackMessage, as passed from the quizForm
    // answerFeedback is drawn from quizData[correctAnswer]
  // The user has two options from the feedbackDisplay:
    // If the user presses the "nextQuestion" button: call quizForm to appear
    // If the user presses the "endQuiz" buttong: Call the "finalResultsDisplay" to appear
    
//USER PROGRESS ELEMENT (userProgressElement)
function renderUserProgressElement() {
  // When the userProgressElement is rendered:
    // Question Number = userProgress.questionNumber
    // Answered correctly = userProgress.correctAnswers
    // % Correct = userProgress.correctAnswers / (userProgress.questionNUmber - 1)
      // This adjusts for the fact that questionNumber is advanced one beyond how many questions they've answered.

  if(TESTING) {
    console.log(`"renderUserProgressElement" was called.`);
  }
  
}



    
//FINAL RESULTS DISPLAY (finalResultsDisplay)
  // When the finalResultsDisplay is called to appear:
    // 1. The userProgressElement content should be cleared (to avoid duplicate content)
    // 2. The finalResultsDisplay is rendered:
      // Total questions = userProgress.questionNumber
      // Answered correctly = userProgress.correctAnswers
      // % Correct = userProgress.correctAnswers / (userProgress.questionNUmber)
    // If the user presses the "startNewQuiz" button:
      // Call the handleQuizApp function, which re-initializes the system

// DOCUMENT LOAD (handleQUizApp function)
  // When the user loads the document, the "startingDisplay" appears automatically.

function handleQuizApp() {
  // Subsidiary handler functions get called here
  
  handleStartingDisplay();
  
  if(TESTING) {
    console.log(`"handleQuizApp" was called`);
  }
  
}

//jQuery launch code...  
$(handleQuizApp);