
const printLeaves = (root, result) => {
    if(root == null) return; 

    if(!root.left && !root.right) {
       result += root.val + ',';
       return result;
    }
    if(root.left) result = printLeaves(root.left,result);
    if(root.right)  result = printLeaves(root.right,result);
    return result;
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
  let leaves = printLeaves(root, "");
  console.log(leaves.slice(0, leaves.length - 1));