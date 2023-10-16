const button = document.querySelector("#button");

button.addEventListener("click", async () => {
  const backendSender = {
    message: document.querySelector("#message").value,
    title: document.querySelector("#title").value,
    email: document.querySelector("#email").value,
  };

  try {
    const res = await fetch("http://localhost:3000/send", {
      method: "POST",
      body: JSON.stringify(backendSender),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.text();
    alert("Result is: " + result);
  } catch (err) {
    console.error(err);
    alert("Error sending email");
  }
});
