const questionAndAnswer = [
    {question: "What type of animal is a seahorse?", answers:["Crustacean", "Arachnid","Fish","Shell"], correctAnswer: 0, userAnswer: 4},

    {question: "Which of the following dogs is the smallest", answers:["Dachshund","Poodle","Pomeranian","Chihuahua"], correctAnswer:3, userAnswer:4},

    {question: "What color are Zebras?", answers:["White with black stripes","Black with shite stripes","Both of the above","None of the above"], 
    correctAnswer:2, userAnswer:4},

    {question: "What existing bird has the largest wingspan", answers:["Stork","Swan","Condor","Albatross"], correctAnswer:3, userAnswer:4},

    {question: "Whats the biggest animal that has ever lived", answers:["Blue whale","African elephant","Brontosaurus","Spinosaurus"], correctAnswer:0, userAnswer:4},

    {question: "What pets do more familes own", answers:["Birds","Cats","Dogs","Horses"], correctAnswer:1, userAnswer:4},

    {question: "What animal lives the longest", answers:["Clam","Red sea urchin","Galapagos tortois","Rougheye rockfish"], correctAnswer:0, userAnswer:4},

    {question: "What are female elephants called?", answers:["Mares","Sows","Cows","Dams"], correctAnswer:2, userAnswer:4},

    {question: "Which of the following animals sleep standing up?", answers:["Gorillas","Flamingos","Camels","Ravens"], correctAnswer:1, userAnswer:4},

    {question: "What is the fastest water animal?", answers:["Porpoise","Sailfish","Flying fish","Tuna"],
    correctAnswer:1, userAnswer:0}
]

let userSelectedAnswer = [4,4,4,4,4,4,4,4,4,4]
/*create an array of the users answeres. If one of the elements in the array is 4 when they try to move on
they will be prompted to answer the question before they can move on*/


function generateAnswerHtml(item,questionIndex) {
    return item.answers.map( (answer,index) => 
        `<div class="question">
        <form action = "quizResultsPage.html">
            <button id = ${index} data-Question= ${questionIndex} class="selection-Button Answer" value = ${index}>
                <span>${answer}</span>
            </button>
        </form>
    </div>`).join("")
}
//Generates html for every question in an object

function generateItemElement(item,index) {

    return `
    

        <p class="question-Sentence">${item.question}</p>
        ${generateAnswerHtml(item,index)}
    
    `
    //generates the html

}

function generateFullQuestionList(questionList) {

    /*const item = questionList.map((item,index) => generateItemElement(item,currentQuestion));*/

    const item = questionList.map((item,index) => generateItemElement(item,index));

    return item.join("");

    //generates the html for each question

}

function renderQuestions() {

    const questionString = generateFullQuestionList(questionAndAnswer);

    $('.question-Block').html(questionString);

    $('.selection-Button.Answer').on('click', event => {
    /*$('.selection-Button.Answer').on('click', event => {*/

        event.preventDefault();

        const answerIndex = $(event.currentTarget).value;

        /*const question = $(event.currentTarget).data("answers");*/

        /*questionAndAnswer[question].userAnswer = $(event.currentTarget).attr("id");*/


        console.log(event.currentTarget.val());
        
    });

    //renders the list of questions and answers

}

function submitButtonPress() {

        if (userSelectedAnswer.includes(3) === true) {
            console.log('The array has a 4 in it');
        }
        
        else {
            document.getElementById('show-1').style.display = "none";
            document.getElementById('show-2').style.display = "none";

            document.getElementById('hidden-1').style.display = "block";
            document.getElementById('hidden-2').style.display = "block";
        }
    }
    /*If the button is clicked, and the user has not selected an answer for 
    one of the questions, text will display on the screen saying they missed
    an answer*/

function getItemAnswer() {

    //gets the answer from the question they chose an answer for

}

function handleQuestionAnswerSelected() {

    //handles when the user chooses one of the answers

}

function isAnswerCorrect() {

    //checks if the answer is correct and act accourdingly

}

function initialFunctionCall() {
    renderQuestions();
    //calls all the functions previously mentions, allowing for interaction on the web app

}

$(initialFunctionCall);