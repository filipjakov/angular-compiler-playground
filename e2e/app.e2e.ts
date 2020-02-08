import { AngularCompilerPlaygroundPage } from './app.po';

describe('angular-compiler-playground App', function() {
  let page: AngularCompilerPlaygroundPage;

  beforeEach(() => {
    page = new AngularCompilerPlaygroundPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-compiler-playground works!');
  });
});
