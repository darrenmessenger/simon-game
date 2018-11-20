/*Function to send an email if the submit button is pressed on the contact form.*/

function sendMail(contactForm) {
    emailjs.send("gmail", "simon", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                $("#myModal").modal();
                contactForm.name.value = "";
                contactForm.emailaddress.value = "";
                contactForm.projectsummary.value = "";
            },
            function(error) {
                console.log("FAILED", error);
                alert('Oops... ' + JSON.stringify(error));
            }
        );
    return false; // To block from loading a new page
}


