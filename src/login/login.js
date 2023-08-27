document.getElementById("login").addEventListener("click", function(event){
    event.preventDefault()
  });

document.getElementById('to-sign-up').addEventListener("click", () => {
  window.location.replace("/sign-up/")
})

document.getElementById('login').addEventListener("click", () => {
  window.location.replace("/profile/")
})

const visibilityIcon = document.getElementById("icon-toggle")
const passwordInput = document.getElementById("password-input")

visibilityIcon.addEventListener('click', () => {
  if (visibilityIcon.classList.contains("bi-eye-slash")) {
    visibilityIcon.classList.remove("bi-eye-slash")
    visibilityIcon.classList.add("bi-eye")
    passwordInput.type ="text"
  } else {
    visibilityIcon.classList.add("bi-eye-slash")
    visibilityIcon.classList.remove("bi-eye")
    passwordInput.type ="password"
  }

})