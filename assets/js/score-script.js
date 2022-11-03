let newScore = document.createElement('li');
let section = document.querySelector('section');
console.log(localStorage.getItem("initials"));

for (let i = 0; i < localStorage.getItem("score").length; i++) {
    section.children[1].appendChild(newScore);
    section.children[1].children[0].textContent = `${localStorage.getItem("initials")} - ${localStorage.getItem("score")}`
};