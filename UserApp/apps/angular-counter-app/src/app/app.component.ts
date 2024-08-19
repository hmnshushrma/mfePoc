import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-counter-app';
  counter: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startCounter();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCounter(): void {
    this.intervalId = setInterval(() => {
      this.counter = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
    }, 1000); // Updates the counter every second
  }
}
