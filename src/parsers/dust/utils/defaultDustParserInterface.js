import defaultParserInterface from '../../utils/defaultParserInterface';
export default {
  ...defaultParserInterface,

  opensByDefault(node, key) {
    return (
      node.type === 'Template' ||
      key === 'body'
    );
  },

};
