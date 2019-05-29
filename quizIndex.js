const questionAndAnswer = [
    {id: cuid(), question: "What type of animal is a seahorse?", answer1:"Crustacean",
    answer2:"Arachnid",answer3:"Fish", answer4:"Shell", correctAnswer:"Crustacean"},

    {id: cuid(), question: "Which of the following dogs is the smallest", answer1:"Dachshund",
    answer2:"Poodle",answer3:"Pomeranian", answer4:"Chihuahua", correctAnswer:"Chihuahua"},

    {id: cuid(), question: "What color are Zebras?", answer1:"White with black stripes",
    answer2:"Black with shite stripes",answer3:"Both of the above", answer4:"None of the above", correctAnswer:"Black with white stripes"},

    {id: cuid(), question: "What existing bird has the largest wingspan", answer1:"Stork",
    answer2:"Swan",answer3:"Condor", answer4:"Albatross", correctAnswer:"Albatross"},

    {id: cuid(), question: "Whats the biggest animal that has ever lived", answer1:"Blue whale",
    answer2:"African elephant",answer3:"Brontosaurus", answer4:"Spinosaurus", correctAnswer:"Blue whale"},

    {id: cuid(), question: "What pets do more familes own", answer1:"Birds",
    answer2:"Cats",answer3:"Dogs", answer4:"Horses", correctAnswer:"Cats"},

    {id: cuid(), question: "What animal lives the longest", answer1:"Clam",
    answer2:"Red sea urchin",answer3:"Galapagos tortois", answer4:"Rougheye rockfish", correctAnswer:"Clam"},

    {id: cuid(), question: "What are female elephants called?", answer1:"Mares",
    answer2:"Sows",answer3:"Cows", answer4:"Dams", correctAnswer:"Cows"},

    {id: cuid(), question: "Which of the following animals sleep standing up?", answer1:"Gorillas",
    answer2:"Flamingos",answer3:"Camels", answer4:"Ravens", correctAnswer:"Flamingos"},

    {id: cuid(), question: "What is the fastest water animal?", answer1:"Porpoise",
    answer2:"Sailfish",answer3:"Flying fish", answer4:"Tuna", correctAnswer:"Sailfish"}


]

function generateItemElement(item) {
    return ` 
        <li data-item-id="${item.id}">
            <p class="question">${item.question}</p>
            <div class="shopping-item-controls">
                <button>
                    <span>${answer1}</span>
                </button>
                <button>
                    <span>${answer2}</span>
                </button>
                <button>
                    <span>${answer3}</span>
                </button>
                <button>
                    <span>${answer4}</span>
                </button>
            </div>
        </li> `

    //generates the html

}

function generateFullQuestionList(questionList) {

    const questions = questionList.map((item) => generateItemElement(item));

    return item.join("");

    //generates the html for each question

}

function renderQuestions() {

    const questionString = generateFullQuestionList(questionAndAnswer);

    $('.question-List').html(questionString);

    //renders the list of questions and answers

}

function getItemIdForQuestionItem() {

    //gets the id from the question they chose an answer for

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