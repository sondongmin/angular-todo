import { Component, OnInit } from '@angular/core';
import { TodoService, TodoObject, TodoObjects } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})

export class TodoComponent implements OnInit {
  private todos : TodoObjects;
  private newTitle : string;

  constructor(private todoService: TodoService) { 
    this.newTitle = '';
  }

  addTodo(): void {
    this.todoService.add({ title: this.newTitle, isDone: false, enabled: false });
    this.newTitle = '';
  }

  getTodos(): TodoObjects {
    this.todos = this.todoService.get();
    return this.todos;
  }

  deleteTodo(todo: TodoObject): TodoObjects {
    this.todoService.delete(todo);
    return this.getTodos();
  }

  toggleCompleted(todo: TodoObject): TodoObjects {
    todo = {...todo, isDone: !todo.isDone};
    this.todoService.put(todo);
    return this.getTodos();
  }

  updateTitle(todo: TodoObject, newValue: string): TodoObjects {
    todo = {...todo, title: newValue};
    this.todoService.put(todo);
    return this.getTodos();
  }

  ngOnInit() {
    this.getTodos();
  }
}