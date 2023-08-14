document.getElementById('back-container').addEventListener("click", () => {
    window.location.replace("/simuladores/")
})

document.getElementById("simular").addEventListener("click", function(event){
    event.preventDefault()
  });

document.getElementById('simular').addEventListener('click', () => {
    document.getElementById('result').style.display="flex"
    document.getElementById('data').style.display="none"
})

document.getElementById('back-btn').addEventListener('click', () => {
    document.getElementById('result').style.display="none"
    document.getElementById('data').style.display="flex"
})