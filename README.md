# Test

- installed with `npx @angular/cli@1.1.0 new compiler-test --directory=./ --skip-commit=true --skip-tests=true`
- version 4.x got installed
- NOTE: problems with AOT compilation, had to upgrade cli to 1.2.6
- installed webpack-bundle-analyzer

## JIT: Experiment

- JIT -> `npm run bundle-report:jit`
- compiles application (`ng build --stats-json`) and runs webpack-bundle-analyzer on the generated compilation stats

### Bundle size

- vendor: 1.88MB/325KB
  - compiler: 1.01MB/167KB

Together: 2.12MB/377KB

## AOT: Experiment

- AOT -> `npm run --prod bundle-report:aot`
- compiles application (`ng build --prod --stats-json`) and runs webpack-bundle-analyzer on the generated compilation stats

### Bundle size

- vendor: 216KB/55KB
  - compiler: 0KB/0KB

Together: 287KB/79KB


## Stats

|     -    | JIT (parsed/gziped) | AOT (parsed/gziped) |
|:--------:|---------------------|---------------------|
| Vendor   | 1.88MB/325KB        | 215KB/55KB          |
| Compiler | 1.01MB/167KB        | -                   |
| Total    | 2.12MB/37/KB        | 286KB/79KB          |


## Compiling

- run `npm run compile`
- NOTE: these cases only happen in production mode

### *.component.ngfactory.ts

1. Styles
  - %COMP%
 
2. View_AppComponent_0
  - `return` part corresponds to the part inside the template
  - static part of the template: `h1`, newlines, text in the template - Run once
  - dynamic part of the template: data binding - Run every change detection part
  - ɵcrt - createRendererType2
  - ɵvid - viewDefinition
  - ɵeld - elementDefinition - index to how many nested (performance, better than nested lists)
  - ɵted - textDefinition
  - ɵdid - directiveDefinition
  - ɵccf - createComponentFactory

### *.module.ngfactory.ts
  - ɵcmf - createNgModuleFactory
  - ɵmod - module definition
  - ɵmpd - moduleProvideDef