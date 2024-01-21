const signupForm = document.forms["signup-form"];

if (signupForm) {
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { login, email, password } = event.target;
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: login.value,
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === "Success") {
      alert("Регистрация прошла успешно");
      window.location.assign("/");
    } else {
      alert(data.message);
    }
  });
}
