import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hellow world, this is a {{ title }}</h1>`,
})
export class AppComponent {
  title = 'Test!';
}
