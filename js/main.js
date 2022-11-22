console.log("main loaded");
//variables
const X_Class = "blockx";
const O_Class = "blocko";
const blockElement = document.querySelectorAll ('[block]')
//click function
blockElement.forEach(cell =>{
    cell.addEventListener('click', clickPressed, { once: true})
})