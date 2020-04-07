export default function accordion() {
  const accordions = document.querySelectorAll('.accordion');

  function toggleAccordion() {
    this.lastElementChild.classList.toggle('accordion__response--visible');
  }

  accordions.forEach(accordion =>
    accordion.addEventListener('click', toggleAccordion)
  );
}


