// CONTACT INFO FUNCTIONALITY

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "email.fguzman@gmail.com",
    Password: "7ipSQoriH9q7",
    To: "fguzman1230@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Inquiry",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
