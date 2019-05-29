const questionAndAnswer = [
    {id: cuid(), question: "What type of animal is a seahorse?", answer1:"Crustacean",
    answer2:"Arachnid",answer3:"Fish", answer4:"Shell", correctAnswer:"Crustacean"}
]

` <li>
    <span class="shopping-item">${questionFromObject}</span>
    <div class="shopping-item-controls">
        <button class="answer_one">
            <span class="${answer1FromObject}">check</span>
        </button>
        <button class="answer_Two">
            <span class="${answer2FromObject}">check</span>
        </button>
        <button class="answer_Three">
            <span class="${answer3FromObject}">check</span>
        </button>
        <button class="answer_Four">
            <span class="${answer4FromObject}">check</span>
        </button>
    </div>
</li> `