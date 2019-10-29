const axios = require('axios');

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  const res = await axios.get('https://panjs.com/ywc.json')
  const data = res.data
  const ywcNode = {
    id: 'ywc',
    parent: `__SOURCE__`,
    internal: {
      type: 'YWCData',
      contentDigest: 'ywc'
    },
    children: [],

    navbarItems: data.navbarItems,
    duration: data.duration,
    detail: data.detail,
    condition: data.condition
  }
  createNode(ywcNode)
  return
}
