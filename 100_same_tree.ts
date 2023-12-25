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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let isSameTree = true

    function DFS(t1: TreeNode, t2: TreeNode) {
        if(t1 === null && t2 === null) return
        if(!t1 || !t2) {
            isSameTree = false
            return
        }

        if(t1.val === t2.val) {
            DFS(t1.left, t2.left)
            DFS(t1.right, t2.right)
        } else {
            isSameTree = false;
            return 
        }
    }

    DFS(p, q);
    return isSameTree
};