import { setupCounter } from './counter';

const counter = document.querySelector<HTMLButtonElement>('#counter');

if (counter) {
  console.log('hello');
  setupCounter(counter);
}
