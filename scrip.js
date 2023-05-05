$(function () {
    if ($(window).width() < 600) {
        window.location.href = "https://example.com/error.html";
    }
});

//contact info
src = "https://smtpjs.com/v3/smtp.js"

function sendEmail() {
    Email.send({
        host: "smtp.gmail.com",
        Username: "hackstygian@gmail.com",
        Password: "alvarez2005",    
        To: 'joshuaalvarez547@gmail.com',
        from: document.getElementById("email").value,
        Subject: "This is the subject",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Subject: " + document.getElementById("subject").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Succesfully")
    )
}

