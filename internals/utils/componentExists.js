/**
 * check the component exist or not.
 */

const fs = require('fs');
const path = require('path');
const {properCase} = require('./helpers');

const pageContainers = fs.readdirSync(path.join(__dirname, '../../app/containers'));
const pageComponents = fs.readdirSync(path.join(__dirname, '../../app/components'));

const components = pageContainers.concat(pageComponents);

module.exports = componentExists = (name) => {
  return components.indexOf(properCase(name)) >= 0;
}
