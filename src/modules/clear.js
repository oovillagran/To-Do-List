export default function addClearButtonListener(taskManager) {
  const clearButton = document.getElementById('clear-button');
  clearButton.addEventListener('click', () => {
    taskManager.taskList = taskManager.taskList.filter((task) => !task.completed);
    taskManager.saveTasks();
    window.location.reload();
  });
}