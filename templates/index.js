import angular from 'angular';

import {hello} from './components/app/hello-world';

import './styl/app.styl';

export const app = 'app';

angular
  .module(app, [])
  .component('app', hello);