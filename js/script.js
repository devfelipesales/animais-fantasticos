import AccordionList from './module/accordion.js';
import initAnimaNumeros from './module/anima-numeros.js';
import initAnimacaoScroll from './module/animacao-scroll.js';
import initDropDownMenu from './module/dropdown-menu.js';
import initFetchAnimais from './module/fetch-animais.js';
import initFetchBitcoin from './module/fetch-bitcoin.js';
import initFuncionamento from './module/funcionamento.js';
import initMenuMobile from './module/menu-mobile.js';
import initModal from './module/modal.js';
import initTabNav from './module/navegacao-tab.js';
import ScrollSuave from './module/scroll-suave.js';
import initTooltip from './module/tooltip.js';

// ------------------------------------------------------------------------
// MANIPULAÇÃO DE TABS DOS ANIMAIS
// ------------------------------------------------------------------------
initTabNav();

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
initAnimacaoScroll();
// ------------------------------------------------------------------------
// MODAL - LOGIN
// ------------------------------------------------------------------------
initModal();

// ------------------------------------------------------------------------
// TOOLTIP - Tooltip do mapa -> Não é muito indicado, pois não é otimizado para mobile
// ------------------------------------------------------------------------
initTooltip();

// ------------------------------------------------------------------------
// DROPDOWN MENU
// ------------------------------------------------------------------------
initDropDownMenu();

// ------------------------------------------------------------------------
// MENU MOBILE
// ------------------------------------------------------------------------
initMenuMobile();

// ------------------------------------------------------------------------
// ANIMA NUMEROS
// ------------------------------------------------------------------------

// initAnimaNumeros(); - Movido para dentro da funcão initFetchAnimais(), devido a criação dinâmica das divs. Nesse caso, só executa a função após a criação delas. Necessário colocar dentro da funcão initFetchAnimais() devido ao async await, não bastando mudar a ordem de execução das funções aqui neste script

// ------------------------------------------------------------------------
// HORÁRIO DE FUNCIONAMENTO
// ------------------------------------------------------------------------

initFuncionamento();

// ----------------------------------------------------------------------------------------------
// CRIAÇÃO DINÂMICA DOS FILHOS DA DIV <div class="numeros-grid"> PARA FINS DIDÁTICOS COM FETCH
// -----------------------------------------------------------------------------------------------

initFetchAnimais();

// ----------------------------------------------------------------------------------------------
// Fetch do Bitcoin com Then e não com Await para fins didáticos
// -----------------------------------------------------------------------------------------------

initFetchBitcoin();
