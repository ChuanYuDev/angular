import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  // Tells Angular GreetingComponent can receive something from outside
  //    If we always want this message, we should use input.required
  //    message is signal which is InputSignal
  message = input('Default greeting message');
}
