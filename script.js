// template_bhy8kmj
// service_ewm39wj
// nuA-SiNznzXxQhc40

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_ewm39wj",
      "template_bhy8kmj",
      event.target,
      "nuA-SiNznzXxQhc40"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert("The email service is temporary unavailable. Please contact me directly on greetysoftwarejs@gmail.com")
    })
}

let isModalOpen = false;

function toggleModal() {
  if(isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = !isModalOpen;
  //toggle modal
  document.body.classList += " modal--open";
}