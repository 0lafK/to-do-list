function addTask() {
  var newTaskInput = document.getElementById("myInput");
  var taskText = newTaskInput.value.trim();

  if (taskText !== "") {
    var newTask = document.createElement("div");
    newTask.className = "task";
    newTask.draggable = true;

    var taskParagraph = document.createElement("p");
    taskParagraph.textContent = taskText;
    newTask.appendChild(taskParagraph);
    taskParagraph.className = "taskp";

    var DoneButton = document.createElement("button");
    DoneButton.textContent = "Done";
    DoneButton.className = "donebutton";

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "editbutton";

    newTask.appendChild(DoneButton);
    newTask.appendChild(editButton);

    var create = document.getElementsByClassName("myTask")[0];
    create.appendChild(newTask);
    
    DoneButton.addEventListener("click", function () {
      newTask.remove(); 
    });

    editButton.addEventListener("click", function () {
      editParagraph(taskParagraph);
    });

    clearInput();
  }
}

function clearInput() {
  var newTaskInput = document.getElementById("myInput");
  newTaskInput.value = "";
}

function editParagraph(paragraph) {
  var text = paragraph.textContent;

  var input = document.createElement("input");
  input.type = "text";
  input.value = text;
  input.className = "editp";

  paragraph.parentNode.replaceChild(input, paragraph);

  input.focus();

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var updatedText = input.value;

      var updatedParagraph = document.createElement("p");
      updatedParagraph.textContent = updatedText;
      updatedParagraph.className = "taskp";

      input.parentNode.replaceChild(updatedParagraph, input);
    }
  });
}

var editButtons = document.getElementsByClassName("editbutton");
for (var i = 0; i < editButtons.length; i++) {
  var editButton = editButtons[i];
  var paragraph = editButton.parentNode.querySelector("p");
  var doneButton = editButton.parentNode.querySelector(".donebutton"); // Dodajemy znalezienie przycisku "Done" dla danego paragrafu
  editButton.addEventListener("click", function () {
    editParagraph(paragraph);
  });

  doneButton.addEventListener("click", function () {
    var parentDiv = doneButton.parentNode;
    parentDiv.remove();
 });
}