document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  function setTheme(mode) {
    root.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  }

  // Apply saved theme or default
  const saved = localStorage.getItem('theme') || 'dark';
  setTheme(saved);

  // Wire up clicks
  sunIcon.addEventListener('click', () => setTheme('light'));
  moonIcon.addEventListener('click', () => setTheme('dark'));
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Toggle mobile menu
  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    navLinks.classList.toggle('show');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
      navLinks.classList.remove('show');
    }
  });

  // Close menu when clicking links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu elements
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Typed text elements
  const typedTextSpan = document.querySelector(".typed-text");
  
  // Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Hamburger functionality
  if (hamburger && navLinks) {
    // Toggle menu on click
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      this.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }

  // Typed text effect
  if (typedTextSpan) {
    const texts = ["Working professional", "Backend developer"];
    let index = 0;
    setInterval(() => {
      typedTextSpan.classList.add("fade-out");
      setTimeout(() => {
        index = (index + 1) % texts.length;
        typedTextSpan.textContent = texts[index];
        typedTextSpan.classList.remove("fade-out");
      }, 500);
    }, 2000);
  }

  // Observe elements (add your elements to observe here)
  // document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll')
  .forEach(el => observer.observe(el));

