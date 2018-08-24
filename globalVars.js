'use strict';

// QUIZ DATA

const quizDataGlobal = [
  {
    companyName: "Alpha Inc.",
    companyWebsite: "http://www.cnn.com",
    companyDescription: "Alpha Inc.'s company description",
    companyQuestion: "Alpha Inc's company question",
    companyLogo: "82labs-logo.jpg"
  },
  {
    companyName: "Beta Corp.",
    companyWebsite: "http://www.abc.com",
    companyDescription: "Beta Corp's company description",
    companyQuestion: "Beta Corp's company question",
    companyLogo: "apponboard-logo.png"
  },
  {
    companyName: "Gamma Group",
    companyWebsite: "http://www.thinkful.com",
    companyDescription: "Gamma Group's company description",
    companyQuestion: "Gamma Group's company question",
    companyLogo: "attn-logo.png"
  },
  {
    companyName: "Delta Division",
    companyWebsite: "http://www.github.com",
    companyDescription: "Delta Division's company description",
    companyQuestion: "Delta Division's company question",
    companyLogo: "boundlessmind-logo.png"
  },
  {
    companyName: "Epsilon Enterprises",
    companyWebsite: "http://www.repl.it",
    companyDescription: "Epsilon Enterprise's company description",
    companyQuestion: "Epsilon Enterprise's company question",
    companyLogo: "brainjolt-logo.png"
  },
];

// QUESTION LIST (Order to be randomized)

let questionList = [];

// USER PROGRESS DATA

const userProgressGlobal = {
  questionNumber: 0,
  correctAnswers: 0
};
