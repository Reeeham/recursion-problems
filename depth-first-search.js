const depthFirstSearch = (node, visited, goal) => { 
  if(!node) return false;

  if(node.val == goal) return true;

  node.getNeighbors.forEach((element) => {
    if(!visited.has(element)) {
        visited.add(element);
        let isFound = depthFirstSearch(element, visited, goal);
        if(isFound) return true;
    }
  });
  return false;
};
