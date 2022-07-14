const state = {
  projects: [],
  completed: [],
};

class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

class Task {
  constructor(title, priority, dueDate, description) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    // this.description = description;
  }
}
