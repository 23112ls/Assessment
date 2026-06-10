let score = 0

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
            question: "Why did they redo the Auditorium roof?\n_ _ _ _ _ _ _ _",
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
          question: 'What lunchtime is the uniform shop open?\n_ _ _ _ _ _ _ _',
          answer: 'thursday'
        }
    
    ]

let name = prompt('Welcome to the Kuranui College quiz!\nWhat is your name?')
let ready = confirm('We are ready for you, ' + name + '!\nWould you like to start?')

if(ready !== false){
for (let i = 0; i < answers.length; i++) {

    let userAnswer = prompt(answers[i].question);

    if (userAnswer.toLowerCase() == answers[i].answer) {

        score++;

        alert("Correct!");

    } else {

        alert(`Incorrect.\nAnswer:` + answers[i].answer);

    }

}

alert('Well done! you got ' + score + '/' + answers.length)
}