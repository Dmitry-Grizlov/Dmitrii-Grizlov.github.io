document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form values
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  // Send a POST request using fetch
  // todo: update the host to the live one
  fetch(
    "https://test-heroku-go-a6840f48f3ab.herokuapp.com/send-email?source=portfolio website",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Error sending email");
    });
});
