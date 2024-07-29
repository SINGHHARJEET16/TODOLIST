let todoValue = " ";
let handleChange = (event) => {
    todoValue = event.target.value;
}
let handleClick = () => {
    let listitem = document.getElementById("list")
    let list = document.createElement("li");

    if (listitem.children.length >= 6) {
        alert("You can't add more than 6 items to the list.");
        return;
    }

    list.textContent = todoValue;
    let deleteBtn = document.createElement("button");

    deleteBtn.innerHTML = `<i class = "fa-solid fa-trash" > </i>`;
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
        listitem.removeChild(list);
    };

    list.appendChild(deleteBtn);
    listitem.appendChild(list);
    //removedtask
    document.getElementById("rem-task").addEventListener("click", () => {
        let listitem = document.getElementById("list");
        if (listitem.lastChild) {
            listitem.removeChild(listitem.lastChild);
        } else {
            // alert("No more items to remove.");
        }
    })
}