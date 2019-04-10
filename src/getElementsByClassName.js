const getElementsByClassName = (className) => {
  const nodeList = [];
  const recursive = (node) => {
    for (let i = 0; i < node.childNodes.length; i++) {
      const nodes = node.childNodes[i];
      if (nodes.classList && nodes.classList.contains(className)) {
        nodeList.push(nodes);
      }
      recursive(nodes);
    }
  };
  recursive(document);

  return nodeList;
};

module.exports = { getElementsByClassName };
