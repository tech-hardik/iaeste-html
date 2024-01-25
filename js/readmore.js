document.addEventListener('click', (event) => {
    const current = event.target;
    // Check if clicked element is a read-more button
    if (!current.classList.contains('read-more-btn')) return;
  
    // Find the closest testimonial block from the clicked button
    const testimonialBlock = current.closest('.col-3.testimonial.classic');
  
    // Find the read-more text element within the testimonial block
    const currentText = testimonialBlock.querySelector('.read-more-text');
  
    currentText.classList.toggle('read-more-text--show');
    current.textContent = current.textContent === 'Read More' ? 'Read Less' : 'Read More';
  });
  