/*eslint-disable*/

//import _ from 'lodash';
import './style.css';

const tasks = [
  {
    description: 'Make the breakfast',
    completed: false,
    index: 0,
  },
  {
    description: 'Clean the yard',
    completed: false,
    index: 1,
  },
  {
    description: 'Study JavaScript',
    completed: false,
    index: 2,
  },
]

class Activity {
  constructor(description) {
    this.index = 0;
    this.completed = false;
    this.description = description;
  }

  displayWindow = () => `
    <label for="Item${this.index}">
      <button type="button" class="box">&#x2714</button>
      <input type="text" class="li-activity" value="${this.description}" name="Item${this.index}" id="Item${this.index}">
    </label>
  `
}

class TaskManager {
  taskList = tasks.map((task, index) => new Activity(task.description, index, task.completed));
  
  storageTaskList;
  storageKey = 'storageTaskList';
  storageKeyValue;

  activitiesListSection = document.getElementById('activities-list');
  activitiesInput = document.getElementById('activities-input');
  checkBox = document.querySelectorAll('.box');

  loadCheckBox = () => {
    this.checkBox.forEach((box) => {
      box.addEventListener('click', (e) => {
        e.target.classList.toggle('checked');
      });
    });
  }

  loadActivities = () => {
    for ( let i = 0; i < this.taskList.length; i++ ){
      const itemList = document.createElement('li');
      itemList.id = i;
      this.taskList[i].index = i;
      itemList.innerHTML = this.taskList[i].displayWindow();
      this.activitiesListSection.appendChild(itemList);
      this.checkBox = document.querySelectorAll('.box');
    }
    this.loadCheckBox();

  }
}

const taskManager = new TaskManager();
taskManager.loadActivities();
