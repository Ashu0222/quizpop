const quizDB = [
    {
      "id": 21,
      "srno": 1,
      "question": "What is the correct syntax for an if statement in Python?",
      "options": ["if (condition):", "if condition", "if: condition", "if condition:"],
      "answer": "if condition:",
      "category": "coding"
    },
    {
      "id": 22,
      "srno": 2,
      "question": "Which of the following is not a data type in JavaScript?",
      "options": ["String", "Number", "Boolean", "ArrayList"],
      "answer": "ArrayList",
      "category": "coding"
    },
    {
      "id": 23,
      "srno": 3,
      "question": "Which of the following is used to declare a variable in Java?",
      "options": ["var", "let", "const", "int"],
      "answer": "int",
      "category": "coding"
    },
    {
      "id": 24,
      "srno": 4,
      "question": "What is the correct syntax for a for loop in C#?",
      "options": ["for i = 0 to 10", "for (i = 0; i <= 10; i++)", "for (int i = 0; i <= 10)", "for i in range(0, 10)"],
      "answer": "for (i = 0; i <= 10; i++)",
      "category": "coding"
    },
    {
      "id": 25,
      "srno": 5,
      "question": "Which of the following is not a looping structure in PHP?",
      "options": ["while", "for", "do-while", "foreach"],
      "answer": "foreach",
      "category": "coding"
    },
    {
      "id": 26,
      "srno": 6,
      "question": "Which of the following is not a valid operator in C++?",
      "options": ["+", "-", "*", "$"],
      "answer": "$",
      "category": "coding"
    },
    {
      "id": 27,
      "srno": 7,
      "question": "In which programming language is 'print' used for displaying output?",
      "options": ["Python", "JavaScript", "Java", "C++"],
      "answer": "Python",
      "category": "coding"
    },
    {
      "id": 28,
      "srno": 8,
      "question": "What is the correct syntax for a function in Ruby?",
      "options": ["function name()", "def name", "function name", "def name()"],
      "answer": "def name()",
      "category": "coding"
    },
    {
      "id": 29,
      "srno": 9,
      "question": "Which of the following is not a type of variable in Swift?",
      "options": ["Int", "String", "Double", "Object"],
      "answer": "Object",
      "category": "coding"
    },
    {
      "id": 30,
      "srno": 10,
      "question": "In which programming language is '#' used for commenting?",
      "options": ["Python", "JavaScript", "Java", "C++"],
      "answer": "C++",
      "category": "coding"
    }
  ];

const question =document.querySelector('.question');
const option1 =document.querySelector('#option1');
const option2 =document.querySelector('#option2');
const option3 =document.querySelector('#option3');
const option4 =document.querySelector('#option4');

const submit = document.querySelector('#submit');
const prev = document.querySelector('#prev');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore') ;
let questionCount = 0 ; 
let score = 0 ;




const loadQuestion = () =>{    
    const questionList = quizDB[questionCount];    
    const lastAnswer = localStorage.getItem(questionList.id) ; 
  
    question.innerHTML = questionList.srno + ".  " + questionList.question;

    option1.innerHTML = questionList.options[0];
    option2.innerHTML = questionList.options[1];
    option3.innerHTML = questionList.options[2];
    option4.innerHTML = questionList.options[3];

    answers[0].id = questionList.options[0]  ;  
    answers[1].id = questionList.options[1];
    answers[2].id = questionList.options[2]   ; 
    answers[3].id = questionList.options[3];

    
    let questionAnswered = false ; 
    if(lastAnswer == questionList.options[0]){
        answers[0].checked = true;
        questionAnswered = true;
    }
    if(lastAnswer == questionList.options[1]){
        answers[1].checked = true;
        questionAnswered = true;
    }
    if(lastAnswer == questionList.options[2]){
        answers[2].checked = true;
        questionAnswered = true;
    }
    if(lastAnswer == questionList.options[3]){
        answers[3].checked = true;
        questionAnswered = true;
    }
    if(questionAnswered == true){
        answers[0].disabled = true;
        answers[1].disabled = true;
        answers[2].disabled = true;
        answers[3].disabled = true;
    }else{
        answers[0].disabled = false;
        answers[1].disabled = false;
        answers[2].disabled = false;
        answers[3].disabled = false;
    }
    questionAnswered = false;
}
loadQuestion() ;

const getCheckAnswer = () => {
    let answer ; 
    answers.forEach((currAnswerElement) => {
        if(currAnswerElement.checked){
            answer = currAnswerElement.id;
        }        
    })
    return answer
}

const deselectAll = () => {    
    answers.forEach((currAnswerElement) => {
        if(currAnswerElement.checked){
            currAnswerElement.checked = false;
        }        
    })   
}

submit.addEventListener('click', () =>{
    
    
    const checkAnswer = getCheckAnswer() ;

    const questionList = quizDB[questionCount];
    localStorage.setItem(questionList.id, checkAnswer+"");
    if(checkAnswer == questionList.answer && localStorage.getItem("ANS_"+questionList.id) ==null){
        localStorage.setItem("ANS_"+questionList.id, checkAnswer+"");
        score ++;
    }
    questionCount++;
    deselectAll();
    if(questionCount < quizDB.length){        
        loadQuestion();
    }else{
        localStorage.setItem("coding", "coding");
        showScore.innerHTML = `
            <h3> Your Score ${score}/${quizDB.length} </h3>
        `;
        showScore.classList.remove('scoreArea') ; 
    }    

    console.log(" Next questionCount: " +questionCount ) ; 
    if(questionCount == 0 ){
        prev.classList.add('showPrev');
    }else{
        prev.classList.remove('showPrev');        
    }
    if(questionCount == quizDB.length   ){
        submit.classList.add('hideNext');
    }else{
        submit.classList.remove('hideNext');
    }
})

prev.addEventListener('click', () =>{        
    deselectAll();
    questionCount--;    
    //if(questionCount < quizDB.length){
        loadQuestion();
    //}

    console.log(" PREV questionCount: " +questionCount ) ; 
    if(questionCount == 0 ){
        prev.classList.add('showPrev');
    }else{
        prev.classList.remove('showPrev');        
    }
    if(questionCount == quizDB.length    ){
        submit.classList.add('hideNext');
    }else{
        submit.classList.remove('hideNext');
    }
})
