import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello world from {{ title }}</h1>`,
})
export class AppComponent {
  title = 'Test!';
}
