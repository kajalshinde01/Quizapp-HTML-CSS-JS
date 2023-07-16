const questions=[
    {
        question:"Javascript is an _______ language?",
        answers:[
            {text:"object oriented",correct:true},
            {text:"object based",correct:false},
            {text:"procedural",correct:false},
            {text:"none of the above",correct:false},

        ]
    },

    {
        question:"Which of the following keywords is used to define a variable in Javascript?",
        answers:[
            {text:"var",correct:false},
            {text:"let",correct:false},
            {text:"Both A And B",correct:true},
            {text:"None of the above",correct:false},

        ]
    },
    {
        question:"Which of the following methods is used to access HTML elements using Javascript? ",
        answers:[
            {text:"getElementById",correct:false},
            {text:"getElementByClassName",correct:false},
            {text:"both A and B",correct:true},
            {text:"None of the above",correct:false},

        ]
    },
    {
        question:"How can a datatype be declared to be a constant type?",
        answers:[
            {text:"const",correct:true},
            {text:"var",correct:false},
            {text:"constant",correct:false},
            {text:"let",correct:false},

        ]
    },
    {
        question:"Which of the following are closures in Javascript?",
        answers:[
            {text:"variable",correct:false},
            {text:"function",correct:false},
            {text:"objects",correct:false},
            {text:"All of the above",correct:true},

        ]
    },

];

const questionElement = document.getElementById("que");
const buttons = document.getElementById("buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
 let score=0;

function startQuiz(){
       currentQuestionIndex = 0;
       score = 0;
       nextButton.innerHTML = "Next";
       showQuestion();
     }

function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + " . " + currentQuestion.question;
 
       currentQuestion.answers.forEach(answer => {
       const button = document.createElement("button");
       button.innerHTML = answer.text;
       button.classList.add("btn");
       buttons.appendChild(button);

       if(answer.correct){
            button.dataset.correct = answer.correct;
           }
           button.addEventListener("click" , selectAnswer);

           });
         }

        function resetState(){
             nextButton.style.display = "none";
             while(buttons.firstChild){
             buttons.removeChild(buttons.firstChild);
              }
         }

        function selectAnswer(e){
             const selectedBtn = e.target;
             const isCorrect = selectedBtn.dataset.correct === "true";
             if(isCorrect){
               selectedBtn.classList.add("correct");
               score++;
              }    
            else{
             selectedBtn.classList.add("incorrect");
           }
          Array.from(buttons.children).forEach(button => {
             if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
             button.disabled = true;
           });
         nextButton.style.display = "block";
         }
         
         function showScore() {
            resetState();
            questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
            nextButton.innerHTML = "play Again";
            nextButton.style.display = "block";
            
        }
        
        function handleNextButton() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
               showScore(); 
            }
            
        }
        
        
        nextButton.addEventListener("click",()=> {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
        }); 

        startQuiz();
        