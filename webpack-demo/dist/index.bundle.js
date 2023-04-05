(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

/*eslint-disable*/

//import _ from 'lodash';

class Activity {
  constructor(description) {
    this.index = 0;
    this.completed = false;
    this.description = description;
  }

  displayWindow = () => `
    <label for="Item${this.index}">
      <button type="button" class="box">&#x2714</button>
      <input type="text" value="${this.description}" name="Item${this.index}" id="Item${this.index}">
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFdBQVc7QUFDakM7QUFDQSxrQ0FBa0MsaUJBQWlCLGNBQWMsV0FBVyxZQUFZLFdBQVc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmVzbGludC1kaXNhYmxlKi9cclxuXHJcbi8vaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmNsYXNzIEFjdGl2aXR5IHtcclxuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheVdpbmRvdyA9ICgpID0+IGBcclxuICAgIDxsYWJlbCBmb3I9XCJJdGVtJHt0aGlzLmluZGV4fVwiPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJveFwiPiYjeDI3MTQ8L2J1dHRvbj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3RoaXMuZGVzY3JpcHRpb259XCIgbmFtZT1cIkl0ZW0ke3RoaXMuaW5kZXh9XCIgaWQ9XCJJdGVtJHt0aGlzLmluZGV4fVwiPlxyXG4gICAgPC9sYWJlbD5cclxuICBgXHJcbn1cclxuXHJcbmNsYXNzIFRhc2tNYW5hZ2VyIHtcclxuICB0YXNrMSA9IG5ldyBBY3Rpdml0eSgnQ29vayB0aGUgYnJlYWtmYXN0Jyk7XHJcbiAgdGFzazIgPSBuZXcgQWN0aXZpdHkoJ0NsZWFuIHRoZSB5YXJkJyk7XHJcbiAgdGFzazMgPSBuZXcgQWN0aXZpdHkoJ1N0dWR5IGphdmFTY3JpcHQnKTtcclxuICB0YXNrTGlzdCA9IFt0aGlzLnRhc2sxLCB0aGlzLnRhc2syLCB0aGlzLnRhc2szXTtcclxuXHJcbiAgc3RvcmFnZVRhc2tMaXN0O1xyXG4gIHN0b3JhZ2VLZXkgPSAnc3RvcmFnZVRhc2tMaXN0JztcclxuICBzdG9yYWdlS2V5VmFsdWU7XHJcblxyXG4gIGFjdGl2aXRpZXNMaXN0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpdml0aWVzLWxpc3QnKTtcclxuICBhY3Rpdml0aWVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZpdGllcy1pbnB1dCcpO1xyXG4gIGNoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJveCcpO1xyXG5cclxuICBsb2FkQ2hlY2tCb3ggPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNoZWNrQm94LmZvckVhY2guZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZEFjdGl2aXRpZXMgPSAoKSA9PiB7XHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tMaXN0Lmxlbmd0aDsgaSsrICl7XHJcbiAgICAgIGNvbnN0IGl0ZW1MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgaXRlbUxpc3QuaWQgPSBpO1xyXG4gICAgICB0aGlzLnRhc2tMaXN0W2ldLmluZGV4ID0gaTtcclxuICAgICAgaXRlbUxpc3QuaW5uZXJIVE1MID0gdGhpcy50YXNrTGlzdFtpXS5kaXNwbGF5V2luZG93KCk7XHJcbiAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RTZWN0aW9uLmFwcGVuZENoaWxkKGl0ZW1MaXN0KTtcclxuICAgICAgdGhpcy5jaGVja0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcclxuICAgIH1cclxuICAgIHRoaXMubG9hZENoZWNrQm94KCk7XHJcblxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdGFza01hbmFnZXIgPSBuZXcgVGFza01hbmFnZXIoKTtcclxudGFza01hbmFnZXIubG9hZEFjdGl2aXRpZXMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9