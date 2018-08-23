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
    
  //Render the "userProgressElement" should be rendered.
    renderUserProgressElement();
  
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
    
    console.log("Evaluating answer...");
    
      //Check Answer
      let boolCorrect = processQuizAnswer(answerVal, correctAnswer);
    
    //Quiz answer submission testing
    if(TESTING) {
      console.log(`Quiz answer submitted!
        answerVal: ${answerVal}
        correctAnswer: ${correctAnswer}
        boolCorrect: ${boolCorrect}
        Company: ${quizDataGlobal[answerVal].companyName}
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


      // When a quizForm is submitted:
    // 1. Did they answer correctly? (quizForm.val() === correctAnswer?)
      // YES:
        // Set the "feedbackMessage" to the "correctAnswerMessage"
        // Increase userProgress.correctAnswers by 1
      // NO: 
        // Set the "feedbackMessage" to the "incorrectAnswerMessage"
      // 3. The feedbackDisplay should be called to appear
    

//===========================================================================//


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
  handleQuizAnswer();
  
  if(TESTING) {
    console.log(`"handleQuizApp" was called`);
  }
  
}

//jQuery launch code...  
$(handleQuizApp);