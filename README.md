# quizpop
This app enables students to pick a topic

**Features**
1) Topic selection
2) Question And Answer section
3) Final Score section

>[Working Dem0] (https://quiz-pop-ash.surge.sh/)

###Instructions
1. Clone the repo from https://github.com/Ashu0222/quizpop.git
2. Go to repo folder quizpop and run command 'npm install'
3. Run Command 'npm run dev'

** loading Next Question
```js
const loadQuestion = () =>{   
    const questionList = quizDB[questionCount];    
    const lastAnswer = localStorage.getItem(questionList.id) ;   
    question.innerHTML = questionList.id + ".  " + questionList.question;
    .....
    .....
}
```



'''