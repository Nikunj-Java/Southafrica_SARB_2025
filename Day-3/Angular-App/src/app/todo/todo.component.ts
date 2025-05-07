import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  task: string = '';
  todoList: string[] = [];

  isEditing: boolean = false;
editingIndex: number = -1;

  addTask() {
    if (this.task.trim()) {
      if (this.isEditing) {
        this.todoList[this.editingIndex] = this.task.trim();
        this.isEditing = false;
        this.editingIndex = -1;
      } else {
        this.todoList.push(this.task.trim());
      }
      this.task = '';
    }
  }

  editTask(index: number) {
    this.task = this.todoList[index];
    this.isEditing = true;
    this.editingIndex = index;
  }

  removeTask(index: number) {
    this.todoList.splice(index, 1);
    if (this.isEditing && this.editingIndex === index) {
      this.isEditing = false;
      this.task = '';
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.editingIndex = -1;
    this.task = '';
  }
}
