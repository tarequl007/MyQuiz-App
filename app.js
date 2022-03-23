const myBtn = document.querySelector('.myBtn')

const rulesBox = document.querySelector('.rulesBox')

const exitBtn = document.querySelector('.exitBtn')

const continueBtn = document.querySelector('.continueBtn')

const question = document.querySelector('.question')


myBtn.onclick = () => {

    rulesBox.classList.add('activeInfo')

}

exitBtn.onclick = () => {
    rulesBox.classList.remove('activeInfo')
}

continueBtn.onclick = () => {
    question.classList.remove('activeInfo')
    question.classList.add('activeQuiz')

    // Call the Question function

    showQuestion(0)
}


// Next Quesion button

const nextBtn = document.querySelector('.nextBtn')

let questionCount = 0;

nextBtn.onclick = () => {
    if (questionCount < questionArray.length - 1) {
        questionCount++;
        showQuestion(questionCount);
    } else {
        alert('Your Question is Finished.')

    }
}



// Question dynamic area

const showQuestion = (index) => {
    const qText = document.querySelector('.qText')
    qText.innerHTML = `${questionArray[index].numb} . ${questionArray[index].question}`

    // Option dynamic area

    const myOption = document.querySelector('.myOption');
    let optionTag = `<div class="option">${questionArray[index].option[0]}<span></span></div> <div class="option">${questionArray[index].option[1]}<span></span></div> <div class="option">${questionArray[index].option[2]}<span></span></div> <div class="option">${questionArray[index].option[3]}<span></span></div>`

    myOption.innerHTML = optionTag;

    // Add footer question list in the page

    const totalQuestion = document.querySelector('.total-Question');

    let totalQuestionTag = `<p>${questionArray[index].numb} of ${questionArray.length} Question</p>`

    totalQuestion.innerHTML = totalQuestionTag;




    // Answer update
    
    
    const optionSelect = myOption.querySelectorAll('.option')
    for (let i = 0; i < optionSelect.length; i++) {
        optionSelect[i].setAttribute('onclick', 'optionSelected(this)');
    }


}


function optionSelected(answer) {
    let userAns = answer.textContent
    let correctAnswer = questionArray[questionCount].answer
    const myOption = document.querySelector('.myOption')
    let allOption = myOption.children.length;



    if (userAns == correctAnswer) {
        answer.classList.add('correct')


    } else {
        answer.classList.add('inCorrect');

        for (let i = 0; i < allOption; i++) {
            if (myOption.children[i].textContent == correctAnswer) {
                myOption.children[i].setAttribute('class', 'option correct')
            }
        }

    }


    for (let i = 0; i < allOption; i++) {
        myOption.children[i].classList.add('disable')
    }

}



