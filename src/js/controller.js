import taskView from './View/taskView';
import projectView from './View/projectView';

class Controller {
  constructor() {
    taskView.addNewTaskHandlerUpload();
  }

  controlNewTask() {}
}

new Controller();
