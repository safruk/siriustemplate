//FORM VALIDATION

//read the form and form input elements via DOM
const form = document.querySelector('.form__main');
const firstName = document.querySelector('.form__firstName');
const lastName = document.querySelector('.form__lastName');
const email = document.querySelector('.form__email');
const password = document.querySelector('.form__password');
const formField = document.querySelectorAll('.form__field');

//Other DOM selections
const sectionHome = document.querySelector('.header');
const sectionAbout = document.querySelector('#section-about');
const sectionFeatures = document.querySelector('#section-features');
const sectionPricing = document.querySelector('#section-pricing');
const sectionForm = document.querySelector('#section-form');
const container = document.querySelector('.container');
const nav = document.querySelector('.nav__container');
const navSep = document.querySelector('.navigation__nav');
const overlay = document.querySelector('.overlay');
const btnScrollTo = document.querySelector('.btn-scroll-to');
const navBtn = document.querySelector('.navigation__button');
const cta = document.querySelectorAll('.cta');

//form handlers
//Submit event handling
function handleSubmit(event) {
  event.preventDefault();

  if (!firstName.checkValidity()) {
    setError(firstName, 'First Name cannot be empty');
  }

  if (!lastName.checkValidity()) {
    setError(lastName, 'Last Name cannot be empty');
  }

  if (!email.checkValidity() && email.value === '') {
    setError(email, 'Email Address cannot be empty');
  } else if (!email.checkValidity()) {
    setError(email, 'Looks like this is not an email');
  }

  //When everything is alright form should be set to validate.
  if (
    firstName.checkValidity() &&
    lastName.checkValidity() &&
    email.checkValidity()
  ) {
    firstName.value = ``;
    lastName.value = ``;
    email.value = ``;

    const emailTo = 'webdevelopmentsirius@gmail.com';
    const emailSub = 'Sirius website enquiry';
    const emailCC = 'safruk18@gmail.com';
    const emailBody = 'Hey Sirius I would love to enquire the following';

    window.open(
      `mailto:${emailTo}?cc=${emailCC}&subject=${emailSub}&body=${emailBody}`,
      '_blank'
    );

    // location.href =
    //   'mailto:' +
    //   emailTo +
    //   '?cc=' +
    //   emailCC +
    //   '&subject=' +
    //   emailSub +
    //   '&body=' +
    //   emailBody;
  }
}

function setError(input, message) {
  let sibling = input.nextElementSibling;
  sibling.classList.add('form__error-msg');
  input.classList.add('form__error');
  sibling.classList.add('form__error-msg');
  sibling.innerHTML = message;

  if (input.value == '') {
    input.classList.add('form__field-clear');
  }
}

//Focus event
function handleFocus(event) {
  let field = event.target;

  field.classList.remove('form__error');
  field.classList.remove('form__error-icon');
  field.nextElementSibling.innerHTML = '';
  field.classList.remove('form__field-clear');
  // console.log(field);
}

//Keypress event for enter key
function handleKeypress(event) {
  let key = event;
  let nextField;
  if ((!key.target.value === '' && key.which === 13) || key.keyCode === 13) {
    nextField = key.target.nextElementSibling.nextElementSibling;

    nextField.focus();
    handleFocus(key);
  }
}

//form handling
//Event Listeners for focus,keypress,and submit events
form.addEventListener('submit', handleSubmit);

firstName.addEventListener('focus', handleFocus);
lastName.addEventListener('focus', handleFocus);
email.addEventListener('focus', handleFocus);
firstName.addEventListener('keypress', handleKeypress);
lastName.addEventListener('keypress', handleKeypress);
email.addEventListener('keypress', handleKeypress);

//Call to action

cta.forEach((ctaBtn) =>
  ctaBtn.addEventListener('click', function (e) {
    sectionForm.scrollIntoView({ behavior: 'smooth' });
  })
);

//navigation bar hamburger button event handling
navBtn.addEventListener('click', function (e) {
  navSep.classList.toggle('navigation__nav--visible');
  overlay.classList.toggle('hidden');
  // container.scrollIntoView({ behavior: 'auto' });
});

//page navigation
document.querySelector('.nav').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('navigation__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    navSep.classList.remove('navigation__nav--visible');
    overlay.classList.add('hidden');
  }
});
overlay.addEventListener('click', function (e) {
  navSep.classList.remove('navigation__nav--visible');
  overlay.classList.add('hidden');
});

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});
headerObserver.observe(header);

//Reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//scroll
btnScrollTo.addEventListener('click', function (e) {
  sectionAbout.scrollIntoView({ behavior: 'smooth' });
});

//Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  let curSlide = 0;
  const maxSlide = slides.length;

  //Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach((dot) => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 101}%)`)
    );
  };
  //Next Slide

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else curSlide++;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();
  //Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    // console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();
