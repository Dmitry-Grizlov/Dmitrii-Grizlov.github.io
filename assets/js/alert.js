function showAlert(message, type = "success") {
  const alertDiv = document.getElementById("customAlert");
  const alertMessage = document.getElementById("alertMessage");

  alertMessage.textContent = message;
  alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
  alertDiv.classList.add("show");

  setTimeout(() => {
    closeAlert();
  }, 5000);
}

function closeAlert() {
  const alertDiv = document.getElementById("customAlert");
  if (alertDiv) {
    alertDiv.classList.remove("show");
  }
}
