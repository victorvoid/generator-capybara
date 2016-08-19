export const hello = {
  template: require('./hello-world.html'),
  controller() {
    this.hello = 'Hello World!';
  }
};