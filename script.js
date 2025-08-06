window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  document.querySelector('.leao').style.transform = `translate(-50%) translatex(${scrollY * 0.2}px)`;
  document.querySelector('.onca').style.transform = `translate(-50%) translateX(${scrollY * -0.3}px)`;
  document.querySelector('.gurila').style.transform = `translate(-50%) translateX(${scrollY * 0.2}px)`;
  document.querySelector('.elefante').style.transform = `translate(-50%) translateX(${scrollY * -0.3}px)`;
   
  //const imagens = document.querySelectorAll('.section-imagem');
  //const paragrafos = document.querySelectorAll('.paragrafo');

  imagens.forEach((img) => {
    img.style.transform = `translate(-50%) translateX(${scrollY * 0.4}px)`;
  });

  paragrafos.forEach((p) => {
    p.style.transform = `translate(50%) translateX(${scrollY * -0.4}px)`
  });
});


