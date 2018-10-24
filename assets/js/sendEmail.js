function sendMail(contactForm) {
    emailjs.send("gmail", "simon", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert('Your mail is sent!');
        },
        function(error) {
            console.log("FAILED", error);
            alert('Oops... ' + JSON.stringify(error));
        }
    );
    return false;  // To block from loading a new page
}