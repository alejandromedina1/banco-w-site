document.getElementById("login").addEventListener("click", function(event){
    event.preventDefault()
  });

document.getElementById('to-sign-up').addEventListener("click", () => {
  window.location.replace("/sign-up/")
})