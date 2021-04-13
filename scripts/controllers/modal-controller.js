const galleryImages = document.querySelectorAll('.gallery-img');
const modal = document.querySelector('.custom-modal');
const close = document.getElementById('modal-close');
const image = document.getElementById('modal-img');
const caption = document.getElementById('modal-caption');

function showModal(event) {
  const src = event.target.src;
  const alt = event.target.attributes.alt.value;

  modal.classList.add('active');
  image.src = src;
  caption.innerText = alt;
}

galleryImages.forEach((galleryImage) => galleryImage.addEventListener('click', showModal));
close.addEventListener('click', () => modal.classList.remove('active'));

