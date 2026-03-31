/**
* Portfolio site assets
* Base source license: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.closest(".portfolio-details .additional-gallery")) {
        config.autoHeight = true;
        config.observer = true;
        config.observeParents = true;
      }

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Reusable copy actions with a shared toast
   */
  const copyTriggers = document.querySelectorAll('.social-copy-discord, [data-copy-text]');
  let copyToast = null;
  let copyToastHideTimer = null;
  let copyToastCleanupTimer = null;

  function ensureCopyToast() {
    if (copyToast) {
      return copyToast;
    }

    const rootStyles = getComputedStyle(document.documentElement);
    const toastBackground = rootStyles.getPropertyValue('--surface-color').trim() || '#293443';
    const toastText = rootStyles.getPropertyValue('--default-color').trim() || '#f3f4f6';
    const toastAccent = rootStyles.getPropertyValue('--accent-color').trim() || '#22e7a1';

    copyToast = document.createElement('div');
    copyToast.className = 'social-copy-toast';
    copyToast.setAttribute('role', 'status');
    copyToast.setAttribute('aria-live', 'polite');
    copyToast.setAttribute('aria-atomic', 'true');
    copyToast.style.position = 'fixed';
    copyToast.style.left = '50%';
    copyToast.style.bottom = '24px';
    copyToast.style.transform = 'translate(-50%, 12px)';
    copyToast.style.padding = '10px 16px';
    copyToast.style.borderRadius = '999px';
    copyToast.style.maxWidth = 'calc(100vw - 32px)';
    copyToast.style.backgroundColor = toastBackground;
    copyToast.style.border = `1px solid ${toastAccent}`;
    copyToast.style.color = toastText;
    copyToast.style.fontSize = '0.9rem';
    copyToast.style.lineHeight = '1.4';
    copyToast.style.textAlign = 'center';
    copyToast.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.18)';
    copyToast.style.opacity = '0';
    copyToast.style.visibility = 'hidden';
    copyToast.style.pointerEvents = 'none';
    copyToast.style.zIndex = '10000';
    copyToast.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    document.body.appendChild(copyToast);

    return copyToast;
  }

  function showCopyToast(message) {
    const toast = ensureCopyToast();

    clearTimeout(copyToastHideTimer);
    clearTimeout(copyToastCleanupTimer);

    toast.textContent = message;
    toast.style.visibility = 'visible';
    toast.style.opacity = '0';
    toast.style.transform = 'translate(-50%, 12px)';

    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translate(-50%, 0)';
    });

    copyToastHideTimer = window.setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translate(-50%, 12px)';

      copyToastCleanupTimer = window.setTimeout(() => {
        toast.style.visibility = 'hidden';
      }, 220);
    }, 1800);
  }

  async function copyTextToClipboard(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (error) {
        // Fall back to a selection-based copy for restricted environments.
      }
    }

    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    textArea.style.left = '-9999px';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, text.length);

    let isCopied = false;

    try {
      isCopied = document.execCommand('copy');
    } catch (error) {
      isCopied = false;
    }

    document.body.removeChild(textArea);
    return isCopied;
  }

  async function handleCopyAction(trigger) {
    const copyText = trigger?.dataset.copyText || trigger?.dataset.discordId;
    if (!copyText) {
      return;
    }

    const successMessage = trigger?.dataset.copyMessage || '복사되었습니다';
    const errorMessage = trigger?.dataset.copyErrorMessage || '복사에 실패했습니다. 다시 시도해주세요';
    const isCopied = await copyTextToClipboard(copyText);
    showCopyToast(isCopied ? successMessage : errorMessage);
  }

  copyTriggers.forEach((trigger) => {
    const isButtonElement = trigger.tagName === 'BUTTON';

    trigger.addEventListener('click', async function(e) {
      if (!isButtonElement) {
        e.preventDefault();
      }
      await handleCopyAction(this);
    });

    if (!isButtonElement) {
      trigger.addEventListener('keydown', async function(e) {
        if (e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          await handleCopyAction(this);
        }
      });
    }
  });

})();
