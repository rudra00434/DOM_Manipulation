const heading = document.getElementById("title");
const button = document.getElementById("button");
button.addEventListener("click",function(){
    heading.textContent = "Hello Rudra";
    heading.style.color = "red";
})
let newparagraph = document.createElement("p");
newparagraph.textContent = "This is a new paragraph ";
document.body.appendChild(newparagraph);
console.log(button);
