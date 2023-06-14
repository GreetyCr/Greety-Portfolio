let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for(let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const oddInt = isOdd ? -1 : 1;
    shapes[i].style.transform = 'translate('+(x * oddInt)+'px,'+(y * oddInt)+'px)';
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if(contrastToggle){
    document.body.classList += "dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

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



function toggleModal() {
  if(isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = !isModalOpen;
  //toggle modal
  document.body.classList += " modal--open";
}