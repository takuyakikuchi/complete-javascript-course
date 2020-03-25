(function() {
  // 1
  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  // 2
  const question1 = new Question(
    "What is my name?",
    ["Takuya", "Mac", "Tom"],
    0
  );
  const question2 = new Question("How old am I?", [27, 28, 29, 30], 2);
  const question3 = new Question(
    "What is your hobby",
    ["futsal", "soccer", "wine", "movie", "All"],
    4
  );
  // 3
  const questions = [question1, question2, question3];

  // 4
  const randomPick = questions[Math.floor(Math.random() * questions.length)];
  console.log(randomPick.question);
  randomPick.answers.forEach((answer, i) => {
    console.log(`${i + 1}: ${answer}`);
  });

  // 5
  const response = window.prompt("Please input number for the correct answer");
  checkCorrect(response, randomPick);

  // 6
  function checkCorrect(response, randomPick) {
    if (response - 1 === randomPick.correctAnswer) {
      console.log("Correct!!");
    } else {
      console.log("Wrong. Try again");
    }
  }
})();
