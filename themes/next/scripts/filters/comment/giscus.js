/* global hexo */

'use strict';

const path = require('path');

// Add comment
hexo.extend.filter.register('theme_inject', injects => {
  const config = hexo.theme.config.giscus;
  if (!config.enable) return;

  if (!config.repo) {
    hexo.log.warn('giscus.repo can\'t be null.');
    return;
  }

  injects.comment.raw('giscus', '<div class="comments giscus-container"></div>', {}, { cache: true });

  injects.bodyEnd.file('giscus', path.join(hexo.theme_dir, 'layout/_third-party/comments/giscus.njk'));

});
