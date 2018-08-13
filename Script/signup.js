function myFunction(){
    
    var fname = document.getElementById("fname").value;
    console.log(fname);
    var lname = document.getElementById("lname").value;
    console.log(lname);
    var bday = document.getElementById("bday").value;
    console.log(bday);
    var uname = document.getElementById("username").value;
    console.log(uname);
    var password = document.getElementById("password").value;
    console.log(password)
    var repass = document.getElementById("repass").value;
    console.log(repass)
    var email = document.getElementById("email").value;
    console.log(email)
    var check = document.getElementById("check1").checked; 
    console.log(check);
    
    var today = new Date().getFullYear();
    console.log(today)
    var bYear = new Date(bday).getFullYear();
    console.log(bYear)
    var difference = today - bYear;
    if (difference < 18){
        alert("I'm sorry citizen you must be 13 or older to contact me")
    }

} 

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();