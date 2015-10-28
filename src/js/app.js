'use strict';
import riot from 'riot';
import './components/todo.jade';

class App {
  constructor() {
    riot.mount('*', { title: 'I want to behavior!' });
  }
}

export default new App();