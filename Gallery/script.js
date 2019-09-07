var stripe = Stripe('pk_test_Izx513J1AI4Fp5Zo2qzLurR300wRV2amkw');

var checkoutButton = document.getElementById('checkout-button-sku_Ff26PRhmahuaZg');
checkoutButton.addEventListener('click', function () {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    items: [{sku: 'sku_Ff26PRhmahuaZg', quantity: 1}],

    // Do not rely on the redirect to the successUrl for fulfilling
    // purchases, customers may not always reach the success_url after
    // a successful payment.
    // Instead use one of the strategies described in
    // https://stripe.com/docs/payments/checkout/fulfillment
    successUrl: window.location.protocol + '//oloil.com/success',
    cancelUrl: window.location.protocol + '//oloil.com/canceled',
    billingAddressCollection: 'required',
  })
  .then(function (result) {
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      var displayError = document.getElementById('error-message');
      displayError.textContent = result.error.message;
    }
  });
});

var checkoutButton2 = document.getElementById('checkout-button-sku_Ff24Osvyy94R4g');
checkoutButton2.addEventListener('click', function () {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    items: [{sku: 'sku_Ff24Osvyy94R4g', quantity: 1}],

    // Do not rely on the redirect to the successUrl for fulfilling
    // purchases, customers may not always reach the success_url after
    // a successful payment.
    // Instead use one of the strategies described in
    // https://stripe.com/docs/payments/checkout/fulfillment
    successUrl: window.location.protocol + '//oloil.com/success',
    cancelUrl: window.location.protocol + '//oloil.com/canceled',
    billingAddressCollection: 'required',

  })
  .then(function (result) {
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      var displayError = document.getElementById('error-message');
      displayError.textContent = result.error.message;
    }
  });
});

var checkoutButton3 = document.getElementById('checkout-button-sku_Ff253GhXbetgqY');
checkoutButton3.addEventListener('click', function () {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    items: [{sku: 'sku_Ff253GhXbetgqY', quantity: 1}],

    // Do not rely on the redirect to the successUrl for fulfilling
    // purchases, customers may not always reach the success_url after
    // a successful payment.
    // Instead use one of the strategies described in
    // https://stripe.com/docs/payments/checkout/fulfillment
    successUrl: window.location.protocol + '//oloil.com/success',
    cancelUrl: window.location.protocol + '//oloil.com/canceled',
  })
  .then(function (result) {
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      var displayError = document.getElementById('error-message');
      displayError.textContent = result.error.message;
    }
  });
});
var checkoutButton4 = document.getElementById('checkout-button-sku_FfEYsZAslIJaPj');
checkoutButton4.addEventListener('click', function () {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    items: [{sku: 'sku_FfEYsZAslIJaPj', quantity: 1}],

    // Do not rely on the redirect to the successUrl for fulfilling
    // purchases, customers may not always reach the success_url after
    // a successful payment.
    // Instead use one of the strategies described in
    // https://stripe.com/docs/payments/checkout/fulfillment
    successUrl: window.location.protocol + '//oloil.com/success',
    cancelUrl: window.location.protocol + '//oloil.com/canceled',
  })
  .then(function (result) {
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      var displayError = document.getElementById('error-message');
      displayError.textContent = result.error.message;
    }
  });
});
var checkoutButton5 = document.getElementById('checkout-button-sku_FfG5fEu3HBfqCM');
checkoutButton5.addEventListener('click', function () {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    items: [{sku: 'sku_FfG5fEu3HBfqCM', quantity: 1}],

    // Do not rely on the redirect to the successUrl for fulfilling
    // purchases, customers may not always reach the success_url after
    // a successful payment.
    // Instead use one of the strategies described in
    // https://stripe.com/docs/payments/checkout/fulfillment
    successUrl: window.location.protocol + '//oloil.com/success',
    cancelUrl: window.location.protocol + '//oloil.com/canceled',
  })
  .then(function (result) {
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      var displayError = document.getElementById('error-message');
      displayError.textContent = result.error.message;
    }
  });
});
var checkoutButton6 = document.getElementById('checkout-button-sku_FkAzSZb13UQWM2');
checkoutButton6.addEventListener('click', function () {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    items: [{sku: 'sku_FkAzSZb13UQWM2', quantity: 1}],

    // Do not rely on the redirect to the successUrl for fulfilling
    // purchases, customers may not always reach the success_url after
    // a successful payment.
    // Instead use one of the strategies described in
    // https://stripe.com/docs/payments/checkout/fulfillment
    successUrl: window.location.protocol + '//oloil.com/success',
    cancelUrl: window.location.protocol + '//oloil.com/canceled',
  })
  .then(function (result) {
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      var displayError = document.getElementById('error-message');
      displayError.textContent = result.error.message;
    }
  });
});
var checkoutButton7 = document.getElementById('checkout-button-sku_Fk9hWgPJTHwoJy');
checkoutButton7.addEventListener('click', function () {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    items: [{sku: 'sku_Fk9hWgPJTHwoJy', quantity: 1}],

    // Do not rely on the redirect to the successUrl for fulfilling
    // purchases, customers may not always reach the success_url after
    // a successful payment.
    // Instead use one of the strategies described in
    // https://stripe.com/docs/payments/checkout/fulfillment
    successUrl: window.location.protocol + '//oloil.com/success',
    cancelUrl: window.location.protocol + '//oloil.com/canceled',
  })
  .then(function (result) {
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      var displayError = document.getElementById('error-message');
      displayError.textContent = result.error.message;
    }
  });
});
var checkoutButton8 = document.getElementById('checkout-button-sku_Fla648wG8Isbt2');
checkoutButton8.addEventListener('click', function () {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    items: [{sku: 'sku_Fla648wG8Isbt2', quantity: 1}],

    // Do not rely on the redirect to the successUrl for fulfilling
    // purchases, customers may not always reach the success_url after
    // a successful payment.
    // Instead use one of the strategies described in
    // https://stripe.com/docs/payments/checkout/fulfillment
    successUrl: window.location.protocol + '//oloil.com/success',
    cancelUrl: window.location.protocol + '//oloil.com/canceled',
  })
  .then(function (result) {
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      var displayError = document.getElementById('error-message');
      displayError.textContent = result.error.message;
    }
  });
});
