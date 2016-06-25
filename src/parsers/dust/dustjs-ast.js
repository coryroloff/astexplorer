import React from 'react'; // eslint-disable-line no-unused-vars
import pkg from 'dustjs-ast/package.json';
import SettingsRenderer from '../utils/SettingsRenderer';
import defaultParserInterface from './utils/defaultDustParserInterface';

const ID = 'dustjs-ast';
const defaultOptions = {};
const parserSettingsConfiguration = {};

export default {
      ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage,
  locationProps: new Set(['loc', 'start', 'end']),

  loadParser(callback) {
	require(['dustjs-ast/dustjs-ast'], callback)
  },

  parse(dust, code) {
	return dust.default.parse(code)
  },

  renderSettings(parserSettings, onChange) {
    return;
  },

  getNodeName(node) {
    return node.type;
  },

  nodeToRange(node) {
    if (node.type) {
        return [node.start, node.end];
    }
  },
};
