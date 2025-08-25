### Experience 1 - Round 1(HTML. CSS, JS) for Frontend Developer

<details>

<summary> 1. You are given a nested tree data structure. Each node has an optional id, an array of classList, and children. Write recursive functions to search nodes by id and by className.</summary>

### Provided dom tree 

Task
- Implement getElementById(root, id)
- Input: root (the root node of the tree), and an id string.
- Output: Return the node object with the matching id, or null if not found.

```
getElementById(bigDomTree, 'main-header')
// ➝ { tag: 'header', id: 'main-header', classList: ['header'], text: 'Welcome' }

```

```ruby
   export interface DomNode {
  tag: string;
  id?: string;
  classList?: string[];
  text?: string;
  children?: DomNode[];
}

const bigDomTree: DomNode = {
  tag: 'div',
  id: 'root',
  classList: ['container'],
  children: [
    {
      tag: 'header',
      id: 'main-header',
      classList: ['header'],
      text: 'Welcome',
    },
    {
      tag: 'section',
      id: 'intro',
      classList: ['content', 'intro'],
      children: [
        {
          tag: 'p',
          classList: ['text'],
          text: 'Intro paragraph',
        },
      ],
    },
    {
      tag: 'section',
      id: 'about',
      classList: ['content'],
      children: [
        {
          tag: 'p',
          classList: ['text'],
          text: 'About us section.',
        },
      ],
    },
    {
      tag: 'div',
      classList: ['footer'],
      children: [
        {
          tag: 'p',
          id: 'footer-note',
          classList: ['note'],
          text: 'All rights reserved.',
        },
      ],
    },
  ],
};
```

#### Recursive getElementById
```
function getElementById(root: DomNode, id: string): DomNode | null {
  if (root.id === id) {
    return root;
  }

  if (root.children) {
    for (const child of root.children) {
      const found = getElementById(child, id);
      if (found) return found;
    }
  }

  return null;
}

// Example usage:
console.log(getElementById(bigDomTree, 'main-header')); 
console.log(getElementById(bigDomTree, 'footer-note'));
```
#### Recursive getElementsByClassName
```
function getElementsByClassName(root: DomNode, className: string): DomNode[] {
  let result: DomNode[] = [];

  // Check if current node has the class
  if (root.classList && root.classList.includes(className)) {
    result.push(root);
  }

  // Recursively check children
  if (root.children) {
    for (const child of root.children) {
      result = result.concat(getElementsByClassName(child, className));
    }
  }

  return result;
}

const nodes = getElementsByClassName(bigDomTree, 'content');
console.log(nodes);

/* Output:
[
  {
    tag: 'section',
    id: 'intro',
    classList: ['content', 'intro'],
    children: [...]
  },
  {
    tag: 'section',
    id: 'about',
    classList: ['content'],
    children: [...]
  }
]
*/

```
</details>


2. Given a list of fruits write the program to Show fruits in a list
IMP: (By HTML, CSS and JS)
- Initially, the fruit list is empty.
- When you type "ap" → shows Apple & Grapes.
- When you clear the input → list disappears again.
- On Click the fruit should get selected
