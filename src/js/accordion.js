const accordion = () => {
  const accordions = document.querySelectorAll('.accordion');

  function toggleAccordion() {
    this.lastElementChild.classList.toggle('accordion__response--visible');
  }

  accordions.forEach((el) => el.addEventListener('click', toggleAccordion));
};

export default accordion;
