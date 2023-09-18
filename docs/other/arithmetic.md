## 打家劫舍

小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。

除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。

给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。
<img src="https://assets.leetcode.com/uploads/2021/03/10/rob1-tree.jpg"/>

输入: root = [3,2,3,null,3,null,1]
输出: 7
解释: 小偷一晚能够盗取的最高金额 3 + 3 + 1 = 7

<img src="https://assets.leetcode.com/uploads/2021/03/10/rob2-tree.jpg" />

输入: root = [3,4,5,1,3,null,1]
输出: 9
解释: 小偷一晚能够盗取的最高金额 4 + 5 = 9

### 解题思路

l 左节点, r 右节点
选中节点 o, 相邻子节点不能计算, `f(o) = g(l) + g(r)`
未选中节点 o,相邻子节点可以加入计算也可以不加入计算 `g(0) = max(f(l), g(l)) + max(f(r), g(r))`

```js
// 第一种算法
const rob = (root) => {
  const f = new Map();
  const g = new Map();
  const dfs = (node) => {
    if (node === null) {
      return
    }
    dfs(node.left);
    dfs(node.right);
    f.set(node, node.val + g.get(node.left) || 0 + g.get(node.right) || 0);
    g.set(node, Math.max(f.get(node.left) || 0, g.get(node.right) || 0) + Math.max(f.get(node.right) || 0, g.get(node.right));
  };
  dfs(root);
  return Math.max(f.get(root), g.get(root))
};

// 优化后算法
const rob = (root) => {
    const dfs = (node) => {
        if (node === null) {
          return [0, 0]
        }
        const l = dfs(node.left)
        const r = dfs(node.right)

        const selected = node.val + l[1] + r[1]
        const unSelected = Math.max(l[0], l[1]) + Math.max(r[0], r[1])
        return [selected, unSelected]
    }
   const rootStatus =  dfs(root)
   return Math.max(rootStatus[0], rootStatus[1])
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function arrayToBinaryTree(nums) {
  if (!nums || nums.length == 0) return null;
  const root = new TreeNode(nums[0]);
  const queue = [root];
  let i = 1;
  while (i < nums.length && queue.length) {
    const current = queue.shift();
    if (nums[i] != null) {
      current.left = new TreeNode(nums[i]);
      queue.push(current.left);
    }
    i++;
    if (nums[i] != null && i < nums.length) {
      current.right = new TreeNode(nums[i]);
      queue.push(current.rigth);
    }
    i++;
  }
  return root;
}

rob(arrayToBinaryTree([3, 2, 3, null, 3, null, 1]));
```
