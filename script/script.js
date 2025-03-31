//Basic Fetch Request
//simple repeating request
//wrapping the fetch request inside a callback function

const container = document.getElementById("container");
const nextAdvice = document.getElementById("nextAdviceBTN");
const allertInfo = document.getElementById("info");

function repeatRequest() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json()) //after fetch, convert.
    .then((data) => {
      container.innerHTML = `<p> ADVICE&ensp;#${data.slip.id}</p>
                          <div class="quote">
                            <p><q>${data.slip.advice}</q></p>
                          </div>`;
    })
    .catch((error) => {
      console.error("Error:", error);
      container.innerHTML = `<p>ADVICE #194</p>
                              <div class="quote">
                              <p><q>Don't always rely on your comforts.</q></p>
                              </div>`;
      allertInfo.textContent =
        "Oops! Something went wrong while fetching the advice. Please try again later.";
    });
}

document.addEventListener("DOMContentLoaded", repeatRequest); //Run the function once before starting the interval because there was no messages at the beginning

nextAdvice.addEventListener("click", repeatRequest);
