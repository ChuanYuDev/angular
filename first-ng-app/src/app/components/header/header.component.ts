import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],

  // Because we change `inlineTemplate` and `inlineStyle` in `angular.json` to false
  //    We create HTML and scss
  //    Then we only have templateUrl and styleUrl in the component decorator
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = signal('My first Angular app');
}
