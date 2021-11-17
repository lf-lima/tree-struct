class Tree {
  cargo!: number
  left?: Tree
  right?: Tree

  constructor(obj: Partial<Tree>) {
    Object.assign(this, obj)
  }
}

function printTreeInOrder (tree?: Tree) {
  process.stdout.write(`Print Tree In Order => `)

  const _printTreeInOrder = (_tree?: Tree) => {
    if (!_tree) {
      return
    }
  
    _printTreeInOrder(_tree.left)
    process.stdout.write(` ${_tree.cargo}`)
    _printTreeInOrder(_tree.right)
  }

  _printTreeInOrder(tree)

  console.log('\n')
}


function printTreePreOrder (tree?: Tree) {
  process.stdout.write(`Print Tree Pre Order => `)

  const _printTreePreOrder = (_tree?: Tree) => {
    if (!_tree) {
      return
    }
  
    process.stdout.write(` ${_tree.cargo}`)
    _printTreePreOrder(_tree.left)
    _printTreePreOrder(_tree.right)
  }

  _printTreePreOrder(tree)

  console.log('\n')
}

function printTreePosOrder (tree?: Tree) {
  process.stdout.write(`Print Tree Pos Order => `)

  const _printTreePosOrder = (_tree?: Tree) => {
    if (!_tree) {
      return
    }
  
    _printTreePosOrder(_tree.left)
    _printTreePosOrder(_tree.right)
    process.stdout.write(` ${_tree.cargo}`)
  }

  _printTreePosOrder(tree)

  console.log('\n')
}


function insertInTree (tree: Tree, node: Tree) {
  if (node.cargo < tree.cargo) {
    if (!tree.left) {
      tree.left = node
    } else {
      insertInTree(tree.left, node)
    }
  } else {
    if (!tree.right) {
      tree.right = node
    } else {
      insertInTree(tree.right, node)
    }
  }
}

function findInTree (tree: Tree | undefined, cargo: number): number | undefined {
  const _findInTree = (_tree: Tree | undefined, _cargo: number): number | undefined => {
    if (!_tree) {
      return
    } else if (_cargo === _tree.cargo) {
      return _tree.cargo
    } else if (_cargo < _tree.cargo) {
      return _findInTree(_tree.left, _cargo)
    } else {
      return _findInTree(_tree.right, _cargo)
    }
  }

  const foundCargo = _findInTree(tree, cargo)

  console.log(`Found cargo => ${foundCargo}`)

  return foundCargo
}

function findTheSmallestInTree (tree: Tree | undefined): number | undefined {
  let smallestNode = tree

  while (smallestNode?.left) {
    smallestNode = smallestNode.left
  }

  const smallestCargo = smallestNode?.cargo
  console.log(`Smallest Cargo in Tree => ${smallestCargo}`)

  return smallestCargo
} 

function findTheBiggestInTree (tree: Tree | undefined): number | undefined {
  let biggestNode = tree

  while (biggestNode?.right) {
    biggestNode = biggestNode.right
  }

  const biggestCargo = biggestNode?.cargo
  console.log(`Biggest Cargo in Tree => ${biggestCargo}`)

  return biggestCargo
} 

const tree = new Tree({ cargo: 50 })
insertInTree(tree, new Tree({ cargo: 24 }))
insertInTree(tree, new Tree({ cargo: 42 }))
insertInTree(tree, new Tree({ cargo: 12 }))
insertInTree(tree, new Tree({ cargo: 45 }))
insertInTree(tree, new Tree({ cargo: 21 }))
insertInTree(tree, new Tree({ cargo: 60 }))

printTreeInOrder(tree)

findInTree(tree, 233)

findTheSmallestInTree(tree)
findTheBiggestInTree(tree)