function sendMail(){
    var params = {
        name: document.getElementById("input-1").value,
        c_name: document.getElementById("input-2").value,
        age: document.getElementById("input-3").value,
        year: document.getElementById("input-4").value,
        place: document.getElementById("input-5").value,
    }
    const serviceID = "service_tlf6het";
    const templateID = "template_964xhcl";
    emailjs.send(serviceID , templateID , params).then(
        res =>{
            name: document.getElementById("input-1").value="";
            c_name: document.getElementById("input-2").value="";
            age: document.getElementById("input-3").value="";
            year: document.getElementById("input-4").value="";
            place: document.getElementById("input-5").value=""; 
            console.log(res);
            alert("The One & Only Tip For You , Stay Honest With Your Love , You Will Get Him / Her Soon.");
        })
        .catch((err) => console.log(err));
}
