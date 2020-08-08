---
path: "/[백준 2042번] 구간 합/"
category: "알고리즘"
tags: ["백준", "세그먼트 트리", "구간합"]
title: "[백준 2042번] 구간 합"
date: "2020-07-06T22:06:00.000Z"
summary: "[백준 2042번] 구간 합 문제입니다."
images: ["images/baekjoon.png"]
---

# 세그먼트 트리 (Segment Tree)

---



배열 A가 있고 다음과 같은 두 연산을 수행해야하는 문제를 생각해보자.

**1. 구간 l, r이 주어졌을 때, A[l] + ... A[r] 구해서 출력하기**

**2. i번째 수를 V로 바꾸기. A[i] = v**

수행해야하는 연산은 최대 M번이다.

다른 방법을 사용하지 않고 문제를 푼다면, 1번 연산을 수행하는데 O(N), 2번 연산을 수행하는데 O(1)이 걸린다.

총 시간 복잡도는 O(NM) + O(M) = O(NM)이 나오게된다.



2번 연산이 없다고 생각해보자.

수를 바꾸는 경우가 없기 때문에, 합도 변하지 않는다. 앞에서부터 차례대로 합을 구해놓는 방식으로 문제를 풀 수 있다.

S[i] = A[1] + ... + A[i] 라고 했을 때, i~j까지의 합은 S[j] - S[i-1]이 된다.

여기서 2번 연산을 하려면 수가 바뀔때마다 S를 변경해줘야한다. 가장 앞에있는 0번째 수가 바뀐 경우에는 모든 S배열을 변경해야하기 때문에, 시간복잡도는 O(N)이 걸리게 된다.

따라서, M과 N이 매우 큰 경우에는 시간이 너무 오래 걸리게된다.



## 세그먼트 트리 설명

---



세그먼트 트리를 이용하면, 1번 연산을 O(lgN), 2번 연산도 O(lgN)만에 수행할 수 있다.

세그먼트 트리의 리프 노드와 리프 노드가 아닌 다른 노드는 다음과 같은 의미를 가진다.

`리프 노드` : 배열의 그 수 자체

`다른 노드` : 왼쪽 자식과 오른쪽 자식의 합을 저장함.

어떤 노드의 번호가 `x`일때, 왼쪽 자식의 번호는 `2x`, 오른쪽 자식의 번호는 `2x+1`이 된다.

N=10인 경우 세그먼트 트리는 다음과 같다.

<img src="https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/blog/seg1.png" alt="img" style="zoom:50%;" />



노드의 번호를 그림으로 나타내면 다음과 같다.



<img src="https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/blog/seg2.png" alt="img" style="zoom:50%;" />





만약, N이 2의 제곱꼴인 경우에는 Full Binary Tree이다. 또, 그 때 높이는 lgN이다. 리프 노드가 N개인 Full Binary Tree는 필요한 노드의 개수가 2(N-1)이다.

N이 2의 제곱꼴이 아닌 경우에는 높이가 H=⌈lgN⌉ 이고, 총 세그먼트 트리를 만드는데 필요한 배열의 크기는 2^(H+1) -1 개가 된다.



## 합 구하기

---



구간 left, right가 주어졌을 떄, 합을 찾으려면 루트부터 트리를 순회하면서 각 노드가 담당하는 구간과 left, right 사이의 관계를 살펴봐야 한다.

예를 들어, 0~9까지 합을 구하는 경우는 루트 노드 하나만으로 합을 알 수 있다.

<img src="https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/blog/seg3.png" alt="img" style="zoom:50%;" />





2~4까지의 합을 구하는 경우는 다음과 같다.

<img src="https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/blog/seg4.png" alt="img" style="zoom:50%;" />





5~8까지 합을 구하는 경우는 다음과 같다.

<img src="https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/blog/seg5.png" alt="img" style="zoom:50%;" />



3~9까지 합을 구하는 경우는 다음과 같다.

<img src="https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/blog/seg5.png" alt="img" style="zoom:50%;" />



node가 담당하고 있는 구간이 [start, end]이고, 합을 구해야하는 구간이 [left, right]이라면 다음과 같이 4가지 경우로 나누어질 수 있다.

` [left, right]와 [start, end]가 겹치지 않는 경우`

`[left, right]가 [start, end]를 완전히 포함하는 경우`

` [start, end]가 [left, right]를 완전히 포함하는 경우`

`[left, right]와 [start, end]가 겹쳐져 있는 경우 (1, 2, 3을 제외한 나머지 경우)`



## 수 변경하기

---



중간에 어떤 수를 변경한다면, 그 숫자가 포함된 구간을 담당하는 노드를 모두 변경해줘야 한다.

다음은 3번째 수를 변경할 때, 변경해야 하는 구간을 나타낸다.



<img src="https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/blog/seg7.png" alt="img" style="zoom:50%;" />





다음은 5를 변경할 때이다.



<img src="https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/blog/seg8.png" alt="img" style="zoom:50%;" />





index 번째 수를 val로 변경한다면, 그 수가 얼마만큼 변했는지를 알아야한다. 이 수를 diff라고 하면, diff = val - a[index]로 쉽게 구할 수 있다.

수 변경은 2가지 경우가 있다.

` [start, end]에 index가 포함되는 경우`

` [start, end]에 index가 포함되지 않는 경우`

node의 구간에 포함되는 경우에는 diff만큼 증가시켜 합을 변경해 줄 수 있다. tree[node] = tree[node] + diff 포함되지 않는 경우는 그 자식도 index가 포함되지 않기 때문에, 탐색을 중단해야한다.



```python
import sys
input = sys.stdin.readline
 
# 세그먼트 트리 생성
def init(node, start, end): 
    # node가 leaf 노드인 경우 배열의 원소 값을 반환.
    if start == end :
        tree[node] = l[start]
        return tree[node]
    else :
        # 재귀함수를 이용하여 왼쪽 자식과 오른쪽 자식 트리를 만들고 합을 저장.
        tree[node] = init(node*2, start, (start+end)//2) + init(node*2+1, (start+end)//2+1, end)
        return tree[node]
 
# 구간 합 구하기
# node가 담당하는 구간 [start, end]
# 합을 구해야하는 구간 [left, right]
def subSum(node, start, end, left, right) :
    
    # 겹치지 않기 때문에, 더 이상 탐색을 이어갈 필요가 없다.    
    if left > end or right < start :
        return 0
 
    # 구해야하는 합의 범위는 [left, right]인데, [start, end]는 그 범위에 모두 포함되고
    # 그 node의 자식도 모두 포함되기 때문에 더 이상 호출을 하는 것은 비효율적이다.
    if left <= start and end <= right :
        return tree[node]
 
    # 왼쪽 자식과 오른쪽 자식을 루트로 하는 트리에서 다시 탐색을 시작해야한다.
    return subSum(node*2, start, (start+end)//2, left, right) 
+ subSum(node*2 + 1, (start+end)//2+1, end, left, right)
 
 
def update(node, start, end, index, diff) :
 
    if index < start or index > end :
        return
 
    tree[node] += diff
    
    # 리프 노드가 아닌 경우에는 자식도 변경해줘야 하기 때문에 검사해야함.
    if start != end :
        update(node*2, start, (start+end)//2, index, diff)
        update(node*2+1, (start+end)//2+1, end, index, diff)
 
 
n, m, k = map(int, input().rstrip().split())
 
l = []
tree = [0] * 3000000
 
for _ in range(n) :
    l.append(int(input().rstrip()))
 
init(1, 0, n-1)
 
for _ in range(m+k) :
    a, b, c = map(int, input().rstrip().split())
 
    if a == 1 :
        b = b-1
        diff = c - l[b]
        l[b] = c
        update(1, 0, n-1, b, diff)
    elif a == 2 :                
        print(subSum(1, 0, n-1 ,b-1, c-1))
Colored by Color Scripter
```





출처 : https://www.acmicpc.net/blog/view/9

문제 출처 : https://www.acmicpc.net/problem/2042