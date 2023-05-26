// template_bhy8kmj
// service_ewm39wj
// nuA-SiNznzXxQhc40


function contact(event) {
  event.preventDefault();
  // emailjs
  // .sendForm(
  //   'service_ewm39wj',
  //   'template_bhy8kmj',
  //   event.target,
  //   'nuA-SiNznzXxQhc40'
  // ).then(() => {
  //   console.log('this worked')
  // })

  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible"
  setTimeout(() => { 
    loading.classList.remove("modal__overlay--visible")
    console.log("It worked")
  }, 1000)
}

