const quizDB = [
    {
      "id": 1,
      "question": "Which of the following is not a type of music notation?",
      "options": ["Standard notation", "Tab notation", "Morse code notation", "Graphics notation"],
      "answer": "Morse code notation",
      "category": "music"
    },
    {
      "id": 2,
      "question": "What is the most common time signature in classical music?",
      "options": ["3/4", "4/4", "5/4", "6/8"],
      "answer": "4/4",
      "category": "music"
    },
    {
      "id": 3,
      "question": "Which of the following is not a type of instrument in a symphony orchestra?",
      "options": ["Violin", "Piano", "Harp", "Theremin"],
      "answer": "Theremin",
      "category": "music"
    },
    {
      "id": 4,
      "question": "What is the most common key in pop music?",
      "options": ["C Major", "G Major", "D Major", "A Major"],
      "answer": "C Major",
      "category": "music"
    },
    {
      "id": 5,
      "question": "Which of the following is not a type of chord?",
      "options": ["Major", "Minor", "Diminished", "Flat"],
      "answer": "Flat",
      "category": "music"
    },
    {
      "id": 6,
      "question": "Which of the following is not a type of music genre?",
      "options": ["Jazz", "Blues", "Rock", "Applesauce"],
      "answer": "Applesauce",
      "category": "music"
    },
    {
      "id": 7,
      "question": "Which of the following is not a type of music theory?",
      "options": ["Harmony", "Counterpoint", "Form", "Cooking"],
      "answer": "Cooking",
      "category": "music"
    },
    {
      "id": 8,
      "question": "What is the most common tempo marking in classical music?",
      "options": ["Allegro", "Andante", "Adagio", "Moderato"],
      "answer": "Allegro",
      "category": "music"
    },
    {
      "id": 9,
      "question": "Which of the following is not a type of musical form?",
      "options": ["Sonata", "Symphony", "Concerto", "Spaghetti"],
      "answer": "Spaghetti",
      "category": "music"
    },
    {
      "id": 10,
      "question": "Which of the following is not a type of music notation software?",
      "options": ["Sibelius", "Finale", "MuseScore", "Microsoft Word"],
      "answer": "Microsoft Word",
      "category": "music"
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
    console.log("last Answer" + lastAnswer) ; 
    question.innerHTML = questionList.id + ".  " + questionList.question;

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
    if(questionCount == 0 ){
        prev.classList.remove('showPrev');
    }

    if(questionCount == quizDB.length -1  ){
        submit.classList.add('hideNext');
    }else{
        submit.classList.remove('hideNext');
    }
    
    const checkAnswer = getCheckAnswer() ;
    console.log("checkAnswer" + checkAnswer) ; 
    const questionList = quizDB[questionCount];
    localStorage.setItem(questionList.id, checkAnswer+"");
    if(checkAnswer == questionList.answer){
         score ++;
    }
    questionCount++;
    deselectAll();
    if(questionCount < quizDB.length){        
        loadQuestion();
    }else{
        showScore.innerHTML = `
            <h3> Your Score ${score}/${quizDB.length} </h3>
        `;
        showScore.classList.remove('scoreArea') ; 
    }    
})

prev.addEventListener('click', () =>{        
    if(questionCount == 1 ){
        prev.classList.add('showPrev');
    }
    if(questionCount == quizDB.length -1  ){
        submit.classList.add('hideNext');
    }else{
        submit.classList.remove('hideNext');
    }
    questionCount--;    
    //if(questionCount < quizDB.length){
        loadQuestion();
    //}
})
