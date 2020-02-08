export class AngularCompilerPlaygroundPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-compiler-playground-app h1')).getText();
  }
}
