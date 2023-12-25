/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
    let isHeightBalanced = true

    function DFS(node, depth = 0) {
        if(node === null) return depth

        const leftHeight = DFS(node.left)
        const rightHeight = DFS(node.right)

        if(Math.abs(leftHeight - rightHeight) > 1) {
            isHeightBalanced = false
        }

        return Math.max(leftHeight, rightHeight) + 1;
    }

    DFS(root)
    return isHeightBalanced
};