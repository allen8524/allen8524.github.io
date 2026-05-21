(function() {
  'use strict';

  function loadTroubleshootingCardStyles() {
    if (document.querySelector('link[href^="assets/css/troubleshooting-cards.css"]')) {
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'assets/css/troubleshooting-cards.css?v=2';
    document.head.appendChild(link);
  }

  loadTroubleshootingCardStyles();

  const BAKERY_SCREENSHOTS = {
    dashboard: 'https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/dashboard.png',
    product: 'https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/product-index.png',
    jangbu: 'https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/jangbu-index.png',
    chart: 'https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/chart.png'
  };

  function setProjectImage(image, src, alt) {
    if (!image || !src) {
      return;
    }

    image.src = src;
    image.alt = alt;

    if (!image.getAttribute('loading')) {
      image.setAttribute('loading', 'lazy');
    }
  }

  function setProjectPreviewLink(link, href, title) {
    if (!link || !href) {
      return;
    }

    link.href = href;

    if (title) {
      link.title = title;
    }
  }

  function findLinkByHrefPart(hrefPart) {
    return Array.from(document.querySelectorAll('a')).find((link) => {
      return link.getAttribute('href') === hrefPart || link.href.endsWith(hrefPart);
    });
  }

  function getText(element, selector) {
    return element?.querySelector(selector)?.textContent.trim() || '';
  }

  function setText(element, selector, value) {
    const target = element?.querySelector(selector);

    if (target) {
      target.textContent = value;
    }
  }

  function applyBakeryScreenshots() {
    const bakeryCard = findLinkByHrefPart('portfolio-bakery.html')?.closest('.portfolio-card');

    if (bakeryCard) {
      setProjectImage(
        bakeryCard.querySelector('.portfolio-image img'),
        BAKERY_SCREENSHOTS.dashboard,
        '베이커리 판매관리 대시보드 화면'
      );
      setProjectPreviewLink(
        bakeryCard.querySelector('.preview-btn'),
        BAKERY_SCREENSHOTS.dashboard,
        '베이커리 판매관리 대시보드 화면'
      );
    }

    const isBakeryDetailPage = document.body.classList.contains('portfolio-details-page') &&
      window.location.pathname.endsWith('portfolio-bakery.html');

    if (!isBakeryDetailPage) {
      return;
    }

    const bakeryHeroImage = Array.from(document.querySelectorAll('.hero-image img')).find((image) => {
      return image.alt.includes('베이커리');
    });
    setProjectImage(bakeryHeroImage, BAKERY_SCREENSHOTS.dashboard, '베이커리 판매관리 대시보드 화면');

    const showcaseImages = document.querySelectorAll('.visual-showcase .gallery-item img');
    setProjectImage(showcaseImages[0], BAKERY_SCREENSHOTS.product, '베이커리 상품 관리 화면');
    setProjectImage(showcaseImages[1], BAKERY_SCREENSHOTS.jangbu, '베이커리 매입 매출 장부 화면');
    setProjectImage(showcaseImages[2], BAKERY_SCREENSHOTS.chart, '베이커리 통계 차트 화면');

    const sliderImages = document.querySelectorAll('.additional-gallery .swiper-slide img');
    setProjectImage(sliderImages[0], BAKERY_SCREENSHOTS.dashboard, '베이커리 판매관리 대시보드 화면');
    setProjectImage(sliderImages[1], BAKERY_SCREENSHOTS.product, '베이커리 상품 관리 화면');
    setProjectImage(sliderImages[2], BAKERY_SCREENSHOTS.jangbu, '베이커리 매입 매출 장부 화면');
    setProjectImage(sliderImages[3], BAKERY_SCREENSHOTS.chart, '베이커리 통계 차트 화면');
  }

  function applyActivityTimelineUpdates() {
    const timeline = document.querySelector('#resume .experience-timeline');

    if (!timeline) {
      return;
    }

    const timelineItems = Array.from(timeline.children).filter((item) => item.classList.contains('timeline-item'));
    const codeAttackItem = timelineItems.find((item) => {
      return getText(item, 'h3') === '인덕대학교 스터디 동아리' && getText(item, 'h4') === 'CS 및 자격증 스터디';
    });

    if (codeAttackItem) {
      setText(codeAttackItem, '.timeline-year', '2025.03 - 2026.09');
      setText(codeAttackItem, 'h3', '인덕대학교 코드어택 스터디 동아리');
      setText(codeAttackItem, 'h4', 'CS 및 자격증 스터디');
      setText(codeAttackItem, 'p', '정보처리산업기사 준비와 함께 자료구조, 운영체제, 네트워크 학습 및 알고리즘 문제 풀이를 이어가고 있습니다.');
    }

    const hasIndevItem = timelineItems.some((item) => getText(item, 'h3') === '인덕대학교 INDEV 프로젝트 동아리');

    if (!hasIndevItem) {
      const indevItem = document.createElement('div');
      indevItem.className = 'timeline-item';
      indevItem.setAttribute('data-aos', 'fade-up');
      indevItem.setAttribute('data-aos-delay', '375');
      indevItem.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="position-meta">
            <span class="timeline-year">2026.05 - 진행 중</span>
          </div>
          <h3>인덕대학교 INDEV 프로젝트 동아리</h3>
          <h4>팀 프로젝트 및 CS</h4>
          <p>AI 기반 소상공인 직원 채용 및 스케줄 관리 플랫폼을 팀 프로젝트 주제로 진행하며, 매출 패턴과 직원 선호도를 반영한 스케줄 자동 생성, 구인 공고 자동 작성, 인건비 시뮬레이션 기능을 기획·구현합니다.</p>
        </div>
      `;

      if (codeAttackItem?.nextSibling) {
        timeline.insertBefore(indevItem, codeAttackItem.nextSibling);
      } else if (codeAttackItem) {
        timeline.appendChild(indevItem);
      }
    }

    const heroStudyStat = Array.from(document.querySelectorAll('.hero-stats .stat-item')).find((item) => {
      return getText(item, '.stat-label').includes('학내 스터디 활동');
    });

    if (heroStudyStat) {
      setText(heroStudyStat, '.stat-number', '3');
      setText(heroStudyStat, '.stat-label', '학내 활동');
    }
  }

  function setListItemContent(listItem, label, text) {
    if (!listItem) {
      return;
    }

    listItem.innerHTML = `<span>${label}</span><p>${text}</p>`;
  }

  function setPipelineItems(container, items) {
    if (!container) {
      return;
    }

    container.innerHTML = items.map((item) => `<span><code>${item}</code></span>`).join('');
  }

  function setTagItems(container, items) {
    if (!container) {
      return;
    }

    container.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
  }

  function applyTroubleshootingCineFlowUpdates() {
    const stage = document.querySelector('#testimonials .trouble-stage');
    const moviePanel = document.querySelector('#trouble-panel-movie, #trouble-panel-cineflow');

    if (!stage || !moviePanel) {
      return;
    }

    const movieTab = document.querySelector('#trouble-tab-movie, #trouble-tab-cineflow');

    if (movieTab) {
      movieTab.id = 'trouble-tab-cineflow';
      movieTab.setAttribute('data-bs-target', '#trouble-panel-cineflow');
      movieTab.setAttribute('aria-controls', 'trouble-panel-cineflow');
      setText(movieTab, '.trouble-nav-label', 'CineFlow');
      setText(movieTab, '.trouble-nav-keyword', '예매 상태 정합성');
      setText(movieTab, '.trouble-nav-stack', 'Spring Boot · JPA · Security · MySQL');
    }

    moviePanel.id = 'trouble-panel-cineflow';
    moviePanel.setAttribute('aria-labelledby', 'trouble-tab-cineflow');

    setText(moviePanel, '.trouble-case-stack', 'Java · Spring Boot · Thymeleaf · JPA · Security');
    setText(moviePanel, '.trouble-case h3', 'CineFlow 영화 예매 관리 시스템');
    setText(
      moviePanel,
      '.trouble-case-head p:not(.trouble-case-stack)',
      '상영 일정, 좌석 선택, 결제, 예매 조회가 같은 예매 상태 기준으로 이어지도록 조정한 사례입니다.'
    );

    const flowItems = moviePanel.querySelectorAll('.trouble-flow li');
    setListItemContent(flowItems[0], '문제 상황', '상영 일정 선택 후 좌석·결제 단계로 이동할 때 선택값이 분리되어 예매 완료와 조회 화면의 상태 기준이 흔들릴 수 있었습니다.');
    setListItemContent(flowItems[1], '원인 분석', '영화, 상영 일정, 좌석, 결제 정보가 단계별 파라미터로 전달되어 저장 전후 기준 데이터가 명확히 묶이지 않았습니다.');
    setListItemContent(flowItems[2], '수정 방향', '<code>BookingController</code>와 <code>BookingService</code>에서 상영 일정과 좌석 정보를 예매 엔티티 기준으로 묶고, 완료·조회·취소 흐름이 같은 <code>bookingId</code> 상태를 참조하도록 정리했습니다.');
    setListItemContent(flowItems[3], '결과', '사용자 예매 완료, 회원·비회원 조회, 관리자 예매 관리가 같은 예매 상태를 기준으로 확인되도록 개선했습니다.');

    setText(moviePanel, '.trouble-evidence h4', '근거 & 처리 흐름');
    setText(
      moviePanel,
      '.trouble-evidence-note',
      '예매 생성 이후 조회와 취소가 같은 예약 식별자와 상태값을 참조하도록 흐름을 맞췄습니다.'
    );
    setPipelineItems(moviePanel.querySelector('.trouble-pipeline'), ['BookingController', 'BookingService', 'Booking', 'bookingId']);
    setTagItems(moviePanel.querySelector('.trouble-tags'), ['예매 상태 연결', '좌석 선택 기준 유지', '조회·취소 흐름 일치']);

    stage.insertBefore(moviePanel, stage.firstElementChild);
  }

  function initializeHeaderToggle() {
    const headerToggleBtn = document.querySelector('.header-toggle');
    const header = document.querySelector('#header');

    if (!headerToggleBtn || !header) {
      return;
    }

    function headerToggle() {
      header.classList.toggle('header-show');
      headerToggleBtn.classList.toggle('bi-list');
      headerToggleBtn.classList.toggle('bi-x');
    }

    headerToggleBtn.addEventListener('click', headerToggle);

    document.querySelectorAll('#navmenu a').forEach((navmenu) => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.header-show')) {
          headerToggle();
        }
      });
    });
  }

  function initializeDropdowns() {
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach((navmenu) => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });
  }

  function initializePreloader() {
    const preloader = document.querySelector('#preloader');

    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  }

  function initializeScrollTop() {
    const scrollTop = document.querySelector('.scroll-top');

    if (!scrollTop) {
      return;
    }

    function toggleScrollTop() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }

    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  }

  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }

  function initializeCounters() {
    if (typeof PureCounter !== 'undefined') {
      new PureCounter();
    }
  }

  function initializeSkillsAnimation() {
    if (typeof Waypoint === 'undefined') {
      return;
    }

    document.querySelectorAll('.skills-animation').forEach((item) => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function() {
          item.querySelectorAll('.progress .progress-bar').forEach((el) => {
            el.style.width = `${el.getAttribute('aria-valuenow')}%`;
          });
        }
      });
    });
  }

  function initializeGlightbox() {
    if (typeof GLightbox !== 'undefined') {
      GLightbox({ selector: '.glightbox' });
    }
  }

  function initializeIsotope() {
    if (typeof imagesLoaded === 'undefined' || typeof Isotope === 'undefined') {
      return;
    }

    document.querySelectorAll('.isotope-layout').forEach((isotopeItem) => {
      const layout = isotopeItem.getAttribute('data-layout') || 'masonry';
      const filter = isotopeItem.getAttribute('data-default-filter') || '*';
      const sort = isotopeItem.getAttribute('data-sort') || 'original-order';
      const container = isotopeItem.querySelector('.isotope-container');

      if (!container) {
        return;
      }

      let initIsotope = null;

      imagesLoaded(container, () => {
        initIsotope = new Isotope(container, {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter,
          sortBy: sort
        });
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach((filters) => {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active')?.classList.remove('filter-active');
          this.classList.add('filter-active');

          if (initIsotope) {
            initIsotope.arrange({ filter: this.getAttribute('data-filter') });
          }

          aosInit();
        }, false);
      });
    });
  }

  function initSwiperWithCustomPagination(swiperElement, config) {
    new Swiper(swiperElement, config);
  }

  function initializeSwiper() {
    if (typeof Swiper === 'undefined') {
      return;
    }

    document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
      const configElement = swiperElement.querySelector('.swiper-config');

      if (!configElement) {
        return;
      }

      const config = JSON.parse(configElement.innerHTML.trim());

      if (swiperElement.closest('.portfolio-details .additional-gallery')) {
        config.autoHeight = true;
        config.observer = true;
        config.observeParents = true;
      }

      if (swiperElement.classList.contains('swiper-tab')) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  function initializeHashScroll() {
    window.addEventListener('load', () => {
      if (!window.location.hash) {
        return;
      }

      const section = document.querySelector(window.location.hash);

      if (!section) {
        return;
      }

      setTimeout(() => {
        const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop, 10),
          behavior: 'smooth'
        });
      }, 100);
    });
  }

  function initializeNavScrollspy() {
    const navmenulinks = document.querySelectorAll('.navmenu a');

    function navmenuScrollspy() {
      navmenulinks.forEach((navmenulink) => {
        if (!navmenulink.hash) {
          return;
        }

        const section = document.querySelector(navmenulink.hash);

        if (!section) {
          return;
        }

        const position = window.scrollY + 200;

        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          document.querySelectorAll('.navmenu a.active').forEach((link) => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      });
    }

    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);
  }

  function initializeCopyActions() {
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
          // Fall back to selection-based copy.
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
  }

  applyBakeryScreenshots();
  applyActivityTimelineUpdates();
  applyTroubleshootingCineFlowUpdates();
  initializeHeaderToggle();
  initializeDropdowns();
  initializePreloader();
  initializeScrollTop();
  window.addEventListener('load', aosInit);
  window.addEventListener('load', initializeSwiper);
  initializeCounters();
  initializeSkillsAnimation();
  initializeGlightbox();
  initializeIsotope();
  initializeHashScroll();
  initializeNavScrollspy();
  initializeCopyActions();
})();
