const cotactUs = document.getElementById('mein');
const loader = document.getElementById('loader1');

function preLoader(){
   setTimeout(() => {
      loader.style.display = 'none';
      cotactUs.style.display = 'block';
   },500)
}

window.addEventListener('load', preLoader)

