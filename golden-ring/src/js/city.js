import '../scss/style.scss';
import * as menuFunctions from './files/burger.js';
import { initNavigation } from './files/navigation.js';
import { initFooterNavigation } from './files/footerNavigation.js';

menuFunctions.initMenu();
initNavigation();
initFooterNavigation();
