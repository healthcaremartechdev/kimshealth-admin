'use strict';

/**
 * health-package controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::health-package.health-package');
