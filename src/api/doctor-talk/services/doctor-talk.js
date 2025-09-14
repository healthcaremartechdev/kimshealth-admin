'use strict';

/**
 * doctor-talk service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::doctor-talk.doctor-talk');
