---
path: "/[파이썬] itertools 에 대해서 알아보자/"
category: "알고리즘"
tags: ["파이썬", "itertools", "알고리즘"]
title: "[파이썬] itertools 에 대해서 알아보자"
date: "2020-07-15T17:00:00.000Z"
summary: "파이썬으로 순열, 조합을 빠르게 구해주는 라이브러리"
images: ["images/4.jpg"]
---

<!-- # itertools에 대해서 알아보자

## itertools란?

Python 내장 라이브러리인 itertools는 Python에서 제공하는 자신만의 반복자를 만드는 휼륭한 모듈입니다. 특정 배열에 대하여 순열이나 조합을 만들어 이를 이용하는 문제를 풀 때, 직접 구현해도 되지만, 이 itertools를 이용한다면 효율적으로 반복자를 구할 수 있습니다.

라는 설명입니다. 대부분 코테 준비하시는 분들은 순열조합 라이브러리로 쓰셨을 텐데요, 이 설명만으로는 자세히 알기 어려우니 좀 더 예를 볼까요?

```python
import itertools
```

임포트 후 알아봅시다

## 1. 순열, 조합, 중복순열, 데카르트곱

### 1) product()

```python
import itertools

itertools.product('ABCD', repeat=2)
# 결과: AA AB AC AD BA BB BC BD CA CB CC CD DA DB DC DD
```

**인수**: p, q, ... [ 반복 = 1 ]

**결과**: 중첩된 for loop에 해당하는 데카르트의 곱

### 2) permutations()

```python
import itertools

itertools.permutations('ABCD', 2)

# 결과: AB AC AD BA BC BD CA CB CD DA DB DC
```

**인수**: `p \[, r\]`

**결과**: `r` 길이 tuple, 가능한 모든 순서, 반복 X

### 3) combinations()

```python
import itertools

itertools.combinations('ABCD', 2)

# 결과: AB AC AD BC BD CD
```

**인수**: `p`, `r`

**결과**: r 길이 tuple, 정렬된 순서, 반복 X

### 4) combinations_with_replacement()

```python
import itertools

itertools.combinations_with_replacement('ABCD', 2)

# 결과: AA AB AC AD BB BC BD CC CD DD
```

**인수**: `p`, `r`

**결과**: `r` 길이 tuple, 정렬된 순서, 반복 O

| **반복자**                      | **인수**               | **결과**                                 |
| ------------------------------- | ---------------------- | ---------------------------------------- |
| product()                       | p, q, ... [ 반복 = 1 ] | 중첩된 for loop에 해당하는 데카르트의 곱 |
| permutations()                  | p [, r]                | r 길이 tuple, 가능한 모든 순서, 반복 X   |
| combinations()                  | p, r                   | r 길이 tuple, 정렬된 순서, 반복 X        |
| combinations_with_replacement() | p, r                   | r 길이 tuple, 정렬된 순서, 반복 O        |

## 1. chain()

---

```python
letters = ['a', 'b', 'c', 'd', 'e', 'f']
booleans = [1, 0, 1, 0, 0, 1]
decimals = [0.1, 0.7, 0.4, 0.4, 0.5]

print list(itertools.chain(letters, booleans, decimals))


# >> ['a', 'b', 'c', 'd', 'e', 'f', 1, 0, 1, 0, 0, 1, 0.1, 0.7, 0.4, 0.4, 0.5]

```

리스트( lists/tuples/iterables ) 를 연결합니다. chain된 3개의 리스트가 합쳐집니다.

## 2. count()

```python
from itertools import count , izip
for number, letter in izip(count(0, 10), ['a', 'b', 'c', 'd', 'e']):
    print '{0}: {1}'.format(number, letter)


>> 0: a  10: b  20: c  30: d  40: e
```

count 는 반복하고자 하는 최대수를 미리 알지 않아도 되는 경우 사용됩니다. 여기서는 0 에서 시작해서 10씩 5개의 요소에 대해서 필요한 만큼 증가시켜 주고 있네요. 간단하게 말해서 시작과 step 만 있는 range 함수 느낌도 납니다.

## 3. izip

```python
from itertools import izip

print list(izip([1, 2, 3], ['a', 'b', 'c']))

>> [(1, 'a'), (2, 'b'), (3, 'c')]


```

파이썬에서는 이미 요소를 튜플에 결합하는 zip () 함수가 표준 라이브러리에 있으며 거의 같은 방식으로 작동하지만 약간의 성능 향상을 위해 iterable 객체를 반환합니다.

## 4. imap

```python
from itertools import imap

print list(imap(lambda x: x * x, xrange(10)))
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

파이썬에서는 이미 요소를 튜플에 결합하는 map () 함수가 표준 라이브러리에 있으며 거의 같은 방식으로 작동

Python은 Haskell처럼 모든 인자가 지연 평가되는 언어는 아니지만 워낙 모든 함수가 반복자를 주고 받게 되어 있다보니 반복자의 연쇄가 깊게 이뤄진다. 반복자의 연쇄가 깊다는 것은 함수 \*\*호출 스택이 깊어도 맨 끝에서 아래까지 “의도”가 잘 전달된다는 뜻이다.예를 들어 아래의 코드를 보자.

```
odd_numbers_to_10 = itertools.takewhile(lambda i: i <= 10, (x for x in xrange(1000) if x % 2))
```

너무나 작위적인 예제지만, 의도가 깊게 관통하는 코드의 예로서는 읽을만 하다. 결국 최종적으로는 “0 이상 10 이하의 홀수 목록”을 원하는 건데, 최초로 제공되는 소스인 `xrange(1000)`은 10을 초과하는 숫자는 생성하지 않는다. 의도가 잘 전달된다는 것은 이러한 뜻이다. 의도가 전달되지 않는 예를 만드려면 `xrange`를 `range`로 바꾸면 된다

```
odd_numbers_to_10 = itertools.takewhile(lambda i: i <= 10, (x for x in range(1000) if x % 2))
```

이 코드는 최종적으로 얻고자 하는 값이 결국 10 이하의 숫자들뿐임에도 `range(1000)`이 1000개의 수가 담긴 큰 리스트를 만들어내는도록 냅둔다. 공간도 낭비고 시간도 낭비다. 만약 우리가 `xrange(1000)`나 `range(1000)` 자리에 무한개의 숫자를 만들어내는 함수를 넣는다면 결정적인 차이가 발생한다. 만약 그 함수가 반복자를 반환한다면 우리가 처음 `xrange(1000)`을 썼던 코드와 효율에 차이가 없겠지만, 리스트를 만들어낸다면 리스트를 만들다가 메모리가 꽉 차서 뻗고 말 것이다.

## 5. islice

```python
from itertools import islice

for i in islice(range(10), 5):
    print i

>> 결과
>> 0 1 2 3 4
```

[0 ~ 10] 의 반복가능 객체에서 5번째까지만 결과값을 반환하는 기능입니다. 알고리즘에서 사용할 수 있겠습니다.

```python
for i in islice(range(100), 0, 100, 10):
    print i

>> 결과
>> 0 10 20 30 40 50 60 70 80 90
```

islice () 함수는 slice () 함수와 동일하게 작동합니다. 첫 번째 매개 변수는 반복 가능한 객체이고, 두 번째 매개 변수는 시작 색인입니다. 세 번째 매개 변수는 끝 색인입니다. 마지막 매개 변수는 각 반복 후에 건너 뛸 수있는 단계 또는 숫자입니다.

**tee**

```
from itertools import tee
i1, i2, i3 = tee(xrange(10), 3)print i1# <itertools.tee object at 0x2a1fc68>print list(i1)# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]print list(i1)# []print list(i2)# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]print list(i2)# []print list(i3)# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]print list(i3)# []
```

설명:

tee () 함수는 두 개의 매개 변수를 사용합니다. 첫 번째는 반복 가능이며 두 번째는 만들고자하는 복사본 갯수입니다. 예제를 보시다시피 한번 사용된 레퍼런스는 더 이상 값을 참조 하지 않습니다.

```
r = (x for x in range(10) if x < 6)
print r
# <generator object <genexpr> at 0x2a22870>
i1, i2, i3 = tee(r, 3)
print list(r)
# [0, 1, 2, 3, 4, 5]
print list(i1)
# []
print list(i2)
# []
print list(i3)
# []
```

설명:

이렇게 원본의 제네레이터인 r 을 실행시키면 나머지 복제본들도 다 참조가 끊어 지는 특성이 있습니다.

**cycle**

```python
from itertools import cycle , izip
for number, letter in izip(cycle(range(2)), ['a', 'b', 'c', 'd', 'e']):
    print '{0}: {1}'.format(number, letter)
    # 0: a
    # 1: b
    # 0: c
    # 1: d
    # 0: e
```

설명:

순환 가능한 객체에서 요소를 반복적으로 생성합니다. count 는 계속 증가하구요. 둘 모두 함께 계산되어지는 오른쪽 리스트에 따라 한정지어지는 특성을 지녔습니다.

**repeat**

```python
from itertools import repeat
print list(repeat('Hello, world!', 3))
# ['Hello, world!', 'Hello, world!', 'Hello, world!']
```

설명: 요소를 반복합니다. 반복되는 갯수를 지정 합니다.

**dropwhile**

```python
from itertools import dropwhile
print list(dropwhile(lambda x: x < 10, [1, 4, 6, 7, 11, 34, 66, 100, 1]))
# [11, 34, 66, 100, 1]
```

설명: 필터링 함수중 하나로서, 10보다 큰것이 나올 때까지 모든 요소는 드랍시키고 나머지것을 리턴함.

**takewhile**

```python
from itertools import takewhile
print list(takewhile(lambda x: x < 10, [1, 4, 6, 7, 11, 34, 66, 100, 1]))
# [1, 4, 6, 7]
```

설명: 필터링 함수중 하나로서, 10보다 큰 것이 나올때까지의 모든 요소를 리턴함.

## ifilter

```python
from itertools import ifilter
print list(ifilter(lambda x: x < 10, [1, 4, 6, 7, 11, 34, 66, 100, 1]))
# [1, 4, 6, 7, 1]
```

설명: 필터링 함수중 하나로서, 10보다 작은 모든것을 리턴함.

**groupby**

```python
from operator import itemgetter
from itertools import groupby

attempts = [
    ('dan', 87),
    ('erik', 95),
    ('jason', 79),
    ('erik', 97),
    ('dan', 100)
]

# Sort the list by name for groupby
attempts.sort(key=itemgetter(0))

# Create a dictionary such that name: scores_list
print {key: sorted(map(itemgetter(1), value)) for key, value in groupby(attempts, key=itemgetter(0))}
# {'dan': [87, 100], 'jason': [79], 'erik': [95, 97]}
```

key 함수로 itemgetter(0) 를 이용하여 정렬후, 첫번째 요소로 groupby 함. (정렬해야함)

```python
from collections import defaultdict

counts = defaultdict(list)
attempts = [('dan', 87), ('erik', 95), ('jason', 79), ('erik', 97), ('dan', 100)]

for (name, score) in attempts:
    counts[name].append(score)

print counts
# defaultdict(<type 'list'>, {'dan': [87, 100], 'jason': [79], 'erik': [95, 97]})
```

defaultdict 사용합니다. 널값에 대한 체크를 생략할 수 있는 편의 제공. -->
