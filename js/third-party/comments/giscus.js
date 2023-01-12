/* global NexT, CONFIG */

document.addEventListener('page:loaded', () => {
    if (!CONFIG.page.comments) return;
  
    NexT.utils.loadComments('.giscus-container')
      .then(() => NexT.utils.getScript('https://giscus.app/client.js', {
        attributes: {
          async       : true,
          crossOrigin : 'anonymous',
          'data-repo' : CONFIG.giscus.repo,
          'data-repo-id' : CONFIG.giscus.repo_id,
          'data-category' : CONFIG.giscus.category,
          'data-category-id' : CONFIG.giscus.category_id,
          'data-mapping' : CONFIG.giscus.mapping,
          'data-strict' : CONFIG.giscus.strict,
          'data-reactions-enabled' : '1',
          'data-emit-metadata' : '0',
          'data-input-position' : CONFIG.giscus.input_position,
          'data-theme' : CONFIG.giscus.theme,
          'data-lang' : CONFIG.giscus.language,
          'data-loading' : CONFIG.giscus.loading ? CONFIG.giscus.loading : 'lazy'
        },
        parentNode: document.querySelector('.giscus-container')
      }));
  });
  