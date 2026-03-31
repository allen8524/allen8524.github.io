(function () {
  'use strict';

  const PDF_FILE_NAME = 'Hwang_Minseo_Resume.pdf';
  const PDF_EXPORT_CONTAINER_CLASS = 'pdf-export-container';
  const PDF_EXPORT_ROOT_CLASS = 'pdf-export-root';
  const RESUME_SECTION_IDS = ['about', 'stats', 'skills', 'resume', 'portfolio', 'contact'];
  const EXCLUDE_SELECTORS = [
    'header',
    'nav',
    'footer',
    'aside',
    '#scroll-top',
    '#preloader',
    '.hero-actions',
    '.portfolio-filters',
    '.portfolio-actions',
    '.portfolio-overlay',
    '.swiper-navigation-wrapper',
    '.swiper-button-next',
    '.swiper-button-prev',
    '.swiper-pagination',
    '.form-wrapper',
    '.submit-btn',
    '.copy-trigger',
    '[aria-label="이력서"]',
    '[download="Hwang_Minseo_Resume.pdf"]',
    '[role="button"]',
    '[style*="position:fixed"]',
    '[style*="position: sticky"]'
  ];

  let isExporting = false;

  function findResumeButton() {
    return document.querySelector('a[download="Hwang_Minseo_Resume.pdf"], a[aria-label="이력서"], a[title="이력서"], button[aria-label="이력서"]');
  }

  function getExportSections(mainElement) {
    const selectedSections = RESUME_SECTION_IDS
      .map((sectionId) => mainElement.querySelector(`section#${sectionId}`))
      .filter(Boolean);

    if (selectedSections.length > 0) {
      return selectedSections;
    }

    return Array.from(mainElement.querySelectorAll('section.section'))
      .filter((section) => section.id !== 'hero')
      .slice(0, 6);
  }

  function sanitizeClonedSection(sectionClone) {
    EXCLUDE_SELECTORS.forEach((selector) => {
      sectionClone.querySelectorAll(selector).forEach((node) => node.remove());
    });

    sectionClone.querySelectorAll('script, noscript, iframe, video, audio, form').forEach((node) => node.remove());
    sectionClone.querySelectorAll('[data-aos], [data-aos-delay], [data-aos-duration]').forEach((node) => {
      node.removeAttribute('data-aos');
      node.removeAttribute('data-aos-delay');
      node.removeAttribute('data-aos-duration');
    });

    sectionClone.classList.add('pdf-export-section');
  }

  function createPdfContentClone() {
    const mainElement = document.querySelector('main');
    if (!mainElement) {
      throw new Error('PDF 생성 대상(main)을 찾을 수 없습니다.');
    }

    const sourceSections = getExportSections(mainElement);
    if (sourceSections.length === 0) {
      throw new Error('PDF 생성 대상 섹션을 찾을 수 없습니다.');
    }

    const offscreenContainer = document.createElement('div');
    offscreenContainer.className = PDF_EXPORT_CONTAINER_CLASS;

    const rootWrapper = document.createElement('div');
    rootWrapper.className = PDF_EXPORT_ROOT_CLASS;

    sourceSections.forEach((section) => {
      const sectionClone = section.cloneNode(true);
      sanitizeClonedSection(sectionClone);
      rootWrapper.appendChild(sectionClone);
    });

    offscreenContainer.appendChild(rootWrapper);
    document.body.appendChild(offscreenContainer);

    return offscreenContainer;
  }

  function waitForImages(container) {
    const images = Array.from(container.querySelectorAll('img'));
    if (images.length === 0) {
      return Promise.resolve();
    }

    const imageLoadPromises = images.map((image) => {
      if (image.complete) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        const done = () => {
          image.removeEventListener('load', done);
          image.removeEventListener('error', done);
          resolve();
        };

        image.addEventListener('load', done, { once: true });
        image.addEventListener('error', done, { once: true });
      });
    });

    const timeout = new Promise((resolve) => {
      setTimeout(resolve, 2500);
    });

    return Promise.race([Promise.all(imageLoadPromises), timeout]);
  }

  function waitForNextPaint() {
    return new Promise((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
    });
  }

  function updateButtonState(button, busy) {
    if (!button) {
      return;
    }

    if (busy) {
      button.dataset.originalText = button.textContent;
      button.textContent = 'PDF 생성 중...';
      button.setAttribute('aria-busy', 'true');
      button.setAttribute('aria-disabled', 'true');
      button.style.pointerEvents = 'none';
      return;
    }

    if (button.dataset.originalText) {
      button.textContent = button.dataset.originalText;
      delete button.dataset.originalText;
    }

    button.removeAttribute('aria-busy');
    button.removeAttribute('aria-disabled');
    button.style.pointerEvents = '';
  }

  async function generateResumePdf() {
    if (isExporting) {
      return;
    }

    if (typeof window.html2pdf === 'undefined') {
      console.error('html2pdf 라이브러리를 찾을 수 없습니다.');
      return;
    }

    const resumeButton = findResumeButton();
    let container = null;

    isExporting = true;
    updateButtonState(resumeButton, true);

    try {
      container = createPdfContentClone();
      await waitForImages(container);
      await waitForNextPaint();

      const exportRoot = container.querySelector(`.${PDF_EXPORT_ROOT_CLASS}`);
      const options = {
        margin: [8, 8, 8, 8],
        filename: PDF_FILE_NAME,
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: {
          scale: 1.3,
          useCORS: true,
          backgroundColor: '#ffffff'
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait'
        },
        pagebreak: {
          mode: ['css', 'legacy']
        }
      };

      await window.html2pdf().set(options).from(exportRoot).save();
    } catch (error) {
      console.error('PDF 생성 중 오류가 발생했습니다.', error);
    } finally {
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }

      updateButtonState(resumeButton, false);
      isExporting = false;
    }
  }

  function bindResumeDownload() {
    const resumeButton = findResumeButton();
    if (!resumeButton) {
      return;
    }

    resumeButton.addEventListener('click', function (event) {
      event.preventDefault();
      generateResumePdf();
    });
  }

  document.addEventListener('DOMContentLoaded', bindResumeDownload);
})();
