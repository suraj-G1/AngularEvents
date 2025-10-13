import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-events');

  handleEvent(event: Event) {
    console.log('Type of the Event :', event.type);
    console.log("Value",(event.target as HTMLInputElement).value)
  }
}
