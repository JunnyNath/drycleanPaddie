function sendMail() {
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };
    
    
const serviceID = "service_b31oglj";
const templateID = "template_pktahme";

emailjs.send(serviceID, templateID, params)
.then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Message sent successfully!");
    })
    .catch((err) => console.log(err));
    
}

