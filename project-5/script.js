// Import Statement for Prompt-Sync Library
const prompt = require("prompt-sync")({
  sigint: true,
});

// 1. Display a start menu with instructions to begin the quiz.
console.log(`Welcome to Astrology Pop Quiz!`);
console.log(`--------------------------------------------------\n`);
console.log(` - You will be asked 10 multiple-choice questions.\n`);
console.log(` - Please enter the number of your answer (1, 2, 3, or 4).\n`);
console.log(
  ` - After each question, you will know if your answer was correct or incorrect.\n`
);
console.log(
  ` - At the end of the quiz, you will see your final score out of 10.\n`
);
console.log(`Have fun and good luck!\n`);
console.log(`--------------------------------------------------\n`);
let keepPlaying = true;
while (keepPlaying) {
  let score = 0;
  let questions = [
    "How many astrological signs are there?",
    "How many elements (or triplicities) are there in astrology?",
    "Which are examples of keywords for fire signs?",
    "Which are examples of keywords for earth signs?",
    "Which are examples of keywords for air signs?",
    "Which are examples of keywords for water signs?",
    "What are the fire signs?",
    "What are the earth signs?",
    "What are the air signs?",
    "What are the water signs?",
  ];
  let choices = [
    ["12", "10", "13", "15"],
    ["3", "4", "5", "7"],
    [
      "Communication, socialization, conceptualization",
      "Practicality, caution, material world",
      "Assertion, drive, willpower",
      "Emotion, empathy, sensitivity",
    ],
    [
      "Emotion, empathy, sensitivity",
      "Practicality, caution, material world",
      "Communication, socialization, conceptualization",
      "Assertion, drive, willpower",
    ],
    [
      "Assertion, drive, willpower",
      "Emotion, empathy, sensitivity",
      "Practicality, caution, material world",
      "Communication, socialization, conceptualization",
    ],
    [
      "Emotion, empathy, sensitivity",
      "Communication, socialization, conceptualization",
      "Practicality, caution, material world",
      "Assertion, drive, willpower",
    ],
    [
      "Gemini, Aquarius, Libra",
      "Taurus, Virgo, Capricorn",
      "Cancer, Scorpio, Pisces",
      "Aries, Leo, Sagittarius",
    ],
    [
      "Aries, Leo, Sagittarius",
      "Gemini, Aquarius, Libra",
      "Taurus, Virgo, Capricorn",
      "Cancer, Scorpio, Pisces",
    ],
    [
      "Gemini, Aquarius, Libra",
      "Taurus, Virgo, Capricorn",
      "Cancer, Scorpio, Pisces",
      "Aries, Leo, Sagittarius",
    ],
    [
      "Taurus, Virgo, Capricorn",
      "Cancer, Scorpio, Pisces",
      "Aries, Leo, Sagittarius",
      "Gemini, Aquarius, Libra",
    ],
  ];
  let correctChoice = ["1", "2", "3", "2", "4", "1", "4", "3", "1", "2"];
  // 2. Present each question one at a time with multiple-choice answers.
  for (let i = 0; i < questions.length; i++) {
    console.log(`${questions[i]}`);
    for (let j = 0; j < choices[i].length; j++) {
      console.log(`${j + 1}. ${choices[i][j]}`);
    }
    // 3. Allow the player to input their answer.
    let answer = prompt("Enter the number of your answer: ");
    // 4. Validate the player’s answer using comparison and logical operators.
    if (answer === correctChoice[i]) {
      // 5. Keep track of the player’s score.
      score++;
      // 6. Provide feedback after each question, indicating whether the answer was correct or incorrect.
      console.log("Correct!\n");
    } else {
      console.log(`Incorrect. The correct answer is: ${correctChoice[i]}\n`);
    }
  }
  // 7. Display the player’s final score and a message based on their performance.
  console.log(`Quiz completed. Your score is: ${score} out of 10`);
  // 8. Allow the player to replay the quiz if they wish.
  let replay = prompt(`Do you want to play again? (yes/no) `);
  console.log("\n");
  keepPlaying = replay === "yes";
}
console.log(`Thank you for playing!\n`);
