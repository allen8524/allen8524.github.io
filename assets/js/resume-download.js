(function () {
  'use strict';

  const PDF_FILE_NAME = 'Hwang_Minseo_Resume.pdf';
  const PDF_EXPORT_CONTAINER_CLASS = 'pdf-export-container';
  const PDF_EXPORT_ROOT_CLASS = 'pdf-export-root';
  const EXCLUDE_SELECTORS = [
    'header',
    'nav',
    'footer',
    '#scroll-top',
    '#preloader',
    '.header',
    '.navmenu',
    '.social-links',
    '.hero-actions',
    '.action-buttons',
    '.portfolio-filters',
    '.portfolio-actions',
    '.portfolio-overlay',
    '.swiper-navigation-wrapper',
    '.swiper-button-next',
    '.swiper-button-prev',
    '.swiper-pagination',
    '.copy-trigger',
    '.submit-btn',
    '[data-aos]',
    '[data-aos-delay]',
    '[role="button"]',
    '[aria-label="이력서"]',
    '[download="Hwang_Minseo_Resume.pdf"]'
  ];

  let isExporting = false;

  function findResumeButton() {
    return document.querySelector('a[download="Hwang_Minseo_Resume.pdf"], a[aria-label="이력서"], a[title="이력서"], button[aria-label="이력서"]');
  }

  function removeUnwantedNodes(root) {
    EXCLUDE_SELECTORS.forEach((selector) => {
      root.querySelectorAll(selector).forEach((node) => node.remove());
    });

    root.querySelectorAll('script, noscript, iframe, video, audio').forEach((node) => node.remove());
    root.querySelectorAll('*').forEach((node) => {
      node.removeAttribute('id');
      node.removeAttribute('data-aos');
      node.removeAttribute('data-aos-delay');
    });
  }

  function createPdfContentClone() {
    const mainElement = document.querySelector('main');
    if (!mainElement) {
      throw new Error('PDF 생성 대상(main)을 찾을 수 없습니다.');
    }

    const offscreenContainer = document.createElement('div');
    offscreenContainer.className = PDF_EXPORT_CONTAINER_CLASS;

    const rootWrapper = document.createElement('div');
    rootWrapper.className = PDF_EXPORT_ROOT_CLASS;

    const clonedMain = mainElement.cloneNode(true);
    removeUnwantedNodes(clonedMain);

    rootWrapper.appendChild(clonedMain);
    offscreenContainer.appendChild(rootWrapper);
    document.body.appendChild(offscreenContainer);

    return offscreenContainer;
  }

  function waitForImages(container) {
    const images = Array.from(container.querySelectorAll('img'));
    if (images.length === 0) {
      return Promise.resolve();
    }

    const loadPromises = images.map((image) => {
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

    const maxWait = new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });

    return Promise.race([Promise.all(loadPromises), maxWait]);
  }

  function updateButtonState(button, busy) {
    if (!button) {
      return;
    }

    if (busy) {
      button.dataset.originalText = button.textContent;
      button.textContent = 'PDF 생성 중...';
      button.setAttribute('aria-busy', 'true');
      button.classList.add('disabled');
      button.style.pointerEvents = 'none';
      return;
    }

    if (button.dataset.originalText) {
      button.textContent = button.dataset.originalText;
      delete button.dataset.originalText;
    }
    button.removeAttribute('aria-busy');
    button.classList.remove('disabled');
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
    const previousHref = resumeButton ? resumeButton.getAttribute('href') : null;

    isExporting = true;
    updateButtonState(resumeButton, true);

    if (resumeButton && previousHref && previousHref !== '#') {
      resumeButton.setAttribute('href', '#');
    }

    let container;

    try {
      container = createPdfContentClone();
      await waitForImages(container);

      const exportRoot = container.querySelector(`.${PDF_EXPORT_ROOT_CLASS}`);

      const options = {
        margin: [8, 7, 8, 7],
        filename: PDF_FILE_NAME,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          scrollX: 0,
          scrollY: 0,
          windowWidth: exportRoot.scrollWidth
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

      if (resumeButton && previousHref && previousHref !== '#') {
        resumeButton.setAttribute('href', previousHref);
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
