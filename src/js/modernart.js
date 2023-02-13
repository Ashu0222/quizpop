const quizDB = [
    {
      "id": 11,
      "srno" : 1 ,
      "question": "Which artist is known for coining the term 'Surrealism'?",
      "options": ["Pablo Picasso", "Salvador Dali", "Vincent van Gogh", "Henri Matisse"],
      "answer": "Salvador Dali",
      "category": "modern-art"
    },
    {
      "id": 12,
      "srno" : 2 ,
      "question": "Which movement is associated with the use of abstract forms and shapes in art?",
      "options": ["Impressionism", "Expressionism", "Futurism", "Cubism"],
      "answer": "Cubism",
      "category": "modern-art"
    },
    {
      "id": 13,
      "srno" : 3 ,
      "question": "Which artist is known for painting the work 'The Persistence of Memory'?",
      "options": ["Pablo Picasso", "Salvador Dali", "Vincent van Gogh", "Henri Matisse"],
      "answer": "Salvador Dali",
      "category": "modern-art"
    },
    {
      "id": 14,
      "srno" : 4 ,
      "question": "Which artist is known for creating the painting 'The Scream'?",
      "options": ["Vincent van Gogh", "Salvador Dali", "Edvard Munch", "Claude Monet"],
      "answer": "Edvard Munch",
      "category": "modern-art"
    },
    {
      "id": 15,
      "srno" : 5 ,
      "question": "What movement was associated with the use of bold, bright colors and thick brushstrokes?",
      "options": ["Impressionism", "Expressionism", "Fauvism", "Cubism"],
      "answer": "Fauvism",
      "category": "modern-art"
    },
    {
      "id": 16,
      "srno" : 6 ,
      "question": "What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
      "options": ["Impressionism", "Futurism", "Surrealism", "Abstract Expressionism"],
      "answer": "Futurism",
      "category": "modern-art"
    },
    {
      "id": 17,
      "srno" : 7 ,
      "question": "Which artist is known for creating the painting 'Water Lilies'?",
      "options": ["Claude Monet", "Paul Cezanne", "Paul Gauguin", "Paul Klee"],
      "answer": "Claude Monet",
      "category": "modern-art"
    },
    {
      "id": 18,
      "srno" : 8 ,
      "question": "Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
      "options": ["Henri Matisse", "Vincent van Gogh", "Salvador Dali", "Pablo Picasso"],
      "answer": "Pablo Picasso",
      "category": "modern-art"
    },
    {
      "id": 19,
      "srno" : 9 ,
      "question": "Which artist is known for creating the painting 'Guernica'?",
      "options": ["Claude Mone", "Paul Cezanne", "Pablo Picasso", "Vincent van Gogh"],
      "answer": "Pablo Picasso",
      "category": "modern-art"
    },
    {
      "id": 20,
      "srno" : 10 ,
      "question": "Which artist is known for creating the sculpture 'The Thinker'?",
      "options": ["Auguste Rodin", "Alexander Calder", "Jean Arp", "Henry Moore"],
      "answer": "Auguste Rodin",
      "category": "modern-art"
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
        showScore.innerHTML = `
            <h3> Your Score ${score}/${quizDB.length} </h3>
        `;
        showScore.classList.remove('scoreArea') ; 
        localStorage.setItem("ma", "ma");
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
