const loginForm = document.forms["login-form"];

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { login, email, password } = event.target;
    // console.log(email, password);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // login: login.value,
        email: email.value,
        password: password.value,
      }),
    });
    if (res.status === 201) {
      alert("Вход прошел успешно");
      window.location.assign("/");
    } else {
      alert("Неверный логин или пароль");
    }
  });
}
