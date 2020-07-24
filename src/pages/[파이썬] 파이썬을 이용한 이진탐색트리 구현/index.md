---
path: "/[파이썬] 파이썬을 이용한 이진탐색트리 구현/"
category: "알고리즘"
tags: ["파이썬", "알고리즘", "이진탐색트리"]
title: "[파이썬] 파이썬을 이용한 이진탐색트리 구현"
date: "2020-07-06T22:06:00.000Z"
summary: "파이썬을 이용한 이진탐색트리 구현"
images: ["images/1.jpg"]
---

이진 트리(Binary Tree)는 최대 두 개의 자식 노드를 가지는 트리 형태의 자료구조로, 단순히 값을 저장하는 용도보다는 효율적인 탐색 혹은 정렬을 위하여 사용됩니다. 이진 탐색 트리(Binary Search Tree)를 사용하여 주어진 값 혹은 이보다 작거나 큰 값들을 평균 O(logn)의 시간 복잡도로 찾을 수 있으며, 이진 트리의 한 종류인 힙(heap)을 사용한 힙 정렬(heap)은 O(nlogn)의 시간 복잡도를 가집니다.

# 이진 탐색 트리 구현

이진 탐색 트리(Binary Search Tree)는 이진 트리의 특수한 케이스 중 하나입니다. 이진 트리 중 모든 노드에 대해 왼쪽 자식 노드들의 값이 현재 노드 값보다 작거나 같으며, 오른쪽 자식 노드들의 값이 현재 노드의 값보다 크다는 조건을 만족하면 이진 탐색 트리가 됩니다.

아래 그림은 [21, 28, 14, 32, 25, 18, 11, 30, 19, 15]의 순서로 주어진 값을 통해 이진 탐색 트리를 구축하는 과정을 보여줍니다. 맨 처음 입력된 값은 뿌리(Root) 노드이며, 그 다음부터는 입력값과 노드 간의 대소관계에 따라 입력값의 노드 위치가 결정됩니다.

아래 그림은 위와 같이 만든 이진 탐색 트리에서 27을 찾는 과정을 보여줍니다. 이진 탐색 트리(Binary Search Tree)가 정렬된 배열보다 효과적으로 원하는 값을 찾는 것을 확인할 수 있습니다.

## 1. 클래스 정의 및 초기화

---

이진 탐색 트리를 구현하려면, 먼저 Node 클래스를 정의해야 합니다. Node 클래스는 노드값인 self.data와 왼쪽/오른쪽의 노드인 self.left, self.right 총 세 개의 속성을 가집니다. 초기화할 때는 데이터 값만 주어지고 좌우 노드는 비어있습니다.

```python
class Node(object):
	def __init__(self, data):
		self.data = data
		self.left = self.right = None
```

이제 Node 클래스를 사용해 이진 탐색 트리 클래스인 BinarySearchTree를 구현해봅시다. 처음에는 비어 있는 트리로 초기화합니다.

```python
class BinarySearchTree(object):
	def __init__(self):
		self.root = None
```

이제 여기에 원소를 추가, 삭제, 탐색할 수 있도록 insert(), delete(), find() Method를 추가해야합니다.

## 2. 삽입 / Insert Method

---

BinarySearchTree에 insert() Method를 구현하여 트리에 새 원소를 추가할 수 있도록 해봅시다. 재귀를 아용해서 구현하면 간단합니다. 새로 추가할 원소의 값을 현재 노드의 값과 비교하여 왼쪽/오른쪽 중 알맞은 위치로 노드를 옮겨가면서 삽입 위치를 확인합니다.

```python
class BinarySearchTree(object):
	...
    def insert(self, data):
        self.root = self._insert_value(self.root, data)
            return self.root is not None
    def _insert_value(self, node, data):
        if node is None:
            node = Node(data)
        else:
            if data <= node.data:
                node.left = self._insert_value(node.left, data)
            else:
                node.right = self._insert_value(node.right, data)
        return node
```

## 3. 탐색 / Find Method

---

원하는 값의 존재유무를 확인할 수 있도록, find() Method를 구현해봅시다. 이 역시 재귀와 값의 대소관계 비교를 통해 구현할 수 있습니다.

```python
class BinarySearchTree(object):
...
    def find(self, key):
        return self._find_value(self.root, key)
    def _find_value(self, root, key):
        if root is None or root.data == key:
            return root is not None
        elif key < root.data:
            return self._find_value(root.left, key)
        else:
            return self._find_value(root.right, key)
```

## 4. 삭제 / Delete Method

---

삭제는 다른 Method에 비해 비교적 까다롭습니다.

삭제할 Node의 자식이 없으면 문제가 없지만, 자식이 하나인 경우엔 자식 노드를 삭제한 노드 위치로 가져오면 됩니다. 하지만, 삭제할 노드의 자식이 두 개일 때는 어떤 자식 노드를 어떻게 가져와야 할까요?

왼쪽 서브 트리와 오른쪽 서브 트리를 각각 A, B라고 했을 때, B에서 가장 왼쪽 아래에 위치한 자손을 가져온다. 이 원소는 A의 모든 원소들보다는 크면서, B의 나머지 원소보다 작기 때문에 해당 노드를 가져오는 것입니다.

```python
class BinarySearchTree(object):
	...
    def delete(self, key):
        self.root, deleted = self._delete_value(self.root, key)
        return deleted
    def _delete_value(self, node, key):
        if node is None:
            return node, False

        deleted = False
        if key == node.data:
            deleted = True
            if node.left and node.right:
                # replace the node to the leftmost of node.right
                parent, child = node, node.right
                while child.left is not None:
                    parent, child = child, child.left
                child.left = node.left
                if parent != node:
                    parent.left = child.right
                    child.right = node.right
                node = child
            elif node.left or node.right:
                node = node.left or node.right
            else:
                node = None
        elif key < node.data:
            node.left, deleted = self._delete_value(node.left, key)
        else:
            node.right, deleted = self._delete_value(node.right, key)
        return node, deleted
```

이진 트리의 좌우 균형이 맞는다면 탐색, 삽입, 삭제의 시간복잡도가 O(logn)입니다. 그러나 이진 탐색 트리는 정렬된 데이터에는 취약합니다. 오름차순이든 내림차순이든 정렬된 데이터가 입력되면 한 쪽으로 치우친(skewed) 트리가 만들어집니다. 이 때, 최악의 경우 모든 데이터를 살펴야 할 수도 있어 시간복잡도가 O(n)이 됩니다.

## 5. 결과

---

예제를 통해 구현 결과를 `확인`할 수 있습니다.

```python
# array = [40, 4, 34, 45, 14, 55, 48, 13, 15, 49, 47]
bst = BinarySearchTree()
for x in array:
bst.insert(x)

# Find

print(bst.find(15)) # True
print(bst.find(17)) # False

# Delete

print(bst.delete(55)) # True
print(bst.delete(14)) # True
print(bst.delete(11)) # False
```

그럼 트리 안에 어떤 원소들이 담겨 있는 지 어떻게 확인할 수 있을까요?

트리는 그 구조상 저장된 원소들을 하나씩 살펴보기 위해 별도의 순회 알고리즘이 필요합니다. 
