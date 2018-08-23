'use strict';

// DOCUMENT LOAD (handleQUizApp function)
  // When the user loads the document, the "startingDisplay" should appear

//STARTING DISPLAY (startingDisplay)
  // When "startQuizButton" is pressed:
    // 1. The "userProgress" state is loaded as a global const (object), with the following structure:
      /*
        const userProgress = {
          questionNumber: 0,
          correctAnswers: 0
        }
      */
    // 2. The "quizData" is loaded as a global constant, with the following structure:
      /*
        quizData = [
          {
            companyName: {String},
            companyWebsite: {String},
            companyDescription: {String},
            companyQuestion: {String},
            companyLogo: {String}
          },
          {...}
        ]
      */
    // 3. Set a variable prevCorrectAnswer to undefined, which gets passed to quizForm
      // This will be used to prevent repeating the same question in a row
    // 4. startingDisplay should disappear
    // 5. "quizForm" should appear

//QUIZ FORM (quizForm)
  // When quizForm is called to appear:
    // 1. It gets prevCorrectAnswer from the function that called it
    // 2. A "quizItem" should be created:
      // 1. Four quizData.company objects should be selected by ID: quizOptions = [id1,id2,id3,id4]
      // 2. One element of quizOptions should be selected as the "correctAnswer"
          // If correctAnswer equals prevCorrectAnswer, go back and select another correctAnswer
    // 3. The "quizForm" is rendered, using the following data:
        // quizQuestion = quizData[correctAnswer].question
        // quizRadioSelects[1-4] = quizData[quizOptions...]
          // The value for each radio is set to the respective quizOption ID
    // 4. userProgress.questionNumber should increase by 1.
    // 5. The "userProgressElement" should be rendered.

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
  // When the userProgressElement is rendered:
    // Question Number = userProgress.questionNumber
    // Answered correctly = userProgress.correctAnswers
    // % Correct = userProgress.correctAnswers / (userProgress.questionNUmber - 1)
      // This adjusts for the fact that questionNumber is advanced one beyond how many questions they've answered.
    
//FINAL RESULTS DISPLAY (finalResultsDisplay)
  // When the finalResultsDisplay is called to appear:
    // 1. The userProgressElement content should be cleared (to avoid duplicate content)
    // 2. The finalResultsDisplay is rendered:
      // Total questions = userProgress.questionNumber
      // Answered correctly = userProgress.correctAnswers
      // % Correct = userProgress.correctAnswers / (userProgress.questionNUmber)
    // If the user presses the "startNewQuiz" button:
      // Call the handleQuizApp function, which re-initializes the system
