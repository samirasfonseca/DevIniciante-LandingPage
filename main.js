
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
/*--------------------------*/

  const lista = document.querySelector('.modulo-lista');
  const btnPrev = document.querySelector('.carrossel-btn.prev');
  const btnNext = document.querySelector('.carrossel-btn.next');

  const scrollAmount = 300;

  btnPrev.addEventListener('click', () => {
    lista.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  btnNext.addEventListener('click', () => {
    lista.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  function autoplayCarrossel() {
    const maxScrollLeft = lista.scrollWidth - lista.clientWidth;

    if (Math.ceil(lista.scrollLeft) >= maxScrollLeft) {
      // Volta para o início suavemente
      lista.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      lista.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  let autoplayInterval = setInterval(autoplayCarrossel, 3000);

  lista.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
  lista.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(autoplayCarrossel, 3000);
  });

