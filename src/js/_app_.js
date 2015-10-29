'use strict';

export default class App {
  static get _Packages() {
    return this._packages || (this._packages = {});
  }

  static get Components() {
    return App._Packages.Components;
  }

  static get Utils() {
    return App._Packages.Utils;
  }

  static get Plugins() {
    return App._Packages.Plugins;
  }

  static run() {
    App.Plugins.Riot.mount('div#background', App.Components.Back);
    App.Plugins.Riot.mount('div#fullpage', App.Components.Main);
    App.Plugins.Riot.mount('div.section--top', App.Components.Top);
    App.Plugins.Riot.mount('div.section--author.comic', App.Components.Comic);
    App.Plugins.Riot.mount('div.section--author.illust', App.Components.Illust);
    App.Plugins.Riot.mount('div.section--info', App.Components.Info);
  }
}
window.App = App;