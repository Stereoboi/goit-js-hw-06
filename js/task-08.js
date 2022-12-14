const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;

  (email.value === "" || password.value === "")
    ? alert("Всі поля повинні бути заповненими!")
    : console.log(`Email: ${email.value} Password: ${password.value}`)
    event.currentTarget.reset();
}
