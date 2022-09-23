const readlineSync = require("readline-sync");
const colors = require("colors");

var userName = readlineSync.question("What is Your Name? ".bold.italic);
console.log(colors.bold.red("Welcome! ") + userName.bold.underline.red) ;
 console.log('Is "Jujutsu Kaisen" Your Favorite Show? Take This Quiz And See If You Pass '.bold.magenta);

var score = 0;


function AskQuestion(question, answer) {
  var userAnswer = readlineSync.question(question.bold.yellow);
  
  if (userAnswer === answer ){
  console.log("right! ".green.italic);
  score = score + 1
} else {
  console.log("wrong! ".red.italic)
}
console.log("Current score: ", score);
console.log(colors.magenta("------------------------------------------------------------------"));
}

var questions =[{
  question : ` How many seconds does Gojo ask to have with Itadori's "Sukuna" form?
    a) 10
    b) 15
    c) 23  ` ,
  answer : "10"
},{
  question : ` What Straw Doll technique does Kugisaki use to keep Kechizu and Eso stunned?
    a) Hairpin
    b) Resonance 
    c) Black Flash ` ,
  answer : "Resonance"  
},{
  question : ` What type of weapon does Nobara use to exorcise curses?
    a) Sword
    b) Spear
    c) Hammer ` ,
  answer : "Hammer"
},{
  question : ` What ability allows Aoi to switch places with Yuji by clapping his hands?
    a) Boogie Woogie
    b) Trading Spaces
    c) Clap Back ` ,
  answer : "Boogie Woogie"
},{
  question : ` What task taught Itadori to control his emotions while using cursed energy to keep a doll asleep?
    a) Dancing
    b) Listening Music
    c) Watching Movies ` ,
  answer : "Watching Movies"
},{
  question : ` What question does Aoi Todo ask both Yuji and Megumi to see if they're boring?
    a) The type ofwomen he likes
    b) The type of movies he likes
    c) The type of music he likes ` ,
  answer : "The type ofwomen he likes"
},{
  question : ` Who is Gojo fighting when he teaches Itadori about domain expansion?
    a) Jogo
    b) Suguru Geto
    c) Mahito ` ,
  answer : "Jogo"
},{
  question : `Who is the rival school to Tokyo's Jujutsu High?
    a) Kobe Jujutsu High
    b) Osaka Jujutsu High
    c) Kyoto Jujutsu High ` ,
  answer : "Kyoto Jujutsu High"
},{
  question : ` Where did Itadori and Nanami investigate the massacre by Mahito?
    a) A Mall
    b) A Movie Theater
    c) A Grocery Store ` ,
  answer : "A Movie Theater"
},{
  question : `Who is the character that Mahito kills to enrage Yuji?
    a) Junpei
    b) Nanami
    c) Megumi ` ,
  answer : "Junpei"
}]


for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  AskQuestion(currentQuestion.question, currentQuestion.answer)
}

console.log(colors.italic.bold.red("Your Final Score Is: " + score));
