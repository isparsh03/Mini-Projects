document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded");

    const nameInput = document.getElementById("name-input");
    const userGreeting = document.getElementById("user-greeting");
    const welcomeScreen = document.getElementById("welcome-screen");
    const todoContainer = document.getElementById("todo-container");
    const listContainer = document.getElementById("list-container");
    const inputBox = document.getElementById("input-box");
    const toast = document.getElementById("toast");
    const resetButton = document.getElementById("reset-button");

    
    window.saveName = function () {
        console.log("saveName() called");

        const userName = nameInput.value.trim();

        if (userName === "") {
            showToast("Please enter your name!");
            return;
        }

        localStorage.setItem("userName", userName);
        userGreeting.textContent = `${userName}'s To-Do List`;

        welcomeScreen.style.display = "none";
        todoContainer.style.display = "block";

        resetButton.style.display = "inline-block";
    };

    const storedName = localStorage.getItem("userName");
    if (storedName) {
        userGreeting.textContent = `${storedName}'s To-Do List`;
        welcomeScreen.style.display = "none";
        todoContainer.style.display = "block";

       
        resetButton.style.display = "inline-block";
    }

   
    window.addTask = function () {
        console.log("addTask() called");

        const taskText = inputBox.value.trim();

        if (taskText === "") {
            showToast("Please enter a task!");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "&#x2716;";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            li.remove();
            showToast("Task Deleted!");
        };

        li.appendChild(deleteBtn);
        listContainer.appendChild(li);
        showToast("Task Added!");

        inputBox.value = "";
    };

  
    window.resetSession = function () {
        console.log("resetSession() called");

       
        localStorage.removeItem("userName");

       
        userGreeting.textContent = "Enter your name to start a new To-Do list";
        welcomeScreen.style.display = "block";
        todoContainer.style.display = "none";

        resetButton.style.display = "none";

        listContainer.innerHTML = "";
    };

    
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2000);
    }
});

