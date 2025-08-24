// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Animate hamburger menu
      const bars = navToggle.querySelectorAll('.bar');
      bars.forEach((bar, index) => {
        if (navMenu.classList.contains('active')) {
          if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
          if (index === 1) bar.style.opacity = '0';
          if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          bar.style.transform = 'none';
          bar.style.opacity = '1';
        }
      });
    });

    // Close mobile menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
          bar.style.transform = 'none';
          bar.style.opacity = '1';
        });
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
          bar.style.transform = 'none';
          bar.style.opacity = '1';
        });
      }
    });
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0s';
      entry.target.style.animationPlayState = 'running';
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    observer.observe(el);
  });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = 'none';
    }
  }
});

// Add loading states to buttons
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      if (!this.classList.contains('btn-secondary')) {
        this.style.pointerEvents = 'none';
        this.innerHTML = '<span>Loading...</span>';
        this.disabled = true;
        
        // Simulate loading (remove this in production)
        setTimeout(() => {
          this.style.pointerEvents = 'auto';
          this.disabled = false;
        }, 1000);
      }
    });
  });
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.interest-card, .post-card, .story-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect if element exists
document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 50);
  }
});
