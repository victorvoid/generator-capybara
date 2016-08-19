import angular from 'angular';
import 'angular-mocks';
import {hello} from './hello-world';

describe('hello component', () => {
  beforeEach(() => {
    angular
      .module('capyHello', ['app/hello-world.html'])
      .component('capyHello', hello);
    angular.mock.module('capyHello');
  });
  it('should render hello world', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<capy-hello>Loading...</capy-hello>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
