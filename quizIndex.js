const questionAndAnswer = [
    /*{question: "What type of animal is a seahorse?", answer1:"Crustacean",
    answer2:"Arachnid",answer3:"Fish", answer4:"Shell", correctAnswer:"Crustacean"},

    {question: "Which of the following dogs is the smallest", answer1:"Dachshund",
    answer2:"Poodle",answer3:"Pomeranian", answer4:"Chihuahua", correctAnswer:"Chihuahua"},

    {question: "What color are Zebras?", answer1:"White with black stripes",
    answer2:"Black with shite stripes",answer3:"Both of the above", answer4:"None of the above", correctAnswer:"Black with white stripes"},

    {question: "What existing bird has the largest wingspan", answer1:"Stork",
    answer2:"Swan",answer3:"Condor", answer4:"Albatross", correctAnswer:"Albatross"},

    {question: "Whats the biggest animal that has ever lived", answer1:"Blue whale",
    answer2:"African elephant",answer3:"Brontosaurus", answer4:"Spinosaurus", correctAnswer:"Blue whale"},

    {question: "What pets do more familes own", answer1:"Birds",
    answer2:"Cats",answer3:"Dogs", answer4:"Horses", correctAnswer:"Cats"},

    {question: "What animal lives the longest", answer1:"Clam",
    answer2:"Red sea urchin",answer3:"Galapagos tortois", answer4:"Rougheye rockfish", correctAnswer:"Clam"},

    {question: "What are female elephants called?", answer1:"Mares",
    answer2:"Sows",answer3:"Cows", answer4:"Dams", correctAnswer:"Cows"},*/

    {question: "Which of the following animals sleep standing up?", answers:["Gorillas","Flamingos","Camels","Ravens"], correctAnswer:1, userAnswer:0},

    {question: "What is the fastest water animal?", answers:["Porpoise","Sailfish","Flying fish","Tuna"],
    correctAnswer:1, userAnswer:0}
]

let currentQuestion = 0;


function generateAnswerHtml(item,questionIndex) {
    return item.answers.map( (answer,index) => 
        `<div class="question">
        <form action = "quizResultsPage.html">
            <button id = ${index} data-Question= ${questionIndex} class="selection-Button Answer">
                <span>${answer}</span>
            </button>
        </form>
    </div>`).join("")
}

function generateItemElement(item,index) {

    return `
    

        <p class="question-Sentence">${item.question}</p>
        ${generateAnswerHtml(item,index)}
    
    `
    //generates the html

}

function generateFullQuestionList(questionList) {

    const item = questionList.map((item,index) => generateItemElement(item,index));

    return item.join("");

    //generates the html for each question

}

function renderQuestions() {

    const questionString = generateFullQuestionList(questionAndAnswer);

    $('.question-Block').html(questionString);

    $('.selection-Button.Answer').on('click', event => {

        event.preventDefault();

        const question = $(event.currentTarget).data("question"); 

        questionAndAnswer[question].userAnswer = $(event.currentTarget).attr("id");

        currentQuestion++;
    });

    //renders the list of questions and answers

}

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