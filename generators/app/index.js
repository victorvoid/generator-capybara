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
      type: 'confirm',
      name: 'includeAngular',
      message: 'Would you like to include Angular?',
      default: true
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
        this.templatePath(templateURL+'_package.json'),
        this.destinationPath('package.json'),
        {
          includeAngular: this.props.includeAngular
        }
      );
    },

    tasks: function () {
      [
        'dev.js',
        'prod.js'
      ].forEach(function (filePath) {
        this.fs.copyTpl(
          this.templatePath(templateURL+'task/' + filePath),
          this.destinationPath('task/' + filePath),
          {
            includeAngular: this.props.includeAngular
          }
        );
      }.bind(this));

      if (!this.props.includeAngular) {
        this.fs.copy(
          this.templatePath(templateURL+'task/test.js'),
          this.destinationPath('task/test.js')
        );
      }

      this.fs.copyTpl(
        this.templatePath(templateURL+'gulpfile.babel.js'),
        this.destinationPath('gulpfile.babel.js'),
        {
          name: this.pkg.name,
          version: this.pkg.version,
          includeAngular: this.props.includeAngular
        }
      );
    },
    markup: function () {
      var layoutPath;

      if (this.props.includeAngular) {
        layoutPath = 'app/index.html';
      } else {
        layoutPath = 'app/layouts/default.html';

        this.fs.copy(
          this.templatePath(templateURL+'views/index.html'),
          this.destinationPath('app/views/index.html')
        );
      }

      this.fs.copyTpl(
        this.templatePath(templateURL+'index.html'),
        this.destinationPath(layoutPath),
        {
          includeAngular: this.props.includeAngular
        }
      );
    },

    scripts: function () {
      [
        'helpers/fetch.js',
        'fonts.js'
      ].forEach(function (file) {
        this.fs.copy(
          this.templatePath(templateURL+'scripts/' + file),
          this.destinationPath('app/scripts/' + file)
        );
      }.bind(this));

      if (this.props.includeAngular) {
        [
          'components/icon.jsx',
          'app.jsx'
        ].forEach(function (file) {
          this.fs.copy(
            this.templatePath(templateURL+'scripts/' + file),
            this.destinationPath('app/scripts/' + file)
          );
        }.bind(this));
      } else {
        this.fs.copy(
          this.templatePath(templateURL+'scripts/app.js'),
          this.destinationPath('app/scripts/app.js')
        );
      }
    },

    styles: function () {
      [
       'base/_forms.styl',
       'base/_global-classes.styl',
       'base/_headings.styl',
       'base/_media.styl',
       'generic/_reset.styl',
       'generic/_mixins.styl',
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
          includeAngular: this.props.includeAngular
        }
      );
    },

    svg: function () {
      this.fs.copy(
        this.templatePath(templateURL+'images/icons.svg'),
        this.destinationPath('app/images/icons.svg')
      );
    },

    test: function () {
      var files;

      if (this.props.includeAngular) {
        files = [
          'test/mocha.opts',
          'test/helpers/common.js',
          'test/spec/document.js',
          'test/spec/test.jsx'
        ];
      } else {
        files = [
          'test/fixtures/index.html',
          'test/spec/test.js'
        ];
      }

      files.forEach(function (file) {
        this.fs.copy(
          this.templatePath(templateURL+''+file),
          this.destinationPath(file)
        );
      }.bind(this));
    },

    loaders: function () {
       if (this.props.includeAngular) {
        this.fs.copy(
          this.templatePath(templateURL+'scripts/components/loader.jsx'),
          this.destinationPath('app/scripts/components/loader.jsx')
        );
      }
    },

    dotfiles: function () {
      [
        'travis.yml',
        'babelrc',
        'eslintrc',
        'eslintignore',
        'editorconfig',
        'gitignore'
      ].forEach(function (file) {
        this.fs.copyTpl(
          this.templatePath(templateURL+''+file),
          this.destinationPath('.' + file),
          {
            includeAngular: this.props.includeAngular
          }
        );
      }.bind(this));
    }
  },

  install: function () {
    this.npmInstall();
  }
});