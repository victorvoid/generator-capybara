'use strict';

const path = require('path');
const gutil = require('gulp-util');

exports.ngModule = 'app';

exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e',
  tasks: 'gulp_tasks'
};

exports.path = {};
for (const pathName in exports.paths) {
  if (exports.paths.hasOwnProperty(pathName)) {
    exports.path[pathName] = function pathJoin() {
      const pathValue = exports.paths[pathName];
      const funcArgs = Array.prototype.slice.call(arguments);
      const joinArgs = [pathValue].concat(funcArgs);
      return path.join.apply(this, joinArgs);
    };
  }
}

exports.errorHandler = function (title) {
  return function (err) {
    gutil.log(gutil.colors.red(`[${title}]`), err.toString());
    this.emit('end');
  };
};
