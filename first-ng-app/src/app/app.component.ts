import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

// Component decorator
//    Enhances AppComponent class
@Component({
  // Indicate the app-root element is actually AppComponent
  selector: 'app-root',

  standalone: true,

  // Import component
  imports: [RouterOutlet, HomeComponent, HeaderComponent],

  // Template will be rendered inside AppComponent
  template: `

    <!--
      Interpolation refers to embedding expressions into marked up text
        By default, interpolation uses the double curly braces {{ and }} as delimiters
    -->

    <!-- <h1>Welcome to {{title}}!</h1>
    <p>Hello world!</p> -->
    <app-header />
    <main>
      <app-home />
    </main>

    <router-outlet />
  `,
  // Specify css styles
  //    
  styles: [`
    // When you have a component, Angular adds an attribute to the element
    //    <app-root _nghost-ng-c3447218235="" ng-version="18.2.13">    
    //    All the child elements have the same attribute
    //
    // Chrome shows
    //    p[_ngcontent-ng-c3447218235] {
    //      background-color: red;
    //    }
    //    Make sure the styles within the component stays within the component, not leak styles
    //    If other components have <p>, they are not affected by this style
    // p {
    //   background-color: red;
    // } 

      main {
        padding: 16px;
      }
    `],
})
export class AppComponent {
  // title is called property
  title = 'first-ng-app';
}
