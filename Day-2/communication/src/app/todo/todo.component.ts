import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  task: string = '';
  todoList: string[] = [];

  addTask() {
    if (this.task.trim()) {
      this.todoList.push(this.task.trim());
      this.task = '';
    }
  }

  removeTask(index: number) {
    this.todoList.splice(index, 1);
  }
}
