// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
const likeButtons = document.querySelectorAll(".like-glyph");

// Get modal and message element
const errorModal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");

// Listen for heart clicks
likeButtons.forEach((heart) => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (heart.textContent === "♡") {
          heart.textContent = "♥";
          heart.classList.add("activated-heart");
        } else {
          heart.textContent = "♡";
          heart.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        // Show error modal
        modalMessage.textContent = error;
        errorModal.classList.remove("hidden");

        // Hide modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  });
});