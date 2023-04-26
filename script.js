// template_bhy8kmj
// service_ewm39wj
// 


function contact(event) {
  event.preventDefault();
  emailjs
  .sendForm(
    'service_ewm39wj',
    'template_bhy8kmj',
    event.target,
    'nuA-SiNznzXxQhc40'
  ).then(() => {
    'this worked'
  })

}