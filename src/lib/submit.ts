document.addEventListener('DOMContentLoaded', () => {
    const urlParamsActivated = new URLSearchParams(location.search).get('activated');
    const urlParamsUnsubscribed = new URLSearchParams(location.search).get('unsubscribed');
    if (urlParamsActivated === 'true') {
        alert("your email has been verified");
    }
    if (urlParamsUnsubscribed === 'true') {
        alert("you have been unsubscribed");
    }
    const input = document.getElementById('email') as HTMLInputElement;
    const button = document.getElementById('beta-signup-button') as HTMLButtonElement;
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
            const data = await res.json();

            if (res.ok)     return alert("please verify your email to complete the process");
            if (data.error) return alert(data.error.toLowerCase());
            alert("something went wrong");
        });
    });
});