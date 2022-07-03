# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Solution Screenshot](./solution-screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Gulp JS
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Never used list-style-image before. It's cool!

```css
.features__item {
    margin-top: 1em;

    &:nth-of-type(1) {
      list-style-image: url(../../images/icon-todo.svg);
    }
    &:nth-of-type(2) {
      list-style-image: url(../../images/icon-calendar.svg);
    }
    &:nth-of-type(3) {
      list-style-image: url(../../images/icon-reminders.svg);
    }
    &:nth-of-type(4) {
      list-style-image: url(../../images/icon-planning.svg);
    }
  }
}
```

For the dropdown menus

```js
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
  });
});
```

### Continued development

- I want to use React for my next project, as this one seemed a bit simple for using that library. I want to use the full suite of React capabilities on a project- React Router, Context Api, etc.
- I want to use (and learn) CSS Modules the next project, instead of using BEM, as i don't like the class names you end up using
- I had a good time learning how to use Gulp JS to spin up a local server, compile Sass, listen for changes to HTML and JS files. I did have issues deploying to Netlify because of Gulp, however.
  -I had some issues centering certain aspects of the design. Some aspects were more involved than i thought they would be.
  -Dropdown menus and accordions- making things scale to different screen sizes was a challenge.
  -I got stuck with applying a dark background with active sidebar, as it would only apply to certain things, and not images.
  -This challenge was good for attention to detail, as there were very small details that at times took me a long time to spot and implement. I need to improve this aspect, as sometimes I'd change one thing and it would have unexpected results elsewhere
  -Sometimes I felt like I was hacking things to get them to work, rather than knowing the best solution for a particular problem, i.e lots of overriding styles from scaling to children. I need to keep practising, as I am using good tools such as css functions for font sizes, i.e clamp().

### Useful resources

- [Gulp Tutorial](https://www.youtube.com/watch?v=QgMQeLymAdU) - This helped me translate my gulp tasks into the latest version of Gulp, using functions.

## Author

- Website - [Evan Parker](www.evanparker.co.uk)
- Frontend Mentor - [@evancp87](https://www.frontendmentor.io/profile/evancp87)
