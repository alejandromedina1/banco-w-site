const close = document.getElementById('close-chat');
const open = document.getElementById('open');

close.addEventListener('click', () => {
  open.style.display = 'none';
});