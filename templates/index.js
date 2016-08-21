<% if (framework === 'angular1'){%>

import angular from 'angular';

import {main} from  './app/main';
import {header} from './app/header';
import {footer} from './app/footer';

<%}%>
// import './styl/app.styl';

<% if (framework === 'angular1'){%>
angular
  .module('app', [])
  .component('app', main)
  .component('capyHeader', header)
  .component('capyFooter', footer)

<%}%>