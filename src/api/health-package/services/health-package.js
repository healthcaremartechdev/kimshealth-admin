'use strict';

/**
 * health-package service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::health-package.health-package');
