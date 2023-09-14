const formSection = document.getElementById("form-container")
const confirmSection = document.getElementById("process-done")

const sendButton = document.getElementById("send-button")
const backButton = document.getElementById("back-button")

sendButton.addEventListener('click', (e) => {
    e.preventDefault()
    formSection.style.display = "none"
    confirmSection.style.display = "flex"
})

backButton.addEventListener('click', (e) => {
    formSection.style.display = "flex"
    confirmSection.style.display = "none"
})