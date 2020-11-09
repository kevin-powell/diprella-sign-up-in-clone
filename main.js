const mainContent = document.querySelector("main");
const switchStateBtn = document.querySelector(".switch-state .btn");

switchStateBtn.addEventListener("click", () => {
  if (mainContent.classList.contains("create-state")) {
    mainContent.classList.replace("create-state", "login-state");
    return;
  }

  mainContent.classList.replace("login-state", "create-state");
});
