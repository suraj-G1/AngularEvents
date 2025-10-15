import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlow } from './control-flow/control-flow';
import { ForLoop } from './for-loop/for-loop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ControlFlow,ForLoop],
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
