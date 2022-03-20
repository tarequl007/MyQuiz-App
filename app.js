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



// Question dynamic area

const showQuestion = (index) => {
    const qText = document.querySelector('.qText')
    qText.innerHTML = `${questionArray[index].numb} . ${questionArray[index].question}`

    // Option dynamic area

    const myOption = document.querySelector('.myOption');
    const option = `<div class="option">${questionArray[index].option[0]}<span></span></div> <div class="option">${questionArray[index].option[1]}<span></span></div> <div class="option">${questionArray[index].option[2]}<span></span></div> <div class="option">${questionArray[index].option[3]}<span></span></div>`

    myOption.innerHTML = option;

    // Add footer question list in the page

    const totalQuestion = document.querySelector('.total-Question');

    let totalQuestionTag = `<p>${questionArray[index].numb} of ${questionArray.length} Question</p>`

    totalQuestion.innerHTML = totalQuestionTag;


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