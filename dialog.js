const openModalBtn = document.querySelector(".openModalBtn");
const openAlertBtn = document.querySelector(".openAlertBtn");
const modalDialog = document.querySelector(".dialog-modal");
const alertDialog = document.querySelector(".dialog-alert");
const closeModalBtn = document.querySelector(".dialog-modal-closeBtn");
const noAlertBtn = document.querySelector(".dialog-alert-noBtn");
const yesAlertBtn = document.querySelector(".dialog-alert-yesBtn");

const dialog = () => {
  openModalBtn.addEventListener("click", () => {
    modalDialog.classList.toggle("dialog-content-container-open")
  });
  closeModalBtn.addEventListener("click", () => {
    modalDialog.classList.toggle("dialog-content-container-open")
  });

  openAlertBtn.addEventListener("click", () => {
    alertDialog.classList.toggle("dialog-content-container-open")
  });
  noAlertBtn.addEventListener("click", () => {
    alertDialog.classList.toggle("dialog-content-container-open")
  });
  yesAlertBtn.addEventListener("click", () => {
    alertDialog.classList.toggle("dialog-content-container-open")
  });
}

dialog();
