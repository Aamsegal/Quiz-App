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
let currentQuestion = 0;
//value to identify what question the user is currently on

let userSelectedAnswer = [4,4,4,4,4,4,4,4,4,4]
/*create an array of the users answeres. If one of the elements in the array is 4 when they try to move on
they will be prompted to answer the question before they can move on*/


function generateAnswerHtml(item,questionIndex) {
    return item.answers.map( (answer,index) => 
        `<div class="question">
        <form>
            <button id=${index} data-Question=${questionIndex} class="selection-Button Answer" value=${index}>
                <span>${answer}</span>
            </button>
        </form>
    </div>`).join("")
}
//Generates html for every answer in the questionAndAnswer variable

function generateItemElement(item,index) {

        return `

        <p class="question-Sentence">${item.question}</p>
        ${generateAnswerHtml(item,index)}
         `
    }
    
    //generates html for each question. If they are on the last question, also add the submit botton

function generateFullQuestionList(questionList) {

    const item = questionList.map((item,index) => generateItemElement(item,index));

    return item.join("");

    //generates the html for each question

}

function renderQuestions() {

    /*const questionString = generateFullQuestionList(questionAndAnswer);*/

    const questionString = generateItemElement(questionAndAnswer[currentQuestion]);

    $('.question-Block').html(questionString);

    //renders the list of questions and answers

}

/*function submitButtonPress() {

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
    If the button is clicked, and the user has not selected an answer for 
    one of the questions, text will display on the screen saying they missed
    an answer*/

function renderResultsPage() {
    //renders the results page
}

function answerSelection() {

    $('.selection-Button.Answer').on('click', event => {

        if (currentQuestion === 9) {

            console.log(userSelectedAnswer);

            event.preventDefault();

            document.getElementById('show-1').style.display = "none";
            document.getElementById('show-2').style.display = "none";

            generateResultHtml(item,questionIndex);

            document.getElementById('hidden-1').style.display = "block";
            document.getElementById('hidden-2').style.display = "block";

        }

        else {
            event.preventDefault();

            const answerIndex = $(event.currentTarget).val();

            let questionAnswerIndex = $(event.currentTarget).attr("data-Question");

            userSelectedAnswer[questionAnswerIndex] = Number(answerIndex);
            
            currentQuestion++;

            console.log(answerIndex);  
            console.log(questionAnswerIndex);  
            console.log(userSelectedAnswer);          
            console.log(currentQuestion); 

            

            renderQuestions();
        }
    });
    /*
    If the user is not on the final question, get the answer from the question they chose an answer 
    for and saves the value to an array of user answers.

    If the user is on the final question hide the html for the question and show the html
    for the results screen.
    */
}

/*function generateResultHtml(item,questionIndex) {
    return item.answers.map( (answer,index) => 
        `<div class="question">
        <form action = "quizResultsPage.html">
            <button id = ${index} data-Question= ${questionIndex} class="selection-Button Answer" value = ${index}>
                <span>${answer}</span>
            </button>
        </form>
    </div>`).join("")
}*/

function handleQuestionAnswerSelected() {

    //handles when the user chooses one of the answers

}

function isAnswerCorrect() {

    //checks if the answer is correct and act accourdingly

}

function initialFunctionCall() {
    renderQuestions();
    answerSelection();
    renderResultsPage();
    //calls all the functions previously mentions, allowing for interaction on the web app

}

$(initialFunctionCall);