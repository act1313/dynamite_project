let upLine = document.getElementById("one");

let things = document.querySelectorAll("up");

let newThings = document.querySelectorAll("down");

height = upLine.getBoundingClientRect().height;

things.style.paddingTop = `${height / 2}px`;
newThings.style.paddingBottom = `${height / 2}px`;
