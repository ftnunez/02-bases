import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page.component',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.scss',
})
export class CounterPageComponent {
  counter = 210;
  counterSignal = signal(10);

  constructor(){
    setInterval(()=>{
      this.counterSignal.update((current) => current + 1);
      this.counter += 1;
      console.log('Tick');
    }, 2000)

  }

  increaseBy(value: number){
    this.counter += value;

    this.counterSignal.update((current) => current + value);
  }

  decreaseBy(value: number){
    this.counter -= value;

    this.counterSignal.update((current) => current - value);
  }


  reset(){
    this.counter = 0;

    this.counterSignal.set(0);
  }
}
