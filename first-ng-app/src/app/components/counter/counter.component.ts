import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = signal(0);

  increment() {
    // Error: counterValue is signal, cannot be assigned by a number
    // this.counterValue = 1;

    // this.counterValue.set(this.counterValue() + 1);

    // Get counterValue as val, plus 1 and return to update counterValue
    this.counterValue.update((val) => val + 1);
  }

  decrement() {
    this.counterValue.update((val) => val - 1);

  }

  reset() {
    // set counterValue to Signal(Signal(0))
    this.counterValue.set(0);
  }
}
