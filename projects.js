const button = document.querySelector(".floating-button svg");
const modal = document.querySelector(".floating-button .modal");
const closeBtn = document.querySelector(".floating-button .modal .close");

button.addEventListener("click", function () {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function sendMail() {
  var params = {
    email: document.getElementById("email").value,
    subject: document.getElementById("subject"),
    name: document.getElementById("name").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_zaas4yp";
  const tempID = "template_kbyzpqo";

  emailjs
    .send(serviceID, tempID, params)
    .then((res) => {
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      document.getElementById("name").value = "";
      console.log(res);
      alert("Submission Successful");
    })
    .catch((err) => console.log(err));
}
