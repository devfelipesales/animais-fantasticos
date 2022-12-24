import ScrollSuave from './module/scroll-suave.js';
import AccordionList from './module/accordion.js';
import TabNav from './module/navegacao-tab.js';
import Modal from './module/modal.js';
import Tooltip from './module/tooltip.js';
import AnimacaoScroll from './module/animacao-scroll.js';
import DropDownMenu from './module/dropdown-menu.js';
import initFetchAnimais from './module/fetch-animais.js';
import initFetchBitcoin from './module/fetch-bitcoin.js';
import Funcionamento from './module/funcionamento.js';
import MenuMobile from './module/menu-mobile.js';
import SlideNav from './module/slide.js';

// ------------------------------------------------------------------------
// MANIPULAÇÃO DE TABS DOS ANIMAIS
// ------------------------------------------------------------------------
const tabNav = new TabNav('.js-tabmenu li', '.js-tabcontent section');
tabNav.init();

// ------------------------------------------------------------------------
// ACCORDION - MANIPULAÇÃO DAS FAQS(setinhas de perguntas e respostas)
// ------------------------------------------------------------------------
const accordionList = new AccordionList('.js-accordion dt');
accordionList.init();

// ------------------------------------------------------------------------
// INÍCIO SCROLL SUAVE - Scroll suave ao clicar nos links internos
// ------------------------------------------------------------------------

const scrollSuave = new ScrollSuave(".js-menu a[href^='#']");
scrollSuave.init();

// -----------------------------------------------------------------------------------------------------------------
// INÍCIO ANIMAÇÃO SCROLL - À medida for for rolando para baixo, o conteúdo das seções aparecem
// -----------------------------------------------------------------------------------------------------------------
const animacaoScroll = new AnimacaoScroll('.js-scroll');
animacaoScroll.init();
// ------------------------------------------------------------------------
// MODAL - LOGIN
// ------------------------------------------------------------------------
const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='container']"
);
modal.init();

// ------------------------------------------------------------------------
// TOOLTIP - Tooltip do mapa -> Não é muito indicado, pois não é otimizado para mobile
// ------------------------------------------------------------------------
const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

// ------------------------------------------------------------------------
// DROPDOWN MENU
// ------------------------------------------------------------------------
const dropDownMenu = new DropDownMenu('[data-dropdown]');
dropDownMenu.init();

// ------------------------------------------------------------------------
// MENU MOBILE
// ------------------------------------------------------------------------
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();
// ------------------------------------------------------------------------
// ANIMA NUMEROS
// ------------------------------------------------------------------------

// initAnimaNumeros(); - Movido para dentro da funcão initFetchAnimais(), devido a criação dinâmica das divs. Nesse caso, só executa a função após a criação delas. Necessário colocar dentro da funcão initFetchAnimais() devido ao async await, não bastando mudar a ordem de execução das funções aqui neste script

// ------------------------------------------------------------------------
// HORÁRIO DE FUNCIONAMENTO
// ------------------------------------------------------------------------

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init();
// ----------------------------------------------------------------------------------------------
// CRIAÇÃO DINÂMICA DOS FILHOS DA DIV <div class="numeros-grid"> PARA FINS DIDÁTICOS COM FETCH
// -----------------------------------------------------------------------------------------------

initFetchAnimais();

// ----------------------------------------------------------------------------------------------
// Fetch do Bitcoin com Then e não com Await para fins didáticos
// -----------------------------------------------------------------------------------------------

initFetchBitcoin();

// ----------------------------------------------------------------------------------------------
// Slide
// -----------------------------------------------------------------------------------------------

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
// slide.addArrow('.prev', '.next'); // sem navegação por arrow
slide.addControl('.custom-controls');
