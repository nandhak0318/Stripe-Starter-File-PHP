// initialize stripe with Public key

// you can find your public key on stripe dashboard

var stripe = Stripe('pk_test_51JMSsJSJSYcBzSJXjNqjfq6ddsaAbM5lTijgFdSNmjxARhKC7rH3RDrIKOhmXPikhj5p7d79AWPD4L92yRWhxo7N00zrNy9H3p');

// -----------CREATING CARD ELEMENT------------

// basic style for the card element
var style = {
 base:{
  fontSize:'16px',
 },
}

// initialize Stripe elements
var element = stripe.elements();

// create card using Stripe elemenets
var card = element.create('card',{style:style});

// attach card to html
card.mount('#card-element');

// ----------MANAGING FORM ---------------


// check card is valid on runtime using event listener
card.addEventListener('change',function(e){
 // get card error div where we show the errors
 var displayErr = document.getElementById('card-error');

 // displaying error message if there's an error
 if(e.error){
  
  displayErr.textContent = e.error.message;
 }else{
  displayErr.textContent = '';
 }

});

// get form
var form = document.getElementById('#payment-form');

// submiting form and post token to backend

form.addEventListener('submit',function(e){
 // prevent page from reloading
 e.preventDefault();

 // create stripe token

 stripe.createToken(card).then(function(result){

  // display error if something occur while creating token
  // else pass token to token handler function we create which can post the token to backend
  if(result.error){
   var displayErr = document.getElementById('card-error');
   displayErr.textContent = result.error.message;
  }
  else{

   stripeTokenHandler(result.token);
  }

 });

});

function stripeTokenHandler(token){
 // creating hidden input field to send token to backend
 var hiddenInput = document.createElement('input');

 // set attributes
 hiddenInput.setAttribute('type','hidden');
 hiddenInput.setAttribute('name','stripeToken');
 hiddenInput.setAttribute('value',token.id);

 // attch hidden input to form
 form.appendChild(hiddenInput);

 // submiting form
 form.submit();

}