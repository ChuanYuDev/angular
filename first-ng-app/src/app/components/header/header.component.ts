import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  // Import RouterLink to create link in the header to navigate to different page
  imports: [RouterLink],

  // Because we change `inlineTemplate` and `inlineStyle` in `angular.json` to false
  //    We create HTML and scss
  //    Then we only have templateUrl and styleUrl in the component decorator
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = signal('My first Angular app');
}
