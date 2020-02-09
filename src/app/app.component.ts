import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello world from {{ title }}!</h1>`,
  styles: [
    'h1 { font-weight: bold; }'
  ]
})
export class AppComponent {
  title = 'Test';
}
