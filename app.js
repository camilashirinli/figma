const tasksBox = document.querySelector(".tasks");
const input = document.querySelector(".inp");
const btnAdd = document.querySelector(".add");
let listCheck = document.querySelector('.listCheck');
let image1 = document.querySelector('.image1')

function addNewElement() {
    tasksBox.style.padding = "10px 0";
    const tempInp = document.createElement("li");
    tempInp.classList.add("task");
    tempInp.innerHTML = `<p class="task__content">${input.value}</p>
      <img src='./xCL.svg' onclick="this.parentElement.remove()" class="remove">
      <img src='./x.svg' onclick="this.parentElement.remove()" class=" remove removeDel">
      `;
    input.value = "";


    tasksBox.appendChild(tempInp);

    input.style.display = "none";
    listCheck.style.display = 'none';

    if (tasksBox.childElementCount !== 0) {
        tasksBox.style.display = 'block';
    }



    let image11 =document.querySelector('.removeDel');
    let image22 =document.querySelector('.remove');
    image22.addEventListener('mouseover', ()=>{
       image22.style.display='none';
       image11.style.display='block';
    
    })
    image22.addEventListener('mouseleave', ()=>{
        image22.style.display='block';
        image11.style.display='none';
     
     })
    

}




input.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        addNewElement();
    }
});

btnAdd.addEventListener("click", () => {
    if(input.value.trim() !== ''){
    if (getComputedStyle(input).display != "none") {
        listCheck.style.display = 'none';
        addNewElement();
    }} else {
        listCheck.style.display = 'block';
        input.style.display = "block";
        listCheck.style.display = 'block';
        image1.style.top = '10px';
    }

});

image1.addEventListener('click', () => {
    input.value = '';
});

const filterBtn = document.querySelector(".filter__btn");
let checkDU = false;

filterBtn.addEventListener("click", () => {
    sortItems();
});

function sortItems() {
    const items = Array.from(tasksBox.querySelectorAll("li"));
    items.sort((a, b) => {
        const textA = a.querySelector(".task__content").textContent.toLowerCase();
        const textB = b.querySelector(".task__content").textContent.toLowerCase();
        return checkDU ? textA.localeCompare(textB) : textB.localeCompare(textA);
    });
    items.forEach((item) => tasksBox.appendChild(item));
    checkDU = !checkDU;
}
