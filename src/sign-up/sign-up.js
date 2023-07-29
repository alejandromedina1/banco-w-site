document.getElementById("submit-button").addEventListener("click", function(event){
    event.preventDefault()
  });

document.getElementById('tologin').addEventListener("click", () => {
  window.location.replace("/login/")
})