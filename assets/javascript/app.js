// Click button to start (Displays questions and starts 60 second timer)
// Player answers 10 multiple choice questions
// Player is only allowed to choose one answer per question
// Player clicks submit button
// HTML is updated to display player's number of correct and incorrect answers 


    $("#start-button").on("click", function(){
        alert("Working");
      });


// Array of objects with the questions, multiple choices, and correct answers
var questionList =
[
  {
    question: "Which King of Israel murdered his own soldier to cover up that he had impregnated that soldier's wife?",
    answers: ["King Uzziah", "King David", "King Josiah"],
    correct: "King David"
  },
    {
    question: "Who ordered a baby to be cut in half in order to resolve a custody dispute?",
    answers: ["King Solomon", "King Herod", "Pharaoh"],
    correct: "King Solomon"
  },
  {
    question: "Who was reportedly stripped naked, beaten, killed and mocked as 'King of the Jews?'",
    answers: ["Joshua", "John", "Jesus"],
    correct: "Jesus"
  },
  {
    question: "Who ordered the execution of all male children two years old and under in the vicinity of Bethlehem?",
    answers: ["King Manasseh", "King Herod", "King Jehoiakim"],
    correct: "King Herod"
  },
  {
    question: "Who was rumored to have 700 wives and 300 concubines?",
    answers: ["King Hezekiah", "King Ahab", "King Solomon"],
    correct: "King Solomon"
  },
  {
    question: "Which King did nothing after finding out that his son had raped his daughter?",
    answers: ["King David", "King Jehoshaphat", "King Jeroboam"],
    correct: "King David"
  },
  {
    question: "As punishment for praying, who threw a prophet into a lion's den?",
    answers: ["King Jehu", "King Darius", "King Rehoboam"],
    correct: "King Darius"
  },
]