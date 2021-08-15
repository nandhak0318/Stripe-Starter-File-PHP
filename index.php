<?php

// importing Stripe Sdk
require './sdk/stripe-php-master/init.php';

?>
<!DOCTYPE html>
<html lang="en">

<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">

 <!-- css -->
 <link rel="stylesheet" href="./css/style.css">

 <!-- stripe js scripts -->
 <script src="https://js.stripe.com/v3/"></script>
 <script src="./js/Stripe.js" defer></script>

 <title>Stripe PHP</title>
</head>

<body>
 <!-- payment form -->
 <form action="./pay.php" method="post" id="payment-form">

  <label for="name">Name</label>
  <input type="text" name="name" id="name">

  <label for="email">email</label>
  <input type="text" name="email" id="email">

  <label for="Card-element">Debit or Credit Card</label>
  <div id="card-element">
   <!-- Stripe element will insert here in runtime by js -->
  </div>

  <div id="card-errors">
   <!-- errors will rendered on runtime here by js -->
  </div>

  <!-- submit button -->
  <button form="payment-form" value="submit" type="submit">Pay</button>

 </form>

</body>

</html>