import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  // Inject TodosService and assign it to todosService variable
  todosService = inject(TodosService);

  todoItems = signal<Array<Todo>>([]);

  // Allows us to have a function which runs when the component is initiated
  //    When we switch between different pages, the component will be destroyed and reinitiated
  ngOnInit(): void {
    // In the component, we are able to access the hardcoded value from the service
    // console.log(this.todosService.todoItems);
    // this.todoItems.set(this.todosService.todoItems);

    this.todosService
      .getTodosFromApi()
      .pipe(
        // If anything wrong happens, we can see error in the console
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }
}
