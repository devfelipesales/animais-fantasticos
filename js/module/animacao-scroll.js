// -----------------------------------------------------------------------------------------------------------------
// ANIMAÇÃO SCROLL - À medida for for rolando para baixo, o conteúdo das seções aparecem
// -----------------------------------------------------------------------------------------------------------------

export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  // Retorna aprox. metade da tela
  const metadeAlturaTela = window.innerHeight * 0.6;

  if (sections) {
    function animaScroll() {
      sections.forEach((section) => {
        // Seleciona a distância atual para o topo; OBS: getBoundingClientRect possui as distâncias top, right, bot e left
        // Necessário fazer isso para a seção seguinte aparecer sem precisar chegar ao topo da seção
        // sectionTop < 0 significa que chegou no topo
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - metadeAlturaTela < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        } else if (section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      });
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
