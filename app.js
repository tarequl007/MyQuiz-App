const myBtn = document.querySelector('.myBtn')

const rulesBox = document.querySelector('.rulesBox')

const exitBtn = document.querySelector('.exitBtn')


myBtn.onclick = () => {

    rulesBox.classList.add('activeInfo')

}

exitBtn.onclick = () => {
    rulesBox.classList.remove('activeInfo')
}