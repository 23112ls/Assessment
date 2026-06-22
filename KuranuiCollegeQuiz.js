//This is a small quiz to test the knowledge of kuranui students and teachers on odd things.
//Score is to give back a score to the user of how many questions they got correct.
//User is a fun extra that is't important to the user, but appears in the terminal.
//Let Ready establishes ready before it is in an if tag.
let score = 0
let user = 1000
let ready = false

//This is an array holding the questions and answers for the quiz, there are number comments to save time but have no effect to the code.
const answers = [
        //0
        { 
            question: "When was the school established?\n_ _ _ _",
            answer: "1960" 
        },
        //1
        {
            question: "What year was the new gym built?\n_ _ _ _",
            answer: "2026"
        },
        //2
        {
            question: "Why did they redo the Auditorium roof?\nA _ _ e _ _ _ s",
            answer: "asbestos"
        },
        //3
        {
          question: 'Is Kuranui College a Punitive or Restorative school?\n_ _ _ _ _ _ _ _ _ _ _',
          answer: 'restorative'
        },
        //4
        {
          question: 'How many blocks are there?\n',
          answer: ''
        },
        //5
        {
          question: 'What block teaches Science?\n_',
          answer: 'r'
        },
        //6
        {
          question: 'What lunchtime is the uniform shop open?\nT _ _ _ _ _ _ _',
          answer: 'thursday'
        }
    
    ]

//This is the prompt to the start of the quiz
//This checks how old the user is, to see if they're old enough to attend Kuranui College, or are a former student/teacher who can take the quiz.
//Ready asks the user if they would like to start the quiz, if they press cancel the window closes.
let name = prompt('Welcome to the Kuranui College quiz!\nWhat is your name?')
let age = prompt('How old are you?')
if (age < 13){
  alert('Unfortunately you are too young to take this quiz.')
}
else if(age > 18){
  let teacher = prompt('You seem to be too old to attend Kuranui College, are you a teacher or former student?')
  ready = true
}
else if(age >=13 && age < 19){
  let ready = confirm('We are ready for you, ' + name + '!\nWould you like to start?')
}
else if(age2 == 'old'){
  
  
}
//This for loop handles the entire quiz in a very simple format, making the code less messy.
//Changing the user's answer to lowercase and keeping the answers in lowercase minimises bugs.
if(ready !== false){
for (let i = 0; i < answers.length; i++) {

    let userAnswer = prompt(answers[i].question);

    if (userAnswer.toLowerCase() == answers[i].answer) {
        score++;
        alert("Correct!");

    } else {
        alert(`Incorrect.\nAnswer: ` + answers[i].answer);
    }

}

//This decides the user's level, whether they receive: Unachieved, Achieved, Merit, or Excellence. It uses the users score to decide.
if(score < 2){
  level = ('an unachieved')
}
else if(score > 2 && score <= 4){
  level = ('an achieved')
}
else if(score > 4 && score < 7){
  level = ('a merit')
}
else if(score == 7){
  level = ('an excellence')
}

//If the user scores an unachieved, they don't get congratulated as much as achieving.
if(level == 'an unachieved'){
  congratulate = ('Well done for trying, ' + name + '! But unfortunately you recieved ')
}
else if(level !== 'an unachieved'){
  congratulate = ('Well done, ' + name + '! You recieved ')
}

//This conform command contratulates the user, tells the score & level, then asks if we can keep the details (extra).
let save = confirm(congratulate + level + ' (' + score + '/' + answers.length + ')\nWe would like to hold onto your answers\nPress OK to accept - Press Cancel to deny.')
if(save != false){
  user++
  console.log('Participant: ' + user + '\nName: ' + name + '\nScore: ' + score)
}
}

//Goodbye alert happens whether or not they chose for us to keep their answers, or whether or not they even took the quiz.
alert('Have a nice day!')
