const successToastBtn = document.querySelector(".btn-success-toast");
const successToastContainer = document.querySelector(".success-toast");
const errorToastBtn = document.querySelector(".btn-error-toast");
const errorToastContainer = document.querySelector(".error-toast");
const warningToastBtn = document.querySelector(".btn-warning-toast");
const warningToastContainer = document.querySelector(".warning-toast");
const infoToastBtn = document.querySelector(".btn-info-toast");
const infoToastContainer = document.querySelector(".info-toast");
const topToastBtn = document.querySelector(".btn-top-toast");
const topToastContainer = document.querySelector(".top-toast");
const topRightToastBtn = document.querySelector(".btn-top-right-toast");
const topRightToastContainer = document.querySelector(".top-right-toast");
const topLeftToastBtn = document.querySelector(".btn-top-left-toast");
const topLeftToastContainer = document.querySelector(".top-left-toast");
const bottomLeftToastBtn = document.querySelector(".btn-bottom-left-toast");
const bottomLeftToastContainer = document.querySelector(".bottom-left-toast");
const bottomRightToastBtn = document.querySelector(".btn-bottom-right-toast");
const bottomRightToastContainer = document.querySelector(".bottom-right-toast");
const bottomToastBtn = document.querySelector(".btn-bottom-toast");
const bottomToastContainer = document.querySelector(".bottom-toast");


const showToast = () => {
  successToastBtn.addEventListener("click", () => {
    successToastContainer.classList.toggle("success-toast-open");
    setTimeout(() => {
      successToastContainer.classList.toggle("success-toast-open");
    }, 3000)
    
  });

  errorToastBtn.addEventListener("click", () => {
    errorToastContainer.classList.toggle('error-toast-open');
    setTimeout(() => {
      errorToastContainer.classList.toggle("error-toast-open");
    }, 3000)
  });

  warningToastBtn.addEventListener("click", () => {
    warningToastContainer.classList.toggle("warning-toast-open");
    setTimeout(() => {
      warningToastContainer.classList.toggle("warning-toast-open");
    }, 3000)
  });

  infoToastBtn.addEventListener("click", () => {
    infoToastContainer.classList.toggle("info-toast-open");
    setTimeout(() => {
      infoToastContainer.classList.toggle("info-toast-open");
    }, 3000)
  });

  topToastBtn.addEventListener("click", () => {
    topToastContainer.classList.toggle("top-toast-open");
    setTimeout(() => {
      topToastContainer.classList.toggle("top-toast-open");
    }, 3000)
  });

  topRightToastBtn.addEventListener("click", () => {
    topRightToastContainer.classList.toggle("top-right-toast-open");
    setTimeout(() => {
      topRightToastContainer.classList.toggle("top-right-toast-open");
    }, 3000)
  });

  topLeftToastBtn.addEventListener("click", () => {
    topLeftToastContainer.classList.toggle("top-left-toast-open");
    setTimeout(() => {
      topLeftToastContainer.classList.toggle("top-left-toast-open");
    }, 3000)
  });

  bottomLeftToastBtn.addEventListener("click", () => {
    bottomLeftToastContainer.classList.toggle("bottom-left-toast-open");
    setTimeout(() => {
      bottomLeftToastContainer.classList.toggle("bottom-left-toast-open");
    }, 3000)
  });

  bottomRightToastBtn.addEventListener("click", () => {
    bottomRightToastContainer.classList.toggle("bottom-right-toast-open");
    setTimeout(() => {
      bottomRightToastContainer.classList.toggle("bottom-right-toast-open");
    }, 3000)
  });

  bottomToastBtn.addEventListener("click", () => {
    bottomToastContainer.classList.toggle("bottom-toast-open");
    setTimeout(() => {
      bottomToastContainer.classList.toggle("bottom-toast-open");
    }, 3000)
  });

}

showToast();