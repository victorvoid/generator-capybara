# Capybara Generator 

[![NPM version][npm-image]][npm-url]

[![Npm Downloads](https://nodei.co/npm/generator-capybara.png?downloads=true&stars=true)](https://nodei.co/npm/generator-capybara.png?downloads=true&stars=true)

> Capybara Generator follows the Atomic Design methodology and with a modern workflow (webpack, es6 and stylus).

<img width="300"  src="https://media.giphy.com/media/pTX0wj6rPl7QA/giphy.gif"></img>

## Installation

First, install [Yeoman](http://yeoman.io) and generator-capybara using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo generator-capybara
```

Generators
----------

Available generators:

    capybara
    capybara:boson
    capybara:quark
    capybara:atom
    capybara:molecule
    capybara:organism
    capybara:page
    capybara:template

### Capybara App
 
Sets up a new Capy app, generating all the boilerplate you need to get started. The app generator also optionally installs frameworks.

example:

```bash
  yo capybara  #in your project folder
```

(optional)
Put this in your ~/.bashrc or ~/.zshrc

```bash
  alias capybara='yo capybara' #use 'capybara' in your project folder for starting
```

Options
---------

- Full app Atomic Design
  - Name your Project
  - Choice frameworks
    - Angular 
    - No framework
    - Vue 2 (Wished. Contributors welcome. :star2:)
    - React (Wished. Contributors welcome. :star2:)
    - Angular 2 (Wished. Contributors welcome. :star2:)
    - Backbone (Wished. Contributors welcome. :star2:)
    - Ember 2 (Wished. Contributors welcome. :star2:)
- Folder Atomic Stylus


Atomic Design
---------------

Capybara follows the Atomic Design methodology. :small_orange_diamond:

![](https://www.phase2technology.com/wp-content/uploads/2014/02/icon-molecule.png)


- [Atomic Design | Brad Frost](http://bradfrost.com/blog/post/atomic-web-design/)
- [Atomic Design Methodology | Atomic Design by Brad Frost](http://atomicdesign.bradfrost.com/chapter-2/)
- [Your Frontend Methodology Is All of Them: Atomic Design & Pattern Lab](https://www.phase2technology.com/blog/your-frontend-methodology-is-all-of-them-atomic-design-patternlab/)
- [Modular CSS / Atomic Design in the Enterprise](https://cantina.co/modular-css-atomic-design-in-the-enterprise/)
- [Atomic Design Node by Suissa](https://github.com/Webschool-io/Node-Atomic-Design-Modelo-Padrao) 

Directory Layout
----------------

### Atomic Design Structure in Stylus

```
├── □ styl
|   |     
|   ├── □ base
|   |   |   ├── _forms.styl
|   |   |   ├── _global-classes.styl
|   |   |   └── _headings.styl
|   ├── □ generic
|   |   |   ├── _debugs.styl
|   |   |   ├── _mixins.styl
|   |   |   └── _reset.styl
|   ├── □ patterns                                   
|   |   ├── □ 00_bosons                        
|   |   |   ├── _boson-button.styl
|   |   |   ├── _boson-colors.styl
|   |   |   ├── _boson-responsive.styl
|   |   |   ├── _boson-typography.styl
|   |   |   ├── _boson-variables.styl
|   |   |   └──  boson-main.styl
|   ├── □ 01_quarks                        
|   |   |   ├── _quarks-icon.styl
|   |   |   ├── _quark-link.styl
|   |   |   └── quark-main.styl
|   ├── □ 02_atoms                        
|   |   |   ├── _atoms-buttons.styl
|   |   |   ├── _atoms-icons.styl
|   |   |   ├── _atoms-images.styl
|   |   |   ├── _atoms-inputs.styl
|   |   |   ├── _atoms-texts.styl
|   |   |   ├── _atoms-titles.styl
|   |   |   └── atom-main.styl
|   ├── □ 03_molecules                        
|   |   |   ├── _molecules-logo.styl
|   |   |   ├── _molecules-menu.styl
|   |   |   └── molecule-main.styl
|   ├── □ 04_organisms                        
|   |   |   ├── _organism-content.styl
|   |   |   ├── _organism-header.styl
|   |   |   └── organism-main.styl
|   ├── □ 05_pages                        
|   |   |   └── page-main.styl
|   ├── □ 06_templates                        
|   |   |   ├── _template-content.styl
|   |   |   └── template-main.styl
```

Run
-----

|NPM scripts| Gulp tasks | Description
|---|---|---|---|
| `npm run build` |  `gulp` or `gulp build` | to build an optimized version of your application in /dist
| `npm run serve` |  `gulp serve` | to launch a browser sync server on your source files
| `npm run serve:dist` | `gulp serve:dist` | to launch a server on your optimized application
| `npm run test` |  `gulp test`| to launch your unit tests with Karma
| `npm run test:auto`  | `gulp test:auto` | to launch your unit tests with Karma in watch mode

Frontend Technologies
---------------------
* [Angular](https://angularjs.org/) (optional): AngularJS lets you extend HTML vocabulary for your application.
* [Webpack](http://webpack.github.io/): module bundler for the browser
* [Stylus](http://stylus-lang.com/): expressive, dynamic, robust CSS

Dev Technologies
----------------

* [Babel](https://babeljs.io/): A es6/es7 compiler.
* [Karma](https://karma-runner.github.io): A productive testing environment to developers
* [Eslint](http://eslinbat.org/): The pluggable linting utility for JavaScript and JSX.
* [BrowserSync](https://www.browsersync.io/): Time-saving synchronised browser testing.
* [Rupture](https://github.com/jescalan/rupture): Simple media queries for stylus.
* [Kouto-Swiss](http://kouto-swiss.io/): A complete CSS framework for Stylus.
* [Jeet](http://jeet.gs/): A grid system for human.

Features
--------

```
├── □ styl
|   |     
|   ├── □ generic
|   |   |   └── _debugs.styl
```

Variables for responsive breakpoint and grid

```styl
//default:
$debug-enable = true
$debug-grid = false
```

```css

/*
    Media Queries
*/

// scale                  0     400px   600px   800px   1050px  1800px

//                        └──┬──┘ └──┬──┘ └──┬──┘ └──┬──┘ └──┬──┘ └──┬──
// Slice numbers:             1      2        3       4       5       6
// scale-names              'xs'    's'      'm'     'l'     'xl'    'hd'


// scale                  0     400px  600px   800px   1050px  1800px

//                        └──┬──┘ └──────────┬─────────┘ └──┬──┘ └──┬──
// scale-devices             'mobile'     'tablet'        'desktop' 'hd'
```

![](https://github.com/victorvoid/generator-capybara/blob/master/image-demo/mobile.png?raw=true)
![](https://github.com/victorvoid/generator-capybara/blob/master/image-demo/desktop.png?raw=true")

## License

MIT © [Victor Igor](https://github.com/VictorVoid/)


[npm-image]: https://badge.fury.io/js/generator-capybara.svg
[npm-url]: https://npmjs.org/package/generator-capybara
[travis-image]: https://travis-ci.org/VictorVoid/generator-capybara.svg?branch=master
[travis-url]: https://travis-ci.org/VictorVoid/generator-capybara
[daviddm-image]: https://david-dm.org/VictorVoid/generator-capybara.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/VictorVoid/generator-capybara
[coveralls-image]: https://coveralls.io/repos/VictorVoid/generator-capybara/badge.svg
[coveralls-url]: https://coveralls.io/r/VictorVoid/generator-capybara
