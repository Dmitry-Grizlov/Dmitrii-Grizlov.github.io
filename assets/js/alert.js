function showAlert(message, type = "success") {
  // Get the alert element by its ID
  const alertDiv = document.getElementById("customAlert");
  const alertMessage = document.getElementById("alertMessage");

  // Update the alert message text
  alertMessage.textContent = message;

  // Update the alert type (class)
  alertDiv.className = `alert alert-${type} alert-dismissible fade show`;

  // Programmatically show the alert
  alertDiv.classList.add("show");

  // Optionally, auto-dismiss the alert after 5 seconds
  setTimeout(() => {
    $(alertDiv).alert("close");
  }, 5000);
}
