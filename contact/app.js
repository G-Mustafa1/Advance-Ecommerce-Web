const cotactUs = document.getElementById('con-us');
const loader = document.getElementById('loader1');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
   if(name.value && email.value && message.value){
      Swal.fire({
         title: "",
         text: 'Your request succesfully',
         icon: "success"
       });
      // alert('Your message succesfully');
      window.location.href = '../index.html';
   }
   else{
      Swal.fire({
         title: "",
         text: 'Please fill out this form',
         icon: "error"
       });
      // alert('Message lekh')
   }
})

function preLoader(){
   setTimeout(() => {
      loader.style.display = 'none';
      cotactUs.style.display = 'block';
   },800)
}

window.addEventListener('load', preLoader)
