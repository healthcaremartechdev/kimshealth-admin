'use strict';

/**
 * static-text service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::static-text.static-text');
