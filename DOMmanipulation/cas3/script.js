document.addEventListener('DOMContentLoaded', () => {
    // Button is didsabled by default
    document.querySelector('#submit').disabled = true;

    // 
    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0) {
            document.querySelector('#submit').disabled = false;

        } else {
            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('#new-task').onsubmit = () => {
        // Create new item for the list
        const li = document.createElement("li");
        li.innerHTML = document.querySelector('#task').value;

        // Add item to the task list
        document.querySelector('#tasks').append(li);

        // add listener for compliting tasks
        li.addEventListener('click', () => {
            console.log(event.target)
            event.target.classList.toggle("checked");
        })

        document.querySelector('#task').value = '';
        document.querySelector('#submit').disabled = true;

        return false;
    }

});
