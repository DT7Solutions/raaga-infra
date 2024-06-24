$(document).ready(function() {
	$('select.nice-select').niceSelect();

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessage = $('.form-message');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Get form data for email sending.
		let fname = document.querySelector('#name').value;
		let email = document.querySelector('#email').value;
		let selectElement = document.getElementById('opselection').value;
		let phone = document.querySelector('#phone').value;
		let message = document.querySelector('#message').value;
		let subject = "get a quote";

		// Send email using Email.js
		// emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
		emailjs.send("service_zx9vhgq", "template_kn1f12i", {
			name: fname,
			email: email,
			phone: phone,
			message: message,
			purpose: selectElement,
			subject: subject
		}).then(function(response) {
			console.log('SUCCESS!', response.status, response.text);
			window.alert('Message sent successfully.')
			// Display success message
			$(formMessage).removeClass('error');
			$(formMessage).addClass('success');
			$(formMessage).text('Message sent successfully.');

			// Clear the form
			$('#contact-form input,#contact-form textarea').val('');
		}, function(error) {
			console.log('FAILED...', error);
			// Display error message
			$(formMessage).removeClass('success');
			$(formMessage).addClass('error');
			$(formMessage).text('Oops! An error occurred and your message could not be sent.');
		});

		// Submit the form using AJAX (optional)
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Additional handling if needed
		})
		.fail(function(data) {
			// Additional handling if needed
		});
	});
});
/* 
    // EMAIL JS CREDENTIALS
    // User: raagainfra.website@gmail.com 
    // PW: Dt7@2021
    // Email js Template Form Design Code
    <p>&nbsp;</p>
    <p>You got a new message from {{name}}:</p>
	<p>Name: {{name}}</p>
	<p>Email: {{email}}</p>
	<p>Phone Number: {{phone}}</p>
	<p>Purpose of Contact: {{purpose}}</p>
	<p>Message:</p>
    <p style="padding: 12px; font-style: italic;">{{message}}</p>
    <p>&nbsp;</p>
  */