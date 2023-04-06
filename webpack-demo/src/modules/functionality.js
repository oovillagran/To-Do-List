/*eslint-disable*/

//import _ from 'lodash';
class TaskManager {
  constructor() {
      this.taskList = JSON.parse(localStorage.getItem('tasks')) || [];
      this.storageKey = 'tasks';
  }

  createTask = (description) => {
      const newTask = {
          description: description,
          completed: false,
          index: this.taskList.length + 1,
      };
      this.taskList.push(newTask);
      this.saveTasks();
  }

  displayWindow = (task) => `
    <div class="todoactivities">
      <label for="Item${task.index}">
        <button type="button" class="box" ${task.completed ? 'class="checked"' : ''}></button>
        <input type="text" class="li-activity" value="${task.description}" name="Item${task.index}" id="Item${task.index}">
          
      </label>
      <div id="index${task.index}" class="delete-button">
        <i class="bi bi-trash3-fill"></i>
      </div>
    </div>
  `

  loadCheckBoxes = () => {
      const checkBoxes = document.querySelectorAll('.box');
      checkBoxes.forEach((box) => {
          box.addEventListener('click', (e) => {
              const taskId = parseInt(e.target.parentElement.parentElement.id);
              const task = taskManager.taskList[taskId];
              task.completed = !task.completed;
              taskManager.saveTasks();
              e.target.classList.toggle('checked');
          });
      });
  }

  loadActivities = () => {
      const activitiesListSection = document.getElementById('activities-list');
      for (let i = 0; i < this.taskList.length; i++) {
          const itemList = document.createElement('li');
          itemList.id = i + 1;
          itemList.innerHTML = this.displayWindow(this.taskList[i]);
          activitiesListSection.appendChild(itemList);
      }
      this.loadCheckBoxes();
  }

  deteleTask = (taskId) => {
      this.taskList.splice(taskId, 1);
      for (let i = taskId; i < this.taskList.length; i++) {
          this.taskList[i].index--;
      }
      this.saveTasks();
  }

  upDateTask = (taskId, newDescription) => {
      this.taskList[taskId].description = newDescription;
      this.saveTasks();
      window.location.reload();
  }

  saveTasks = () => {
      localStorage.setItem(this.storageKey, JSON.stringify(this.taskList));
  }
}

export { TaskManager };
