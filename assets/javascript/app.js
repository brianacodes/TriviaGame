
// START BUTTON FUNCTION
  // Listen to a click to the start button to initializes the timer and show the questions.
  
  // END GAME FUNCTION
  function endGame() {
    // $("#questionbank").hide();
    // var inputs = $("#questionBank").children("input:checked")

    // // for (i = 0; i < inputs.length; i++) {
    // //   var inputAnswer = inputs[i].val();
    // //   console.log(inputAnswer);
      
    // // }
    console.log("The game has ended");
  }
  // Verify that the page has loaded before our script interacts with the page (run JS only after document is ready/page loaded)
  
  $(document).ready(function() {
    // DATA LAYER: Variable that stores the questions and possible and correct answers
    var questions = [
      {
        question: 'What 90s female group taught us how to "Creep?"', 
        possAnswers: ["Destiny's Child", "TLC", "SWV", "Blaque"],
        answer: 1, // Index of correct answer
      },
      {
        question: 'Who demanded that you "Say My Name?"', 
        possAnswers: ["Destiny's Child", "TLC", "SWV", "Blaque"],
        answer: 0, // Index of correct answer
      },
      {
        question: 'Who suggested that you "kick off your shoes and relax your feet"?', 
        possAnswers: ["Destiny's Child", "TLC", "SWV", "Xscape"],
        answer: 3, // Index of correct answer
      },
    ];
    
    $("#start").on('click', function() {
      //Go to new div?
      $("#start").hide();
      // Append all questions/answers onto the page
      for (var i = 0; i < questions.length; i++) {
        $('#questionBank').append("<p class='font-weight-bold'>"+ questions[i].question +"</p>");

        // Bind the possAnswers with their respective question AS IN...this button belongs to question 1 and this one and this one....
          //"<input name='question-" READS..."name=question-1, 2, 3...")
          var answerHtml;
        for (var x = 0; x < questions[i].possAnswers.length; x++) {
          answerText = questions[i].possAnswers[x];
          answerHtml = "<input name='question-" + i + "' value='" + answerText + "' type='radio'>" + questions[i].possAnswers[x] +"<br>";

          $('#questionBank').append(answerHtml);        
        }
      }

      // Start timer
      var timer = 30; //shows to the user [seconds]
      var interval = setInterval(decrementTimer, 1000);

      function decrementTimer() {
      timer--;
      $("#timer").text(timer);
      if (timer === 0) {
        clearInterval(interval)
        endGame();
      };
    }
  });
// Show the questions
// Use a for loop to iterate over the questions
// Keep track of a variable that holds which iteration
// Iterator (n.) something that does the same thing over and over until you tell it stop.
// for 
// On-click function to listen for when the user is ready to submit all answers or when timer has run out

// Collect all of the answers and compare them to the correct answer



});
