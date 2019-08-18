// Click button to start (Displays questions and starts 60 second timer)
// Player answers 10 multiple choice questions
// Player is only allowed to choose one answer per question
// Player clicks submit button
// HTML is updated to display player's number of correct and incorrect answers 


// 
var number = 10;
var intervalId;

$("#start-button").on("click", function () {

  // Hides splash page
  $("#splash-page").hide();

  // Displays initial timer text
  $("#timer").html("<h3>Time Remaining :60</h3>" + "<br>");
  run();



  // Displays questions and answer options
  $("#questions-display").html("<p>" + questionList[0].question + "</p>");
  $("#answers-display").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questionList[0].answers[0] + "</label>" +
    "<input type='radio' name='answer1' value='1'>" + "<label>" + questionList[0].answers[1] + "</label>" +
    "<input type='radio' name='answer1' value='2'>" + "<label>" + questionList[0].answers[2] + "</label><hr>" +
    "<p>" + questionList[1].question + "</p>" +
    "<input type='radio' name='answer2' value='0'>" + "<label>" + questionList[1].answers[0] + "</label>" +
    "<input type='radio' name='answer2' value='1'>" + "<label>" + questionList[1].answers[1] + "</label>" +
    "<input type='radio' name='answer2' value='2'>" + "<label>" + questionList[1].answers[2] + "</label><hr>" +
    "<p>" + questionList[2].question + "</p>" +
    "<input type='radio' name='answer3' value='0'>" + "<label>" + questionList[2].answers[0] + "</label>" +
    "<input type='radio' name='answer3' value='1'>" + "<label>" + questionList[2].answers[1] + "</label>" +
    "<input type='radio' name='answer3' value='2'>" + "<label>" + questionList[2].answers[2] + "</label><hr>" +
    "<p>" + questionList[3].question + "</p>" +
    "<input type='radio' name='answer3' value='0'>" + "<label>" + questionList[3].answers[0] + "</label>" +
    "<input type='radio' name='answer3' value='1'>" + "<label>" + questionList[3].answers[1] + "</label>" +
    "<input type='radio' name='answer3' value='2'>" + "<label>" + questionList[3].answers[2] + "</label><hr>" +
    "<p>" + questionList[4].question + "</p>" +
    "<input type='radio' name='answer4' value='0'>" + "<label>" + questionList[4].answers[0] + "</label>" +
    "<input type='radio' name='answer4' value='1'>" + "<label>" + questionList[4].answers[1] + "</label>" +
    "<input type='radio' name='answer4' value='2'>" + "<label>" + questionList[4].answers[2] + "</label><hr>" +
    "<p>" + questionList[5].question + "</p>" +
    "<input type='radio' name='answer5' value='0'>" + "<label>" + questionList[5].answers[0] + "</label>" +
    "<input type='radio' name='answer5' value='1'>" + "<label>" + questionList[5].answers[1] + "</label>" +
    "<input type='radio' name='answer5' value='2'>" + "<label>" + questionList[5].answers[2] + "</label><hr>" +
    "<p>" + questionList[6].question + "</p>" +
    "<input type='radio' name='answer6' value='0'>" + "<label>" + questionList[6].answers[0] + "</label>" +
    "<input type='radio' name='answer6' value='1'>" + "<label>" + questionList[6].answers[1] + "</label>" +
    "<input type='radio' name='answer6' value='2'>" + "<label>" + questionList[6].answers[2] + "</label><hr>");

    // Targets submit-button div and displays text

    $("#submit-button").html("<button id='done' class='btn btn-outline-light'>Done</button>");
   
});

// Should run tallyscore on click
$("#submit-button").on("click", function() {
  stop();
  tallyScore();
});


//  Tallies Score

function tallyScore() {
  
  var userAnswer1 = $("input[name='answer1']:checked").val();
  alert(userAnswer1);

}



// Starts the clock

function run() {

  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}


function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #time tag
  $("#timer").html("<h3>Time Remaining :" + number + "</h3>" + "<br>");

  

  if (number === 0) {

      // Run stop function to stop timer and tally score countdown
      stop();
      tallyScore();
      
  }
}

function stop() {

  //  Clears intervalId
  clearInterval(intervalId);
}



// Array of objects with the questions, multiple choices, and correct answers
var questionList =
  [
    {
      question: "1. Which King of Israel murdered his own soldier to cover up that he had impregnated that soldier's wife?",
      answers: ["King Uzziah", "King David", "King Josiah"],
      correct: "King David"
    },
    {
      question: "2. Who ordered a baby to be cut in half in order to resolve a custody dispute?",
      answers: ["King Solomon", "King Herod", "Pharaoh"],
      correct: "King Solomon"
    },
    {
      question: "3. Who was reportedly stripped naked, beaten, killed and mocked as 'King of the Jews?'",
      answers: ["Joshua", "John", "Jesus"],
      correct: "Jesus"
    },
    {
      question: "4. Who ordered the execution of all male children two years old and under in the vicinity of Bethlehem?",
      answers: ["King Manasseh", "King Herod", "King Jehoiakim"],
      correct: "King Herod"
    },
    {
      question: "5. Who was rumored to have 700 wives and 300 concubines?",
      answers: ["King Hezekiah", "King Ahab", "King Solomon"],
      correct: "King Solomon"
    },
    {
      question: "6. Which King did nothing after finding out that his son had raped his daughter?",
      answers: ["King David", "King Jehoshaphat", "King Jeroboam"],
      correct: "King David"
    },
    {
      question: "7. As punishment for praying, who threw a prophet into a lion's den?",
      answers: ["King Jehu", "King Darius", "King Rehoboam"],
      correct: "King Darius"
    },
  ]