import { Injectable } from '@angular/core';

const TODOS: TodoObjects = [
  { title: 'Eat a burger', isDone: true, enabled: false},
  { title: 'Drink tea', isDone: true, enabled: false},
  { title: 'Watch TV', isDone: false, enabled: false},
  { title: 'Play videogames', isDone: false, enabled: false},
];

export interface TodoObject {
  title: string;
  isDone: boolean;
  enabled: boolean;
}

export interface TodoObjects extends Array<TodoObject>{}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  add(data:TodoObject): void {
    TODOS.push(data);
  }

  get(): TodoObjects {
    let data = TODOS;
    return data;
  }

  put(changed: TodoObject): void {
    const index = TODOS.findIndex(todo => todo === changed);
    TODOS[index] = changed;
  }

  delete(selected: TodoObject): void {
    const index = TODOS.findIndex(todo => todo === selected);
    TODOS.splice(index, 1);
  }
}