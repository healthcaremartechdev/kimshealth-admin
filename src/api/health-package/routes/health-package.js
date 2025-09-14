'use strict';

/**
 * health-package router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::health-package.health-package');
