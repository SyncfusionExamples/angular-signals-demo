import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MatButton],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  currentCount = signal(0);

  incrementCounterByOne() {
    this.currentCount.update((count) => count + 1);
  }

  multiplyCounterByTwo() {
    this.currentCount.update((count) => count * 2);
  }

  resetCounter() {
    this.currentCount.set(0);
  }
}
