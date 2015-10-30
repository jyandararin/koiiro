'use strict';

export default function onLeave(index, next, direction) {
  const self = this;
  const $    = App.Plugins.jQuery;
  const $bg = $('.bg-balloon').find('.balloon__text');
  const sections = {
    AUTHOR_COMIC: $('.section--author.comic').find('li'),
    AUTHOR_ILLUST: $('.section--author.illust').find('li'),
    INFO : $('.section--info').find('#info-wrapper')
  };

  self._createRunningClass = ($selector) => {
    if(!$selector.hasClass('running')) {
      $selector.addClass('running');
    }
  };

  switch(next) {
    case 1:
      $bg.fadeOut(() => $bg.html("&#9829;").fadeIn());
      break;
    case 2:
      $bg.fadeOut(() => $bg.text("Comic").fadeIn());
      self._createRunningClass(sections.AUTHOR_COMIC);
      break;
    case 3:
      $bg.fadeOut(() => $bg.text("Illust").fadeIn());
      self._createRunningClass(sections.AUTHOR_ILLUST);
      break;
    case 4:
      self._createRunningClass(sections.INFO);
      $bg.fadeOut(() => $bg.text("Info").fadeIn());
      break;
    default:
      break;
  }
}