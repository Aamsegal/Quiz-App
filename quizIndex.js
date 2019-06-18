const questionAndAnswer = [
    {question: "What type of animal is a seahorse?", answers:["Crustacean", "Arachnid","Fish","Shell"], correctAnswer: 0, userAnswer: 4},

    {question: "Which of the following dogs is the smallest?", answers:["Dachshund","Poodle","Pomeranian","Chihuahua"], correctAnswer:3, userAnswer:4},

    {question: "What color are Zebras?", answers:["White with black stripes","Black with shite stripes","Both of the above","None of the above"], 
    correctAnswer:1, userAnswer:4},

    {question: "What existing bird has the largest wingspan?", answers:["Stork","Swan","Condor","Albatross"], correctAnswer:3, userAnswer:4},

    {question: "Whats the biggest animal that has ever lived?", answers:["Blue whale","African elephant","Brontosaurus","Spinosaurus"], correctAnswer:0, userAnswer:4},

    {question: "What pets do more familes own?", answers:["Birds","Cats","Dogs","Horses"], correctAnswer:1, userAnswer:4},

    {question: "What animal lives the longest?", answers:["Clam","Red sea urchin","Galapagos tortois","Rougheye rockfish"], correctAnswer:0, userAnswer:4},

    {question: "What are female elephants called?", answers:["Mares","Sows","Cows","Dams"], correctAnswer:2, userAnswer:4},

    {question: "Which of the following animals sleep standing up?", answers:["Gorillas","Flamingos","Camels","Ravens"], correctAnswer:1, userAnswer:4},

    {question: "What is the fastest water animal?", answers:["Porpoise","Sailfish","Flying fish","Tuna"],
    correctAnswer:1, userAnswer:0}
]
let currentQuestion = 0;
//value to identify what question the user is currently on

let correctAnswers = 0;

let userSelectedAnswer = [4,4,4,4,4,4,4,4,4,4]
/*create an array of the users answeres. If one of the elements in the array is 4 when they try to move on
they will be prompted to answer the question before they can move on*/


function generateAnswerHtml(item,questionIndex) {
    return item.answers.map( (answer,index) => 
        `<div class="question" role="question-Block">
            <button id=${index} data-Question=${questionIndex} class="selection-Button Answer" value=${index}>
                <span>${answer}</span>
            </button>
            </div>`).join("")
}
//Generates html for every answer in the questionAndAnswer variable

function generateItemElement(item,index) {

        return `

        <legend class="question-Sentence">${item.question}</legend>
        <form>
        ${generateAnswerHtml(item,index)}
        </form>
         `
        //generates html for each question. If they are on the last question, also add the submit botton
    }
    
    

function generateQuestionText() {
    const questionNumber = currentQuestion+1;
    return `<header class="question-Sentence">Question ${questionNumber}/10</header>`
     //generates html to show what question the user is on
}

function generateCorrectAnswerRatio() {
    const questionNumber = currentQuestion;
    return `<header class="question-Sentence">${correctAnswers}/${questionNumber} correct.</header>`
    //generates html for how many questions to got correct
}

function renderQuestions() {

    const questionString = generateQuestionText(questionAndAnswer[currentQuestion],currentQuestion);
    const answersString = generateItemElement(questionAndAnswer[currentQuestion],currentQuestion);
    const correctString = generateCorrectAnswerRatio(questionAndAnswer[currentQuestion],currentQuestion);
    

    $('.question-Text').html(questionString);
    $('.question-Block').html(answersString);
    if (currentQuestion > 0) {
        $('.current-Score').html(correctString);
    }


    /*calls the functions that generate html for what number question they are on, the question information and the ration
    of correct questions to incorrect questions*/
}




function generateCorrectAnswerHtml(item) {
    const answer = item.answers[item.correctAnswer];
    return `<div class = "question-Block" role="question-Block-Container">
        <h2>Correct Answer</h2>
        <div class="question" role="question-Block">
            <p class="results-Choice">${answer}</p>
        </div>`
}
//Generates html for every answer in the questionAndAnswer variable

function generateUserAnswerHtml(item,questionIndex) {

    const userAnswerIndex = userSelectedAnswer[questionIndex];
    const userAnswer = item.answers[userAnswerIndex];
    const answer = item.correctAnswer;
    
    if(userAnswerIndex === answer) {

        return `<h2>Your Answer</h2>
            <div class="question" role="question-Block">
                <p class="results-Choice correct-Answer">${userAnswer}</p>
            </div>
        </div>`

    } else {
        return `<h2>Your Answer</h2>
            <div class="question" role="question-Block">
                <p class="results-Choice incorrect-Answer">${userAnswer}</p>
            </div>
        </div>`
    }

        
}

function generateResultElement(item,index) {


    return `

    <p class="question-Sentence">${item.question}</p>
    ${generateCorrectAnswerHtml(item,index)}
    ${generateUserAnswerHtml(item,index)}
    `
}


function generateResultQuestionList(questionList) {

    const item = questionList.map((item,index) => generateResultElement(item,index));

    return item.join("");

    //generates the html for each question

}

function renderResults() {

    const questionString = generateResultQuestionList(questionAndAnswer);

    
    $('.report-Block').html(questionString);

    //renders the list of questions and answers

}

function answerSelection() {

    $('.selection-Button.Answer').on('click', event => {

        if (currentQuestion === 9) {
            event.preventDefault();

            const answerIndex = $(event.currentTarget).val();

            let questionAnswerIndex = $(event.currentTarget).attr("data-Question");

            userSelectedAnswer[questionAnswerIndex] = Number(answerIndex);

            if (userSelectedAnswer[questionAnswerIndex] === questionAndAnswer[currentQuestion].correctAnswer) {
                correctAnswers++;
            }   //if the user selects the correct answer, increase the correct answer count by 1

            event.preventDefault();

            $("#show-1").hide();
            $("#show-2").hide();
            $("#show-3").hide();

            score();
            renderResults();

            document.getElementById('hidden-1').style.display = "block";
            document.getElementById('hidden-2').style.display = "block";

        }

        else {
            event.preventDefault();

            const answerIndex = $(event.currentTarget).val();

            let questionAnswerIndex = $(event.currentTarget).attr("data-Question");

            userSelectedAnswer[questionAnswerIndex] = Number(answerIndex);
            
            const isCorrectAnswer = userSelectedAnswer[questionAnswerIndex] === questionAndAnswer[currentQuestion].correctAnswer;
            
            renderFeedback(isCorrectAnswer);
        
            
            /*renderQuestions();
            answerSelection();*/


        }
    });
    /*
    If the user is not on the final question, get the answer from the question they chose an answer 
    for and saves the value to an array of user answers.

    If the user is on the final question hide the html for the question and show the html
    for the results screen.
    */
}

function renderFeedback(isCorrectAnswer) {
    $("#show-1").hide();
    $("#show-2").hide();
    $("#show-3").hide();

    $("#feedback").show();

    let feedbackText = 'placeholder';

    if (isCorrectAnswer) {
        feedbackText = `<p> Correct!</> 
        <form>
            <button class="feedback-Button">
                <span>Next</span>
            </button>
        </form>`

        correctAnswers++;
        currentQuestion++;
    } else {
        feedbackText = `<p> Incorrect</> 
        <form>
            <button class="feedback-Button">
                <span>Next</span>
            </button>
        </form>`
        currentQuestion++;
    }
    
    $('.feedback').html(feedbackText);

    renderQuestions();
    answerSelection();
    nextQuestion();
}

function nextQuestion() {
    $('.feedback-Button').on('click', event => {
        event.preventDefault();

        $("#feedback").hide();

        $("#show-1").show();
        $("#show-2").show();
        $("#show-3").show();

        renderQuestions();
        answerSelection();
    });
}

function score() {
    const scoreText = `<p>You got ${correctAnswers}/10 correct.</p>`;
    $('.score').html(scoreText);
}

function initialFunctionCall() {
    renderQuestions();
    answerSelection();
    $("#feedback").hide();

    /*renderResultsPage();*/
    //calls all the functions previously mentions, allowing for interaction on the web app

}

$(initialFunctionCall);