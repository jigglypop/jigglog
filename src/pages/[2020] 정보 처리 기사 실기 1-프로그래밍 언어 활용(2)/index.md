---
path: "/[2020] 정보 처리 기사 실기 1-프로그래밍 언어 활용(2)/"
category: "정보처리기사 실기 요약"
tags: ["정보처리기사 실기", "정보처리기사", "정처기"]
title: "[2020] 정보 처리 기사 실기 1-프로그래밍 언어 활용(2)"
date: "2020-07-18T22:21:00.000Z"
summary: "2020 정보 처리 기사 프로그래밍 언어 활용 요약 입니다. 정처기 공부를 할 때 활용하세요."
images: ["images/1.jpg"]
---

> 정보처리기사 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 책을 참고해서 공부하세요

> 2020 정보 처리 기사 프로그래밍 언어 활용 요약 입니다. 정처기 공부를 할 때 활용하세요.

# 1. for문

---

- 초기값, 최종값, 증가값을 지정하는 수식을 이용해 정해진 횟수를 반복하는 제어문
- 초기값을 정한 다음 최종값에 대한 조건이 참이면 실행할 문장을 실행한 후 초기값을 증가값 만큼 증가시키면서 최종값 에 대한 조건이 참인 동안 실행할 문장을 반복 수행

```c
#include <stdio.h>
main() {
	int i, j;
    for (i = 2; i <= 4; i++) {
    	for (j = 5; j <= 7; j++) {
    	}
    }
    printf("%d × %d = %d", j, i, i * j);
}

// 8 x 5 = 40
```

# 2. while문

---

- `while` : 조건이 참인 동안 실행할 문장을 반복 수행하는 제어문

  - while 문은 조건이 참인동안 실행할 문장을 반복 수행하다가 조건이 거짓이면 while문을 끝낸 후 다음 코드를 실행
  - while 문은 조건이 처음부터 거짓이면 한 번도 수행하지 않음

- `do / while` : 실행할 문장을 무조건 한 번 실행한 다음 조건을 판단하여 탈출 여부를 결정

  - do/while 문은 실행할 문장을 우선 실행한 후 조건을 판별하여 조건이 참이면 실행할 문장을 계속 반복 수행, 거짓이면 do/while 문을 끝낸 후 다음 코드를 실행

- `break / continue`
  - switch문이나 반복문의 실행을 제어하기 위해 사용되는 예약어
  - _break_ : switch문이나 반복문 안에서 break가 나오면 블록을 벗어남
  - _continue_ : continue 이후의 문장을 실행하지 않고 제어를 반복문의 처음으로 옮김

```c
#include <stdio.h>

int main() {
	int x = 100, y = 10;
  do {
  x -= y;
      printf("%d, %d\n", x, y++);
	}
  while (x > 30);
}
// 25, 15
```

# 3. 배열과 문자열

---

- `배열` : 동일한 데이터 유형을 여러 개 사용해야 할 경우 이를 손쉽게 처리하기 위해 여러 개의 변수들을 조합해서 하나의 이름으로 정의해 사용하는 것
  - 배열은 변수명 뒤에 대괄호 [ ]를 붙이고 그 안에 사용할 개수를 지정
  - C언어에서 배열의 위치는 0부터 시작
  - C언어에서 배열 위치를 나타내는 첨자 없이 배열 이름을 사용하면 배열의 첫 번째 요소의 주소를 지정하는 것과 같음
- 1차원 배열 : 변수들을 일직선상의 개념으로 조합한 배열(`int a[5]`)
- 2차원 배열 : 변수들을 평면, 즉 행과 열로 조합한 배열(`int b[3][3]`)
- 배열 형태의 문자열 변수
  - C언어에서는 큰따옴표(" ")로 묶인 글자는 글자 수에 관계없이 문자열로 처리
  - C언어에는 문자열을 저장하는 자료형이 없기 때문에 배열 또는 포인터를 이용하여 처리
  - char a[5] = "hello"
  - 배열에 문자열을 저장할 때는 배열 선언 시 초기값으로 지정해야 하며, 이미 선언된 배열에는 문자열을 저장할 수 없음
  - 문자열 끝에 자동으로 널 문자("\0")가 삽입되므로, 널 문자까지 고려하여 배열 크기를 지정해야 함

```c
#include <stdio.h>
int main() {
	int exint[] = { 4,9,3,7,6,4,24,4,8,4,10 };
	int len = sizeof(exint) / sizeof(int);
    int value = 0;
	for (int i = 0; i < len; i++) {
        if (exint[i] == 4) {
			value++;
		}
	}
	printf("%d", value);
}

// 4
```

# 4. Java에서의 배열과 문자열

---

- Java에서는 향상된 for문을 사용할 수 있는데, 향상된 for문은 객체를 대상으로만 가능

```java
public class Example {
	public static void main(String[ ] args) {
        int[ ] a = {90,100,80,70,60,50,30};
        int hap = 0;
        float avg;
        for (int i : a)
            hap = hap + i;
        avg = (float)hap / a.length;
        System.out.printf("%d, %.2f", hap, avg);
	}
}

// 480, 68.57
```

```java
public class Example {
    public static void main(String[ ] args){
    	String str = "Information!";
    	int n = str.length( );
    	char[ ] st = new char [n];
    	n--;
    	for (int k = n; k >= 0; k--) {
    		st[n-k] = str.charAt(k);
    	}
    	for (char k : st) {
    		System.out.printf("%c", k);
    	}
    }
}

// !noitamrofiI
```

- 1회 기사 실기

```java
public class Test {
    static int[] arr() {
        int a[] = new int[4];
        int b = a.length;
        for(int i = 0; i < b; i++) a[i] = i;
        return a;
    }

    public static void main(String[ ] args) {
        int a[] = arr();
        for(int i = 0; i < a.length; i++)
            System.out.print(a[i] + " ");
        }
    }
}
// 0 1 2 3
```

# 5. 포인터

---

- 포인터와 포인터 변수

  - 포인터는 변수의 주소를 말하며, C언어에서는 주소를 제어할 수 있는 기능을 제공
  - 포인터 변수 : C언어에서 변수의 주소를 저장할 때 사용하는 변수
  - 포인터 변수를 선언할 때는 자료의 형을 먼저 쓰고 변수명 앞에 간접 연산자 *를 붙임(int *a;).
  - 연산자 & : 포인터 변수에 주소를 저장하기 위해 변수의 주소를 알아낼 때(a = &b;)
  - 연산자 * : 해당 포인터 변수가 가리키는 곳의 값(c = *a;)

- 포인터와 배열
  - 배열을 포인터 변수에 저장한 후 포인터를 이용해 배열의 요소에 접근할 수 있음
  - 배열 위치를 나타내는 첨자를 생략하고 배열의 대표명만 지정하면 배열의 첫 번째 요소의 주소를 지정하는 것과 같음

```c
int a[5], *b;

// b = a → 배열의 대표명을 적었으므로 a 배열의 시작 주소인 a[0]의 주소를 b에 저장
// b = &a[0] → a 배열의 첫 번째 요소인 a[0]의 주소(&)를 b에 저장
```

```c
#include <stdio.h>

int main( )
{
    int a = 50;
    int *b;
    b = &a;
    *b = *b+20;
    printf("%d, %d", a, *b);
}
// 70, 70
```

```c
#include <stdio.h>
main() {
	int a[5], b = 1, sum = 0;
    for (int i = 4; i > -1; i--) {
    	a[i] = b;
        b *= 3;
    }
    // int a[5] = {81,27,9,3,1}
	for (int i = 4; i > -1; i -= 2) sum += *(a + i);
	printf("%d", sum);
}
// 91
```

# 6. 사용자 정의 함수

---

- _사용자가 필요한 기능을 취향대로 만들어 사용할 수 있는 함수_

- _실기 기출_

```c
#include <stdio.h>

void align(int a[]) {
	int temp;
	for (int i = 0; i < 4; i++)
		for (int j = 0; j < 4 - i; j++)
        if (a[j] > a[j+1]) {
				  temp = a[j];
          a[j] = a[j+1];
				  a[j+1] = temp;
        }
			}
		}
}

int main() {
	int a[] = { 85, 75, 50, 100, 95 };
	align(a);
	for (int i = 0; i < 5; i++)
    printf("%d ", a[i]);
}
// 50 75 85 95 100
```

# 7. 재귀 함수

---

- _자기가 자기를 호출하는 순환 프로그램_

- _팩토리얼(Factorial)_

```c
#include <stdio.h>

factorial(int n) {
    if ( n <= 1 )
		  return 1;
   	else
		  return n * factorial(n-1);
}

int main( )
{
	printf("%d", factorial(5));
  return 0;
}
// 120
```

- _기능사 기출_

```c
#include <stdio.h>
hrd(num) {
	if (num <= 0)
		return;
  printf(“%d ”, num);
  hrd(num-1);
}
int main( ) {
	hrd(5);
  return 0;
}
// 5 4 3 2 1
```

# 8. Java의 클래스와 메소드

---

- _클래스는 객체 생성을 위한 필드(속성)와 메소드(함수)를 정의하는 설계도로, Java는 아무리 작은 프로그램이라도 클래스를 만들어서 사용해야 함_

- 두 수 교환

```java
public class Example {
    static class AAclass {
    	int i;
      int j;
    }
    public static void main(String[ ] args) {
      AAclass myVal = new AAclass( );
      myVal.i = 10;
      myVal.j = 20;
      myVal = change(myVal);
      System.out.printf("i=%d, j=%d\n", myVal.i, myVal.j);
    }
    static AAclass change(AAclass myVal) {
      int temp;
      temp = myVal.i;
      myVal.i = myVal.j;
      myVal.j = temp;
      return myVal;
    }
}
```

- 예제 1

```java
public class Test {
    static int power(int data, int exp) {
        int i, result = 1;
        for(i = 0; i < exp; i++) result = result * data;
        return result;
    }
    public static void main(String args[]) {
        System.out.print(power(2, 10));
    }
}
// 1024(2의 10승)
```

# 9. Python의 기초

---

- `input` : _Python의 표준 입력 함수로, 키보드로 입력받아 변수에 저장하는 함수_. 입력되는 값은 문자열로 취급되어 저장
- `print` : Python의 표준 출력 함수로, 값을 화면에 출력하는 함수
- `리스트(List)` : Python에서는 배열 대신 리스트를 사용
- `range` : 연속된 숫자를 생성하는 것으로, 리스트, 반복문 등에서 많이 사용
- `슬라이스(Slice)` : 문자열이나 리스트와 같은 순차형 객체에서 일부를 잘라(slicing) 반환하는 기능

```python
# 입력
# abcde // fghij
# 13

x = input().split('//')
y = int(input())
val = list(range(0, y, 3))
# [0, 3, 6, 9, 12 ]
val.remove(6)
print(x[1].find('i') + val[2])

# 12
```

# 10. 라이브러리

---

- _라이브러리_ : 프로그램을 효율적으로 개발할 수 있도록 자주 사용하는 함수나 데이터들을 미리 만들어 모아 놓은 집합체
- _표준 라이브러리_ : 프로그래밍 언어에 기본적으로 포함되어 있는 라이브러리로, 여러 종류의 모듈이나 패키지 형태
- _외부 라이브러리_ : 개발자들이 필요한 기능들을 만들어 인터넷 등에 공유해 놓은 것으로, 외부 라이브러리를 다운받아 설치한 후 사용

* c의 라이브러리

| 헤더 파일 | 기능                                                                                                |
| --------- | --------------------------------------------------------------------------------------------------- |
| stdio.h   | 데이터의 입·출력에 사용되는 기능들을 제공(printf, scanf, fprintf, fscanf, fclose, fopen)등          |
| math.h    | 수학 함수들을 제공(sqrt, pow, abs)등                                                                |
| string.h  | 문자열 처리에 사용되는 기능들을 제공(strlen, strcpy, strcmp)등                                      |
| stdlib.h  | 자료형 변환, 난수 발생, 메모리 할당에 사용되는 기능들을 제공(atoi, atof, srand, rand, malloc, free) |
| time.h    | 시간 처리에 사용되는 기능들을 제공(time, clock)                                                     |

- java 라이브러리

| 패키지    | 기능                                                                                                                                     |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| java.lang | Java에 기본적으로 필요한 인터페이스, 자료형, 예외 처리 등에 관련된 기능을 제공(import문x)(String, System, Process, Runtime, Math, Error) |
| java.util | 날짜 처리, 난수 발생, 복잡한 문자열 처리 등에 관련된 기능을 제공 (Date, Calender, Random, StringTokenizer)                               |
| java.io   | 파일 입·출력과 관련된 기능 및 프로토콜을 제공 (InputStream, OutputStream, Reader, Writer)                                                |
| java.net  | 네트워크와 관련된 기능을 제공(Socket, URL, InetAddress)                                                                                  |
| java.awt  | 사용자 인터페이스(UI)와 관련된 기능(rame, Panel, Dialog, Button, Checkbox)                                                               |

#
