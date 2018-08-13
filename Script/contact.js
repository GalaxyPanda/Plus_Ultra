function myfunction(){
    
    var name = document.getElementById("name").value; 
    console.log(name);
    var email = document.getElementById("email").value; 
    console.log(email);
    var message = document.getElementById("message").value; 
    console.log(message);
    var select = document.getElementById("select").value; 
    console.log(select);
    var check = document.getElementById("check1").checked; 
    console.log(check);
    var check = document.getElementById("check2").checked; 
    console.log(check);
    var check = document.getElementById("check3").checked; 
    console.log(check);
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