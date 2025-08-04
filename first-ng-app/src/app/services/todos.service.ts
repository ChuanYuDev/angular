import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

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
  todoItems: Array<Todo> = [
    {
      title: 'groceries',
      id: 0,
      userId: 1,
      completed: false,
    },

    {
      title: 'car wash',
      id: 1,
      userId: 1,
      completed: false,
    },

  ]
  constructor() { }
}
