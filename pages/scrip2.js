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
            + "<br> order: " + document.getElementById("order").value
            + "<br> Quantity: " + document.getElementById("Quantity").value
            + "<br> Address: " + document.getElementById("Address").value
            + "<br> Flor: " + document.getElementById("Flor").value
            + "<br> Grade, Sections, and Strand: " + document.getElementById("Grade, Sections, and Strand").value
            
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Succesfully")
    )
}
