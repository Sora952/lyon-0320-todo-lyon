const darkElt = document.getElementById('jourNuit');

darkElt.addEventListener('click', (e) => {
  // const bodyDarkElt = document.getElementById('main');

  const bodyDarkElt = document.getElementsByTagName('main');

  const footerDarkElt = document.getElementsByClassName('footer');

  const headerDarkElt = document.getElementsByTagName('header');

  const footerDarkElt = document.getElementById('footer');

  const headerDarkElt = document.getElementById('header');

  const imgDarkElt = document.getElementById('imgNuit');

  if (darkElt.classList.contains('activeLigth')) {
    imgDarkElt.style.backgroundImage = "url('https://vignette.wikia.nocookie.net/smashbros/images/2/20/Art_Lune_Ultimate.png/revision/latest/scale-to-width-down/340?cb=20180902190235&path-prefix=fr')";

    bodyDarkElt.style.backgroundColor = '#414141';

    footerDarkElt.style.backgroundColor = '#525252';

    headerDarkElt.style.backgroundColor = '#525252';

    darkElt.classList.remove('activeLigth');

    darkElt.classList.add('activeDark');
  } else if (darkElt.classList.contains('activeDark')) {
    imgDarkElt.style.backgroundImage = "url('https://lesaventuresdepetitebete.files.wordpress.com/2012/07/soleil.jpg')";

    bodyDarkElt.style.backgroundColor = '#bac7a7';

    footerDarkElt.style.backgroundColor = '#889e81';

    headerDarkElt.style.backgroundColor = '#889e81';

    darkElt.classList.add('activeLigth');

    darkElt.classList.remove('activeDark');
  }
});

const SLIDER_WIDTH = 4;

const coreUrl = 'https://picsum.photos/300?image=';

const images = [
  `${coreUrl}63`,
  `${coreUrl}46`,
  `${coreUrl}80`,
  `${coreUrl}102`,
  `${coreUrl}19`,
  `${coreUrl}55`,
  `${coreUrl}99`,
  `${coreUrl}29`
];

document.getElementById('leftBtnOpera').addEventListener('mouseup', () => {
  permuteToLeft();

  insertToDom();
});

document.getElementById('rightBtnOpera').addEventListener('mouseup', () => {
  permuteToRight();

  insertToDom();
});

document.getElementById('leftBtnTony').addEventListener('mouseup', () => {
  permuteToLeft();

  insertToDom();
});

document.getElementById('rightBtnTony').addEventListener('mouseup', () => {
  permuteToRight();

  insertToDom();
});

const insertToDom = () => {
  const sliderTony = document.getElementById('sliderTony');

  const sliderOpera = document.getElementById('sliderOpera');

  for (let i = 0; i < SLIDER_WIDTH; i++) {
    sliderTony.getElementsByTagName('img')[i].src = images[i];

    sliderOpera.getElementsByTagName('img')[i].src = images[i];
  }
};

const permuteToLeft = () => {
  const tmp = images[0];

  for (let i = 0; i < images.length - 1; i++) {
    images[i] = images[i + 1];
  }

  images[images.length - 1] = tmp;
};

const permuteToRight = () => {
  const tmp = images[images.length - 1];

  for (let i = images.length - 1; i > 0; i--) {
    images[i] = images[i - 1];
  }

  images[0] = tmp;
};
