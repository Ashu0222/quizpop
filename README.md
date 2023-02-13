# quizpop
This app enable students to pick a topic and solve the Quiz.

**Features**
1) Topic selection
2) Question And Answer section
3) Final Score section

>[Working Dem0] (https://quiz-pop-ash.surge.sh/)

## This Quiz a fully function example project written in HTML,CSS,JavaScript only.
This project is covoring maximum functionlality that most of the time get use.it's very easy and fun project.
## watch the full video!
<a href="youtube link"><img src="https://whimsical.com/quizpop-Xt9YJ81oYnaK3JzTvVaQ82"></a>

## For Installation 
Download Visual Studio Code.


## Instructions
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
## How to use this project for your own uses
Since ,this is an example, I am trying to give the shape as possible as I can. Overall it's showing full  process to creat simple Quiz pop website .
## Find mistake
make sure pull request you squash all your merges or before you pull the submit a pull request you file an issue first.
## Add More features
with more dinamic or advance feature we can do more modification.
Thank you !