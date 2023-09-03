const firtsSection = document.getElementById('first-screen')
const secondSection = document.getElementById('second-screen')
const thirdSection = document.getElementById('third-screen')

window.addEventListener('load', () => {
    setTimeout(() => {
        firtsSection.style.display = 'none'
        secondSection.style.display = 'flex'
    }, 3000)
})

const controls = document.getElementById('controls')
const keyboardBtn = document.getElementById('teclado')
const keyboard = document.getElementById('keyboard')

keyboardBtn.addEventListener('click', () => {
    keyboard.style.display = "flex"
    controls.style.display = "none"
})

const endCall = document.getElementById('end-call')

endCall.addEventListener('click', () => {
    secondSection.style.display = 'none'
    thirdSection.style.display = 'flex'
})

const leaveButtons = document.querySelectorAll('.help-button-option')

leaveButtons.forEach((button) => {
    button.addEventListener('click', () => {
        window.location.replace("/")
    })
})
