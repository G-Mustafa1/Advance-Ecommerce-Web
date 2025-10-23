const buyNow = document.getElementById('buy-now');
const loader = document.getElementById('loader1');
const input = document.getElementById('name');
const email = document.getElementById('email');
const city = document.getElementById('city');
const address = document.getElementById('address');
const payment = document.getElementById('payment');
const btn = document.getElementById('btn');
// console.log(input)
btn.addEventListener('click', () => {
   if(input.value && email.value && city.value && address.value && payment.value){
      Swal.fire({
         title: "",
         text: 'Your order succesfully',
         icon: "success"
       });
      // alert('Your order succesfully')
      window.location.href = '../index.html';
   }
   else{
      Swal.fire({
         title: "",
         text: 'Please fill out this form',
         icon: "error"
       });
      
      // alert('form fill kr')
   }
})

function preLoader(){
   setTimeout(() => {
      loader.style.display = 'none';
      buyNow.style.display = 'block'
   },500)
}

window.addEventListener('load', preLoader)
