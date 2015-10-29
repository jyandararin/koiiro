'use strict';
import Back   from './background.jade';
import Main   from './main.jade';
import Top    from './sections/top.jade';
import Comic  from './sections/author_comic.jade';
import Illust from './sections/author_illust.jade';
import Info   from './sections/info.jade';

export default App._Packages.Components = {
  Back  : Back,
  Main  : Main,
  Top   : Top,
  Comic : Comic,
  Illust: Illust,
  Info  : Info
}