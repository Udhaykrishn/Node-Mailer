
const button = document.querySelector("#button");
const inputs = document.querySelectorAll(".input") 

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

    if (res) {
      const result = await res.json();
      alert("Result is: " + result.message);
      inputs.forEach((data)=>{
        data.value = ""
      })
    } else {
      alert("Failed to send email. Status: " + res.status);
    }
  } catch (err) {
    console.error(err);
    alert("Error sending email");
  }
});
