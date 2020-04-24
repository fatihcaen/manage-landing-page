let sendButton = document.querySelector('footer .footer-btn');
let warning = document.querySelector('footer .warning');
let success = document.querySelector('footer .success');
let input = document.getElementById("email");

sendButton.addEventListener('click', function () {
  let inputVal = input.value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputVal)) {
    Swal.fire(
      {
        title: 'Good job!',
        text: 'Subscription successful!',
        icon: 'success'
      }
    )
  } else {
    Swal.fire(
      {
        title: 'Oops!',
        text: 'Please enter a valid email!',
        icon: 'error'
      }
    )
  }
});

