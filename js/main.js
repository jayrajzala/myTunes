//responsive Navigation
$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });

  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});


// Smooth Scrolling
$('.cf a,.footer-cols a').on('click', function(event) {
	// console.log("working");
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});




//custom validation error message for phone Number
//document.getElementById("mobile").setCustomValidity("Please Type 10-digit Mobile Number (without +91)");


var obj = {"_email.from": "myTunes Submission", "_email.subject": "You have a new message!"};

//get form values, send values to formspark and collect status code
document.getElementById('my-form').onsubmit = function(e) {
    e.preventDefault();
	//validation
	var mobile = document.getElementById('mobile').value.length,
        email = document.getElementById('email').value.length;

	if( mobile === 0 && email === 0 ) {
				alert("Provide either E-mail or Phone Number");
			   e.preventDefault();
				 return false;

			   }

	document.getElementById('form-submission-status').style.color = 'black';
	document.getElementById('form-submission-status').innerHTML = '...Please wait';
	document.getElementById('loader').style.visibility = 'visible';

	//get values
    obj.name = document.getElementById('name').value;
		mobile = document.getElementById('mobile').value;
		if(mobile!=''){
			obj.mobile = document.getElementById('mobile').value;
		}
			email = document.getElementById('email').value;
		if(email!=''){
			obj.email = document.getElementById('email').value;
		}

		message = document.getElementById('message').value;
		if(message!=''){
		obj.message = document.getElementById('message').value;
		}
        obj["_honeypot"] = document.getElementById('honeypot').value;
        
//send values using XMLHttpRequest
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "https://submit-form.com/lxX8yDD7baQkj5nMLL11A");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify(obj));

		
		xhr.onreadystatechange = function() {
  	if(xhr.status === 200){
			document.getElementById('form-submission-status').style.color = 'green';
			document.getElementById('form-submission-status').innerHTML = "Form was submitted sucessfully. We'll get back to you soon.";
			document.getElementById('loader').style.visibility = 'hidden';
			var clearValues = document.querySelectorAll("#name, #email, #mobile, #message");
			clearValues.forEach(function(clear){clear.value='';})
			}
			
			else {
				document.getElementById('loader').style.visibility = 'hidden';
                document.getElementById('form-submission-status').style.color = 'red';
				document.getElementById('form-submission-status').innerHTML = "Error occured! Please contact myTunes@pinepple.com at your convenience";
			}
		};

		return false;
};
