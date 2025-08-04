import { Routes } from '@angular/router';

// Define all the routes
export const routes: Routes = [
    {
        // We are at the top or root
        path: '',

        // It's required if you're using just empty route
        pathMatch: 'full',

        loadComponent: () => {
            return import('./home/home.component').then((m) => m.HomeComponent)
        },
    },
    {
        path: 'todos',

        loadComponent: () => {
            return import('./todos/todos.component').then((m) => m.TodosComponent)
        }
    }
];
