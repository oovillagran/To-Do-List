/*eslint-disable*/

//import _ from 'lodash';
import './style.css';

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
  task1 = new Activity('Cook the breakfast');
  task2 = new Activity('Clean the yard');
  task3 = new Activity('Study javaScript');
  taskList = [this.task1, this.task2, this.task3];

  storageTaskList;
  storageKey = 'storageTaskList';
  storageKeyValue;

  activitiesListSection = document.getElementById('activities-list');
  activitiesInput = document.getElementById('activities-input');
  checkBox = document.querySelectorAll('.box');

  loadCheckBox = () => {
    this.checkBox.forEach.forEach((box) => {
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
