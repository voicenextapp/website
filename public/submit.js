import { toast } from "react-toastify";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(location.search).get("activated");
  if (urlParams === "true") {
    toast.success(
      "you're in! you'll be among the first users to try out voicenext.",
    );
  }
  const input = document.getElementById("email");
  const button = document.getElementById("submit");
  button.addEventListener("click", () => {
    fetch("https://api.voicenext.app/api/v1/newsletter/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"email": "${input.value}"}`,
    }).then(async (res) => {
      if (res.ok) {
        toast("we've sent you an email, so you can verify it");
      } else {
        toast.error("something went wrong");
      }
    });
  });
});
