---
path: "/post-1/"
category: "알고리즘"
tags: ["알고리즘", "다익스트라"]
title: "다익스트라 알고리즘을 공부해보자쌉싸구리"
date: "2018-01-01T00:00:00.000Z"
summary: "다익스트라 알고리즘을 공부해 봅시다..."
images: ["images/1.jpg"]
---

# 다익스트라 알고리즘 공부

```python
import sys
def dijkstra(K, V, graph):
    INF = sys.maxsize
    s = [False] * V
    d = [INF] * V
    d[K - 1] = 0

    while True:
        m = INF
        N = -1

        for j in range(V):
            if not s[j] and m > d[j]:
                m = d[j]
                N = j

        if m == INF:
            break

        s[N] = True

        for j in range(V):
            if s[j]: continue
            via = d[N] + graph[N][j]
            if d[j] > via:
                d[j] = via

    return d

if __name__ == "__main__":
    V, E = map(int, input().split())
    K = int(input())
    INF = sys.maxsize
    graph = [[INF]*V for _ in range(V)]

    for _ in range(E):
        u, v, w = map(int, input().split())
        graph[u-1][v-1] = w

    for d in dijkstra(K, V, graph):
        print(d if d != INF else "INF")
```



