import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

// Injectable means this service can be injected in other places
@Injectable({
  // If you want this service to be used inside one component and nowhere else
  //    remove
  //      providedIn: 'root'
  //    Add
  //      providers: [TodosService]
  //      in Component decorator
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);

  // todoItems: Array<Todo> = [
  //   {
  //     title: 'groceries',
  //     id: 0,
  //     userId: 1,
  //     completed: false,
  //   },

  //   {
  //     title: 'car wash',
  //     id: 1,
  //     userId: 1,
  //     completed: false,
  //   },
  // ]

  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;

    // Specify what kind of data we are returning
    return this.http.get<Array<Todo>>(url);
  }
  constructor() { }
}
