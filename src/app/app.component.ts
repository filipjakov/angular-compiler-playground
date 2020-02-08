import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>Hello world {{ title }}</div>
  `,
  styles: []
})
export class AppComponent {
  title = 'test';
}
