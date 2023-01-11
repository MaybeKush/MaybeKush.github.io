const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      var object;
      
      if(entry.target.className == 'text-wrapper'){
        object = entry.target.querySelector('p');
        if (entry.isIntersecting)
          object.classList.add('animation_textChunk');
        else
          object.classList.remove('animation_textChunk');
      }
      if(entry.target.className == 'mediumImage-wrapper'){
        object = entry.target.querySelector('img');
        if (entry.isIntersecting)
            object.classList.add('animation_mediumImage');
        else
            object.classList.remove('animation_mediumImage');
      }
      if(entry.target.className == 'portfolioItems-wrapper'){
        object = entry.target.querySelector('.portfolio-item');

        if (entry.isIntersecting)
            object.classList.add('animation_mediumImage');
        else
            object.classList.remove('animation_mediumImage');
      }
      
    });
  });
  var observee = document.querySelectorAll('.text-wrapper');
  observee.forEach((o) => { observer.observe(o); })

  observee = document.querySelectorAll('.mediumImage-wrapper');
  observee.forEach((o) => { observer.observe(o); })

  observee = document.querySelectorAll('.portfolioItems-wrapper');
  observee.forEach((o) => { observer.observe(o); })