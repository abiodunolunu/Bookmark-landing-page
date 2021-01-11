const tabs = document.querySelectorAll('.features .content')
const tabButtons = document.querySelectorAll('.tabs button')

const questions = document.querySelectorAll('.question-answer')
console.log(tabs)

function removeActiveClassFromTabButton(btn) {
    btn.classList.remove('active')
}

function removeShowClassFromQuestions(question) {
    question.classList.remove('show')
}

function openTab(e) {
    tabButtons.forEach(removeActiveClassFromTabButton)
    e.classList.add('active')

    tabs.forEach(tab => {
        if (e.dataset.toggle === tab.dataset.tab) {
            return tab.classList.add('open')
        }
        tab.classList.remove('open')
    })
}

function showAnswer(e) {
    const isShown = e.classList.contains('show')
    questions.forEach(removeShowClassFromQuestions)
    
    if(isShown) {
        return e.classList.remove('show')
    }
    e.classList.add('show')
}

function toggleNav() {
    document.querySelector('header').classList.toggle('open')
}