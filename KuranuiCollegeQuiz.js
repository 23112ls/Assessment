let score = 0

const answers = [
        //0
        { 
            question: "When was the school established?",
            answer: "1960" 
        },
        //1
        {
            question: "What year was the new gym built?",
            answer: "2026"
        },
        //2
        {
            question: "Why did they redo the Auditorium roof?",
            answer: "esbestos"
        },
        //3
        {
          question: 'Is Kuranui College a Punitive or Restorative school?',
          answer: 'restorative'
        },
        //4
        {
          question: 'How many blocks are there?',
          answer: ''
        },
        //5
        {
          question: 'What block teaches Science?',
          answer: 'r'
        },
        //6
        {
          question: 'What lunchtime is the uniform shop open?',
          answer: 'thursday'
        }
    
    ]

let name = prompt('Welcome to the Kuranui College quiz!\nWhat is your name?')
let ready = confirm('We are ready for you, ' + name + '!\nWould you like to start?')

if(ready !== false){
let answerOne = prompt(answers[0].question, '_ _ _ _')
   answerOne = answerOne.toLowerCase()
   if (answerOne == answers[0].answer){
   score++
   alert('Correct!')
}
  else{
  alert('Incorrect.\nAnswer: ' + answers[0].answer)
}
let answerTwo = prompt(answers[1].question, '_ _ _ _')
   answerTwo = answerTwo.toLowerCase()
   if (answerTwo == answers[1].answer){
   score++
   alert('Correct!')
}
  else{
  alert('Incorrect.\nAnswer: ' + answers[1].answer)
}
let answerThree = prompt(answers[2].question, '_ _ _ _ _ _ _ _')
   answerThree = answerThree.toLowerCase()
   if (answerThree == answers[2].answer){
   score++
   alert('Correct!')
}
  else{
  alert('Incorrect.\nAnswer: ' + answers[2].answer)
}
}

else if(ready == false){
  alert('Thats unfortunate.\nHave a good day!')
}