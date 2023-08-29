# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![Mobile Screenshot](./screenshots/mobile.png)
![Desktop Screenshot](./screenshot/desktop.png)

### Links

- Live Site URL: [Expenses Chart Component](https://alexl8819.github.io/expenses-chart-component/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [Parcel](https://parceljs.org/) - Bundler

### What I learned

First time using chart.js on a project. The documentation I feel could be improved as some features like customizing the labels were not as clear as I'd thought they would be. I also learned that the using workers was not ideal because you miss out on some key features like animations or interacting with the DOM (i.e clicks, mouseovers), which is a shame because I enjoy using web workers whenever possible.
