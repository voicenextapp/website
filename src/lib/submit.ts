document.addEventListener('DOMContentLoaded', () => {
    if (new URLSearchParams(location.search).get("activated")) {
        alert("your email has been verified");
    }
    const input = document.getElementById('email') as HTMLInputElement;
    const button = document.getElementById('submit') as HTMLButtonElement;
    button.addEventListener('click', () => {
        fetch(
            "https://api.voicenext.app/api/v1/newsletter/subscribe",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: `{"email": "${input.value}"}`,
            }
        ).then(async (res) => {
            if (res.ok) {
                alert("please verify your email to complete the process");
            } else {
                alert("something went wrong");
            }
        });
    });
});