//--------------------------------------
// THE KURANUI COLLEGE QUIZ
// 
//--------------------------------------
//Declares variables before they are used in if statements so they can be used throughout the program.
function quiz(){
let score = 0
let ready
let achievement
let congratulate
let contin

//--------------------------------------
// The questions and answers that are easily expandable.
//--------------------------------------
//adding number notes above each item in the array makes it easier to identify the item number.
const answers = [
        //0
        { 
            question: "When was the school established?\n_ _ _ _",
            answer: "1960" 
        },
        //1
        {
            question: "When did the new gymnasium open?\n_ _ _ _",
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
          question: 'What is the last name of the drama teacher?\n_ _ _ e l l _ _',
          answer: 'mclellan'
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

//--------------------------------------
// Pre-quiz questions, getting details like name and age for eligibility.
//--------------------------------------
let name = prompt('Welcome to the Kuranui College quiz!\nWhat is your name?')
let age = prompt('How old are you?', '14')

//Making seperate if statements for whether to use years (plural) or just year, especially for just one number (12) would make the code much more cluttered for little reward. Adding 'year(s)' doesn't look sloppy and saves unneeded clutter.
if (age >= 1 && age < 13){
  age = (13 - age)
  alert('Unfortunately you are too young to take this quiz.\nYou can take this quiz in ' + age + ' year(s).')
}
else if(age > 18 && age <= 116){
  let teachForm = confirm('You seem to be too old to attend Kuranui College, are you a teacher or former student?')
  if(teachForm == true){
    ready = true
  }
  else{
    ready = false
  }
}

//The if statement lets both teachers/former students and current students start at the same point, instead of repetitive code.
if((age >=13 && age < 19) || ready == true){
  ready = confirm('We are ready for you, ' + name + '!\nWould you like to start?')
}

//--------------------------------------
// Start of the quiz, a for loop to keep it easily expandable and clean - while not being painfully long.
//--------------------------------------
if(ready == true){
for (let i = 0; i < answers.length; i++) {

    let userAnswer = prompt(answers[i].question);

    if(userAnswer == "" || userAnswer == null){
        contin = confirm('You did not input an answer, would you like to continue with the quiz?')
        
        if(contin == true){
            i--
            continue
        }
        else{
            ready = false
            break
        }
    }
    else if(userAnswer.toLowerCase() == answers[i].answer){
        score++;
        alert("Correct!");

    }
    else{
        alert(`Incorrect.\nAnswer: ` + answers[i].answer);
    }

}

if(ready == false){
  alert('Have a nice day, ' + name + '!')
  return score
}

//--------------------------------------
// The results.
//--------------------------------------
//Achievement uses the users score to determine whether the user receives a U, A, M or E. Having a score in literature form can help everyday users understand their achievements a bit more clearly.
//Due to Merit being different from the rest in a grammatical perspective, adding 'an' or 'a' keeps it grammatically correct while being simple and clutter free.
if(score <= 2){
  achievement = ('an unachieved')
}
else if(score > 2 && score <= 4){
  achievement = ('an achieved')
}
else if(score > 4 && score < 7){
  achievement = ('a merit')
}
else if(score == 7){
  achievement = ('an excellence')
}

//Two if statements determine whether the user got an unachieved or above, so they're not congratulated on failing.
if(achievement == 'an unachieved'){
  congratulate = ('Well done for trying, ' + name + '! But unfortunately you received ')
}
else if(achievement !== 'an unachieved'){
  congratulate = ('Well done! You received ')
}

alert(congratulate + achievement + ' (' + score + '/' + answers.length + ')')

}

//This alert is given when the user finishes the quiz, and even if the user doesn't do the test all together.
alert('Have a nice day, ' + name + '!')
}