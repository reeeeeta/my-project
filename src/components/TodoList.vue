<template>
  <div class="body">
    <div class="container">
      <h1 class="header">ToDo List</h1>
      <div class="inputBox">
        <input
          type="text"
          id="todo"
          name="todo"
          placeholder="Add ToDo List"
          value=""
        />
        <button type="reset" id="add" @click="add">Add</button>
        <button type="reset" id="done" @click="done" style="display: none">
          Done
        </button>
      </div>

      <ul id="list" class="list">
        <li id="list1">Study JavaScript</li>
        <li id="list2">Buy breakfast</li>
        <li id="list3">Read book</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addButton({ text, className, onclickFunctionName }) {
      let button = document.createElement("button");
      const textNode = document.createTextNode(text);
      button.className = className;
      button.setAttribute("onClick", `${onclickFunctionName}(this)`);
      button.appendChild(textNode);
      return button;
    },
    add() {
      let li = document.createElement("li");
      li.id = "list" + count;
      count++;
      let inputValue = document.getElementById("todo").value;
      if (inputValue.trim().length == 0) {
        alert("Write something");
        return;
      }
      let input = document.createTextNode(inputValue);
      li.appendChild(input);
      document.getElementById("list").appendChild(li);
      inputValue = document.getElementById("todo").value = "";

      let button1 = this.addButton({
        text: "x",
        className: "remove",
        onclickFunctionName: "removeFunction",
      });
      let button2 = this.addButton({
        text: "edit",
        className: "editButton",
        onclickFunctionName: "editFunction",
      });
      let div = document.createElement("div");
      todoList[i].appendChild(div);
      div.appendChild(button1);
      div.appendChild(button2);
      i++;
    },
    editFunction(edit) {
      let editValue = document.getElementById("todo");
      let str = edit.parentElement.parentElement.innerText;
      temp = edit.parentElement.parentElement.id;
      editValue.value = str.substring(0, str.length - 5);
      let add = document.getElementById("add");
      let done = document.getElementById("done");
      add.style.display = "none";
      done.style.display = "inline";
    },
    removeFunction(remove) {
      remove.parentElement.parentElement.style.display = "none";
      let todo = document.getElementById("todo");
      todo.value = "";
      let add = document.getElementById("add");
      let done = document.getElementById("done");
      add.style.display = "inline";
      done.style.display = "none";
    },
    done() {
      let add = document.getElementById("add");
      let done = document.getElementById("done");
      add.style.display = "inline";
      done.style.display = "none";
      let todo = document.getElementById("todo");
      let li = document.getElementById(temp);
      li.innerHTML =
        todo.value +
        '<div><button class="remove" onclick="removeFunction(this)">x</button><button onclick="editFunction(this)" class="editButton">edit</button></div>';
      todo.value = "";
    },
  },
};
let count = 4;
let temp = "";
//create remove, edit button
let todoList = document.getElementsByTagName("li");
let i;

for (i = 0; i < todoList.length; i++) {
  let button1 = this.addButton({
    text: "x",
    className: "remove",
    onclickFunctionName: "removeFunction",
  });
  let button2 = this.addButton({
    text: "edit",
    className: "editButton",
    onclickFunctionName: "editFunction",
  });
  let div = document.createElement("div");
  todoList[i].appendChild(div);
  div.appendChild(button1);
  div.appendChild(button2);
}
</script>

<style>
.header {
  text-align: center;
}
input {
  width: 70%;
  padding: 10px;
  border: none;
  font-size: 15px;
  border-radius: 6px;
}
.inputBox {
  text-align: center;
}

button {
  border: none;
  padding: 4px;
  margin: 0 1px;
  border-radius: 6px;
  font-size: 13px;
  color: #888;
  width: 40px;
}
button:hover {
  color: black;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(#84c1ff, #ffc1e0);
}

.container {
  height: 80vh;
  border: 2px solid white;
  padding: 20px;
  flex-direction: column;
  font-size: 20px;
  color: white;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  color: white;
}
</style>
