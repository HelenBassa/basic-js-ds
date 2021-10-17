const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    return this.rootTree;
  }

  add(data) {
    // throw new NotImplementedError("Not implemented");
    const newNode = new Node(data);

    this.rootTree === null
      ? (this.rootTree = newNode)
      : this.addNode(this.rootTree, newNode);
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      node.left === null
        ? (node.left = newNode)
        : this.addNode(node.left, newNode);
    } else {
      node.right === null
        ? (node.right = newNode)
        : this.addNode(node.right, newNode);
    }
  }

  has(data) {
    // throw new NotImplementedError("Not implemented");
    return this.find(data) ? true : false;
  }

  find(data) {
    // throw new NotImplementedError("Not implemented");
    return this.findNode(this.rootTree, data);
  }

  findNode(node, data) {
    if (node === null) return null;
    if (node.data === data) return node;
    return data < node.data
      ? this.findNode(node.left, data)
      : this.findNode(node.right, data);
  }

  remove(data) {
    // throw new NotImplementedError("Not implemented");
    this.rootTree = this.removeNode(this.rootTree, data);
  }

  removeNode(node, data) {
    if (node === null) return null;

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    if (node.left === null) {
      node = node.right;
      return node;
    }

    if (node.right === null) {
      node = node.left;
      return node;
    }

    let newNode = this.findMinNode(node.right);
    node.data = newNode.data;

    node.right = this.removeNode(node.right, newNode.data);
    return node;
  }

  findMinNode(node) {
    return node.left === null ? node : this.findMinNode(node.left);
  }

  min() {
    // throw new NotImplementedError("Not implemented");
    let node = this.rootTree;

    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    // throw new NotImplementedError("Not implemented");
    let node = this.rootTree;

    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
};
