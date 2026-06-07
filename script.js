const observer = new IntersectionObserver(entries => {
    
  var root = getComputedStyle(document.querySelector(':root'));
  
  entries.forEach(entry => {

      var object;
      let animationName = '';
      object = entry.target;

      if(object.className == 'animateSplatUp')
        animationName = 'animation_splatUp';
      if(object.className == 'animateSplatDown')
        animationName = 'animation_splatDown';

      object.style.setProperty('--animationTime', (Math.random()*0.3) + 0.1 + 's');

      if (entry.isIntersecting)
          object.classList.add(animationName);
      else
          object.classList.remove(animationName);
    });
  });

var observee = document.querySelectorAll('.animateSplatUp');
observee.forEach((o) => { observer.observe(o); })

observee = document.querySelectorAll('.animateSplatDown');
observee.forEach((o) => { observer.observe(o); })