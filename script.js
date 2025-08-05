window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  document.querySelector('.leao').style.transform = `translate(-50%) translateX(${scrollY * 0.2}px)`;
  document.querySelector('.onca').style.transform = `translate(-50%) translateX(${scrollY * -0.3}px)`;
  document.querySelector('.gurila').style.transform = `translate(-50%) translateX(${scrollY * 0.2}px)`;
  document.querySelector('.elefante').style.transform = `translate(-50%) translateX(${scrollY * -0.3}px)`;

  document.querySelector('.section-imagem').style.transform = `translate(-50%) translateX(${scrollY * 0.3}px)`;
  document.querySelector('.paragrafo').style.transform = `translate(50%) translateX(${scrollY * -0.3}px)`;
});
