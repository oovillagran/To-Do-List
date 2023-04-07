/*eslint-disable*/
//import _ from 'lodash';
import { TaskManager } from './modules/functionality.js';
import './style.css';

const taskManager = new TaskManager();
taskManager.loadActivities();

const activitiesInput = document.getElementById('activities-input');
const addActivityBtn = document.getElementById('add-activity-btn');

addActivityBtn.addEventListener('click', () => {
  const activityValue = activitiesInput.value;
  if (activityValue !== '') {
    window.location.reload();
    taskManager.createTask(activityValue);
    activitiesInput.value = '';
  }
});

activitiesInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    const activityValue = activitiesInput.value;
    if(activityValue !== ''){
      window.location.reload();
      taskManager.createTask(activityValue);
      activitiesInput.value = '';
    }
  }
});

const deleteButton = document.querySelectorAll('.delete-button');
deleteButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    const taskId = parseInt(e.target.parentElement.parentElement.id) - 1;
    taskManager.deteleTask(taskId);
    window.location.reload();
  });
});

const activityField = document.querySelectorAll('.li-activity');
activityField.forEach((field, i) => {
  field.addEventListener('keypress', (e) =>{
    if (e.key == 'Enter') {
      const newDescription= e.target.value;
      taskManager.upDateTask(i, newDescription);
    }
  });
});