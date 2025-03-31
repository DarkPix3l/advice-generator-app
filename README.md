# Frontend Mentor - Advice generator app solution

![Design preview for the Advice generator app coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/solutions/adivice-generator-app-BFPd-T_sfv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

The challenge was to build out this advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Live Site URL: [Add live site URL here](https://fm-advicegeneratorapp.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

I've learn to build a simple web application that fetches random pieces of advice from the "Advice Slip API" and displays them dynamically on the webpage.
It utilizes a basic GET request to retrieve advice data, ensuring a smooth user experience without the need for sequential fetching.

```js
fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json()) //after fetch, convert.
  .then((data) => {})
  .catch((error) => {});
```

The app sends a fetch request to https://api.adviceslip.com/advice, retrieves a JSON response, and extracts the advice ID and advice text.

The fetched advice is then dynamically injected into the container using innerHTML, ensuring that each time new advice is retrieved, the displayed content updates seamlessly.

```js

 .then((data) => {
      container.innerHTML = `<p> ADVICE&ensp;#${data.slip.id}</p>
                          <div class="quote">
                            <q>${data.slip.advice}</q>
                          </div>`;
    })
```

If an error occurs, it provides a default fallback advice message and an info message.
To avoid an empty state on page load, the function that fetches advice is executed once before setting an interval for repeated requests.

#### A Behavior Quirk

At one point, the container variable seemed to be defined automatically, which was unexpected. It turned out that some browsers create global variables for elements with an id matching the variable name.
https://stackoverflow.com/questions/3434278/do-dom-tree-elements-with-ids-become-global-properties
I realize it when testing the code with the variable accidentaly commented.

---

## Author

- Website - [GM](gretamacri.com)
- Frontend Mentor - [@DarkPix3l](https://www.frontendmentor.io/profile/DarkPix3l)
