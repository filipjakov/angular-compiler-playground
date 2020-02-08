import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularCompilerPlaygroundAppComponent } from '../app/angular-compiler-playground.component';

beforeEachProviders(() => [AngularCompilerPlaygroundAppComponent]);

describe('App: AngularCompilerPlayground', () => {
  it('should create the app',
      inject([AngularCompilerPlaygroundAppComponent], (app: AngularCompilerPlaygroundAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-compiler-playground works!\'',
      inject([AngularCompilerPlaygroundAppComponent], (app: AngularCompilerPlaygroundAppComponent) => {
    expect(app.title).toEqual('angular-compiler-playground works!');
  }));
});
