const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  console.dir(event.currentTarget.elements.email);
  if (!mail || !password) {
    return alert("All fields must be filled!");
  }

  const formData = {
    mail,
    password,
  };
  console.log(formData);

  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((value, name) => {
  //     console.log(`${name}: ${value}`);
  //   });

  form.reset();
}
