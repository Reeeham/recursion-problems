const insert = (root, val) => {
  // if the tree is empty, return a new Node
  let newNode = { val: val, left: null, right: null };
  if (!root) return newNode;

  if (val < root.val) {
    root.left = insert(root.left, val);
  } else {
    root.right = insert(root.right, val);
  }
  return root;
};

const root = {
  val: 100,
  left: {
    val: 80,
    left: {
      val: 50,
      left: { val: 30, left: null, right: null },
      right: { val: 60, left: null, right: null },
    },
    right: {
      val: 90,
      left: { val: 85, left: null, right: null },
      right: { val: 95, left: null, right: null },
    },
  },
  right: {
    val: 120,
    left: { val: 110, left: null, right: { val: 115, left: null, right: null } },
    right: { val: 140, left: null, right: { val: 150, left: null, right: null } }
  },
};

console.log(insert(root, 108));
