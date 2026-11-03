/**
 * Personal Developer Portfolio & Digital Resume — JavaScript
 * Task: OASIS INFOBYTE SIP — Track: Web Development & Designing (Level 1, Task 2)
 * Features: Dark/Light Mode, Mobile Navigation Drawer, Scroll Spy, Project Filter, Form Validation
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==================== 1. THEME TOGGLE (DARK / LIGHT) ====================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or fallback to user system preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }

  // ==================== 2. MOBILE NAVIGATION DRAWER ====================
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          mobileToggle.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close mobile nav when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ==================== 3. ACTIVE SCROLL SPY ====================
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // ==================== 4. PROJECT CATEGORY FILTER ====================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==================== 5. RESUME DOWNLOAD HANDLER ====================
  const resumeBtn = document.getElementById('resume-download-btn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('📄 Resume Download: Anushree_WebDev_Resume.pdf placeholder triggered! In production, this links to your hosted PDF resume.');
    });
  }

  // ==================== 6. CONTACT FORM VALIDATION ====================
  const contactForm = document.getElementById('portfolio-contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        showError('name-error', true);
        isValid = false;
      } else {
        showError('name-error', false);
      }

      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
        showError('email-error', true);
        isValid = false;
      } else {
        showError('email-error', false);
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        showError('subject-error', true);
        isValid = false;
      } else {
        showError('subject-error', false);
      }

      // Validate Message (min 10 chars)
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showError('message-error', true);
        isValid = false;
      } else {
        showError('message-error', false);
      }

      if (isValid) {
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending message...';

        setTimeout(() => {
          contactForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Send Message</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;

          if (formStatus) {
            formStatus.className = 'form-status-alert success';
            formStatus.textContent = '🎉 Thank you! Your message has been sent successfully. I will get back to you shortly.';
            formStatus.style.display = 'block';

            setTimeout(() => {
              formStatus.style.display = 'none';
            }, 6000);
          }
        }, 800);
      }
    });
  }

  function showError(errorId, isVisible) {
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
      if (isVisible) {
        errorEl.classList.add('visible');
      } else {
        errorEl.classList.remove('visible');
      }
    }
  }
});
