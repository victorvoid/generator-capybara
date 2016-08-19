var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var templateURL = '../../../templates/';

module.exports = generators.Base.extend({
   initializing: function () {
    this.pkg = require('../../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('capybara') + ' generator!'
    ));

    var prompts = [{
      type: 'list',
      name: 'framework',
      message: 'Which JavaScript framework do you want?',
      choices: [
          {name: 'Angular 1', value: 'angular1'},
          {name: chalk.gray('React'), value: 'react', disabled: chalk.gray('Wished. Contributors welcome. *-*')},
          {name: chalk.gray('Angular 2'), value: 'angular2', disabled: chalk.gray('Wished. Contributors welcome. *-*')},
          {name: chalk.gray('Vue 2'), value: 'vue', disabled: chalk.gray('Wished. Contributors welcome. *-*')},
          {name: chalk.gray('Ember 2'), value: 'ember', disabled: chalk.gray('Wished. Contributors welcome. *-*')},
          {name: chalk.gray('Backbone'), value: 'backbone', disabled: chalk.gray('Wished. Contributors welcome. *-*')}
        ]
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      this.props.features = props.features || [];

      this.props.features.forEach(function (feature) {
        this.props[feature] = true;
      }.bind(this));

      done();
    }.bind(this));
  },

  writing: {
    npm: function () {
      this.fs.copyTpl(
        this.templatePath(templateURL+'package.json'),
        this.destinationPath('package.json'),
        {
          framework: this.props.framework
        }
      );
    },

    styles: function () {
      [
       'base/_forms.styl',
       'base/_global-classes.styl',
       'base/_headings.styl',
       'generic/_reset.styl',
       'generic/_mixins.styl',
       'generic/_debugs.styl',
       'patterns/00-bosons/_boson-button.styl',
       'patterns/00-bosons/_boson-colors.styl',
       'patterns/00-bosons/_boson-responsive.styl',
       'patterns/00-bosons/_boson-typography.styl',
       'patterns/00-bosons/_boson-variables.styl',
       'patterns/00-bosons/boson-main.styl',
       'patterns/01-quarks/_quark-icon.styl',
       'patterns/01-quarks/_quark-link.styl',
       'patterns/01-quarks/quark-main.styl',
       'patterns/02-atoms/_atom-buttons.styl',
       'patterns/02-atoms/_atom-icons.styl',
       'patterns/02-atoms/_atom-images.styl',
       'patterns/02-atoms/_atom-inputs.styl',
       'patterns/02-atoms/_atom-texts.styl',
       'patterns/02-atoms/_atom-titles.styl',
       'patterns/02-atoms/atom-main.styl',
       'patterns/03-molecules/_molecule-logo.styl',
       'patterns/03-molecules/_molecule-menu.styl',
       'patterns/03-molecules/molecule-main.styl',
       'patterns/04-organisms/_organism-content.styl',
       'patterns/04-organisms/_organism-header.styl',
       'patterns/04-organisms/organism-main.styl',
       'patterns/05-pages/page-main.styl',
       'patterns/06-templates/_template-content.styl',
       'patterns/06-templates/template-main.styl',
      ].forEach(function (file) {
        this.fs.copy(
          this.templatePath(templateURL+'styl/' + file),
          this.destinationPath('app/styl/' + file)
        );
      }.bind(this));

      this.fs.copyTpl(
        this.templatePath(templateURL+'styl/app.styl'),
        this.destinationPath('app/styl/app.styl'),
        {
          framework: this.props.framework
        }
      );
    },
    tasks: function(){
      [
        'gulp_tasks/browsersync.js',
        'gulp_tasks/karma.js',
        'gulp_tasks/misc.js',
        'gulp_tasks/partials.js',
        'gulp_tasks/webpack.js',
        'conf/browsersync-dist.conf.js',
        'conf/browsersync.conf.js',
        'conf/gulp.conf.js',
        'conf/karma-auto.conf.js',
        'conf/karma.conf.js',
        'conf/webpack-dist.conf.js',
        'conf/webpack-test.conf.js',
        'conf/webpack.conf.js'
      ].forEach(function (file) {
        this.fs.copy(
          this.templatePath(templateURL + '' + file),
          this.destinationPath(file)
        );
      }.bind(this));  
    },
    svg: function () {
      this.fs.copy(
        this.templatePath(templateURL+'images/icons.svg'),
        this.destinationPath('app/images/icons.svg')
      );
    },
    images: function () {
      [
        'desktop.png',
        'mobile.png',
        'tablet.png'
      ].forEach(function (file) {
        this.fs.copy(
          this.templatePath(templateURL + 'images/grid/' + file),
          this.destinationPath('app/images/grid/' + file)
        );
      }.bind(this));  
    },
    files: function(){
      this.fs.copy(
        this.templatePath(templateURL+'gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
    },
    dotfiles: function(){
      [
        '.babelrc'
      ].forEach(function(file){
        this.fs.copy(
          this.templatePath(templateURL + 'dotfiles/' + file),
          this.destinationPath(file)
        );
      }.bind(this));
    },
    install: function () {
      this.npmInstall();
    }
  }
})