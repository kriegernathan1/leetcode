/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

 const createdNodes = new Map<Node, Node>()

function copyRandomList(head: Node | null): Node | null {
    if(head === null) return null;
    if(createdNodes.has(head)) return createdNodes.get(head)

    const newNode = new Node(head.val)
    createdNodes.set(head, newNode);
    newNode.next = copyRandomList(head.next)
    newNode.random = copyRandomList(head.random)

    return newNode;
};