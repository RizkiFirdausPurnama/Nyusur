document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Memicu animasi 'fade-in' pada kartu-kartu
  document.body.classList.add('loaded');

  
  // 2. Menambahkan efek 'ripple' (riak) pada semua tombol
  const buttons = document.querySelectorAll('.btn-hero, .auth-buttons a');

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      
      let ripple = document.createElement('span');
      ripple.classList.add('ripple');
      
      const oldRipple = this.querySelector('.ripple');
      if (oldRipple) {
        oldRipple.remove();
      }
      
      this.appendChild(ripple);

      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      setTimeout(() => {
        if (ripple) ripple.remove();
      }, 600); 
    });
  });

});