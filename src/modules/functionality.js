//import _ from 'lodash';

class TaskManager {
  constructor() {
    this.taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    this.storageKey = 'tasks';
  }

  createTask = (description) => {
    const newTask = {
      description,
      completed: false,
      index: this.taskList.length + 1,
    };
    this.taskList.push(newTask);
    this.saveTasks();
  }

  displayWindow = (task) => `
    <div class="todoactivities" data-task-index="${task.index}">
      <label for="Item${task.index}" class="tasks-list">
        <button type="button" class="box ${task.completed ? 'checked' : ''}">&#x2713;</button>
        <input type="text" class="li-activity ${task.completed ? 'checked' : ''}" value="${task.description}" name="Item${task.index}" id="Item${task.index}">
          
      </label>
      <div id="index${task.index}" class="delete-button">
        <i class="bi bi-trash3-fill novisible trash" id="delete${task.index}"></i>
        <i class="bi bi-three-dots-vertical ellipse"></i>
      </div>
    </div>
  `

  loadCheckBoxes = () => {
    const checkBoxes = document.querySelectorAll('.box');
    checkBoxes.forEach((box) => {
      box.addEventListener('click', (e) => {
        const taskId = parseInt(e.target.parentElement.parentElement.dataset.taskIndex, 10);
        const task = this.taskList.find((t) => t.index === taskId);
        task.completed = !task.completed;
        this.saveTasks();
        e.target.classList.toggle('checked');
        const input = e.target.parentElement.querySelector('.li-activity');
        input.classList.toggle('checked');
        this.completionState(parseInt(e.target.parentElement.parentElement.id, 10));
      });
    });
  }

  completionState = (parentIndex) => {
    for (let i = 0; i < this.taskList.length; i += 1) {
      if (this.taskList[i].index === parentIndex + 1) {
        if (this.taskList[i].completed === true) {
          this.taskList[i].completed = false;
          this.saveTasks();
          return;
        }
        if (this.taskList[i].completed === false) {
          this.taskList[i].completed = true;
          this.saveTasks();
        }
      }
    }
  }

  loadActivities = () => {
    const activitiesListSection = document.getElementById('activities-list');
    for (let i = 0; i < this.taskList.length; i += 1) {
      const itemList = document.createElement('li');
      itemList.id = i + 1;
      itemList.innerHTML = this.displayWindow(this.taskList[i]);
      activitiesListSection.appendChild(itemList);
    }
    this.loadCheckBoxes();
  }

  deleteTask = (taskId) => {
    this.taskList.splice(taskId, 1);
    for (let i = taskId; i < this.taskList.length; i += 1) {
      this.taskList[i].index - 1;
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

export default TaskManager;
