function main() {
    renderTodoList();
}

function renderTodoList() {
    const ol = document.createElement("ol");
    appendTodos(ol);
    getContainerRoot().appendChild(ol);
}

function getContainerRoot() {
    const elements = document.getElementsByClassName("todos-container");
    return elements[0];
}

/**
 * 
 * @param {HTMLElement} element 
 */
function appendTodos(element) {
    const todos = [
        { label: "Go to the grocery store" },
        { label: "Take out the trash" },
        { label: "Make dinner" },
        { label: "Do the dishes and clean the kitchen" },
        { label: "Fold clothes" },
    ];
    todos.forEach(t => {
        const li = document.createElement("li");
        li.innerText = t.label;
        element.appendChild(li);
    });
}
