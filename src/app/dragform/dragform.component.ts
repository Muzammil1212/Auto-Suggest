import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-dragform',
  templateUrl: './dragform.component.html',
  styleUrls: ['./dragform.component.css']
})
export class DragformComponent {

  constructor(private router: Router) { }

  boxHidden = false;

  hideBox() {
    this.boxHidden = !this.boxHidden;
  }
  minutesDisplay = '00';
  secondsDisplay = '00';
  durationDisplay = '00:00';
  private timer: Subscription;
  private startTime: number;
  timerRunning = false;

  startTimer() {
    if (!this.timerRunning) {
      this.startTime = Date.now() - (Number(this.minutesDisplay) * 60 + Number(this.secondsDisplay)) * 1000;
      this.timer = interval(1000).subscribe(() => {
        this.updateTimer();
      });
      this.timerRunning = true;
    }
  }

  stopTimer() {
    if (this.timerRunning) {
      this.timer.unsubscribe();
      this.updateDuration();
      this.timerRunning = false;
    }
  }

  updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - this.startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);

    this.minutesDisplay = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    this.secondsDisplay = (totalSeconds % 60).toString().padStart(2, '0');
  }

  updateDuration() {
    const totalSeconds = (Number(this.minutesDisplay) * 60 + Number(this.secondsDisplay));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    this.durationDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  ngOnDestroy() {
    if (this.timer) {
      this.timer.unsubscribe();
    }
  }
  navigateToBlank() {
    this.router.navigate(['/blank']);
  }

}
