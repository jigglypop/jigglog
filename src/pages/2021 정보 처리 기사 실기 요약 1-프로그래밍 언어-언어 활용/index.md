---
path: "/2021 정보 처리 기사 실기 요약 1-프로그래밍 언어(2)-언어 활용/"
category: "정보처리기사 실기 요약"
tags: ["정보처리기사 실기 요약", "정보처리기사", "정처기"]
title: "2021 정보 처리 기사 실기 요약 1-프로그래밍 언어(2)-언어 활용"
date: "2021-05-20T20:21:00.000Z"
summary: "2020 정보 처리 기사 실기 요약 1-프로그래밍 언어(2)-언어 활용 요약 입니다. 정처기 공부를 할 때 활용하세요."
images: ["images/1.jpg"]
---

> 정보처리기사 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 책을 참고해서 공부하세요

> 2021 정보 처리 기사 프로그래밍 언어 활용 요약 입니다. 정처기 공부를 할 때 활용하세요.

# 1. 데이터 타입(Data Type)

---

- _변수(Variable)에 저장될 데이터의 형식을 나타내는 것으로, 변수에 값을 저장하기 전에 문자형, 정수형, 실수형 등 어 떤 형식의 값을 저장할지 데이터 타입을 지정하여 변수를 선언해야 함_
- _데이터 타입의 유형_

* `불린 타입 (Boolean Type)`: 조건의 참(True), 거짓(False) 여부를 판단. 기본값은 거짓(False) (true, false)
* `문자 타입 (Character Type)` : 한 문자를 저장할 때, 작은따옴표(' ') 안에 표시 ('A', 'a', '1', '\*')
* `문자열 타입(Character String Type)` : 문자열을 저장할 때, 큰따옴표(" ") 안에 표시 ("Hello!", "1+2=3")
* `정수 타입 (Integer Type)` : 정수, 즉 소수점이 없는 숫자를 저장 (1, -1, 10, -100)
* `부동 소수점 타입 (Floating Point Type)` : 소수점 이하가 있는 실수를 저장할 때 (0.123×102, -1.6×23)
* `배열 타입 (Array Type)` : 같은 타입의 데이터 집합을 만들어 저장 , 데이터는 중괄호({ }) 안에 콤마(,)로 구분하여 값들을 나열
  ({1, 2, 3, 4, 5})

# 2. 변수와 기억 클래스

---

- `변수(Variable)`
  - 컴퓨터가 명령을 처리하는 도중 발생하는 값을 저장하기 위한 공간으로, 변할 수 있는 값을 의미
  - 변수는 저장하는 값에 따라 정수형, 실수형, 문자형, 포인터형 등으로 구분
- `기억 클래스`
  - 변수 선언 시 메모리 내에 변수의 값을 저장하기 위한 기억영역이 할당되는데, 할당되는 기억영역에 따라 사용 범위에 제한이 있음. 이러한 기억영역을 결정하는 작업
- C언어에서 제공하는 기억 클래스의 종류
  - _자동 변수(Automatic Variable)_ : 함수나 코드의 범위를 한정하는 블록 내에서 선언되는 변수
  - _외부 변수(External Variable)_ : 현재 파일이나 다른 파일에서 선언된 변수나 함수를 참조(reference)하기 위한 변수
  - _정적 변수(Static Variable)_ : 함수나 블록 내에서 선언하는 내부 정적 변수와 함수 외부에서 선언하는 외부 정적 변수
  - _레지스터 변수(Register Variable)_ : 메모리가 아닌 CPU 내부의 레지스터에 기억영역을 할당받는 변수

# 3. scanf 함수 / printf 함수

---

- `scanf 함수` : C언어의 표준 입력 함수로, 키보드로 입력받아 변수에 저장하는 함수

```c
scanf("%3d", &a);
// % : 서식 문자 / 3 : 입력 자릿수 3자리 / d : 10진수로 입력 / &a : 입력받은 데이터를 변수 a의 주소에 저장
```

- 서식 문자열 : printf함수로 출력할 때도 동일하게 적용
- %d : 정수형 10진수
- %u : 부호없는 정수형 10진수
- %o : 정수형 8진수
- %x : 정수형 16진수
- %c : 문자를 입·출력
- %s : 문자열을 입·출력
- %f : 소수점을 포함하는 실수를 입·출력
- %e : 지수형 실수를 입·출력
- %ld : long형 10진수를 입·출력
- %lo : long형 8진수를 입·출력
- %lx : long형 16진수를 입·출력
- %p : 주소를 16진수로 입·출력

* `printf 함수` : C언어의 표준 출력 함수로, 인수로 주어진 값을 화면에 출력하는 함수

```c
printf(" %-5.2f ", 200.2);
// % : 서식 문자 / 8 : 출력 자릿수 5자리 / f : 실수로 출력 / 2 : 소수점 이하를 2자리로 지정 /- : 왼쪽부터 출력

```

- \n : 커서를 다음 줄 앞으로 이동
- \' : 작은따옴표를 출력
- \b : 커서를 왼쪽으로 한 칸 이동
- \" : 큰따옴표를 출력
- \t : 커서를 일정 간격 띄움
- \a : 스피커로 벨 소리를 출력
- \r : 커서를 현재 줄의 처음으로 이동
- \\ : 역 슬래시를 출력
- \0 : 널 문자를 출력
- \f : 한 페이지를 넘김

# 4. Java에서의 표준 입·출력

---

- Java에서의 표준 입력 : Java에서 키보드로 입력받은 값을 변수에 저장하려면 먼저 Scanner 클래스를 이용해 키보드로부터 값을 입력받는 객체 변수를 생성한 후 사용

- `객체 변수 생성`

  - Scanner : 입력에 사용할 객체 변수를 생성할 때 사용하는 클래스 이름
  - sc : 객체 변수명
  - new : 객체 생성 예약어
  - Scanner( ) : 클래스의 이름
  - System.in : 표준 입력장치(키보드)를 의미

- `객체 변수 활용`

  - scin.nextInt( )
  - scin : 입력에 사용할 객체 변수 이름이다. 객체 변수 생성 시 사용한 객체 변수 이름과 동일해야 함
  - nextInt( ) : 입력받은 값을 정수형으로 반환

- `Java에서의 표준 출력`
  - Java에서 값을 화면에 출력할 때 : printf( ) 메소드를 이용

```java
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();

		if (a>b) System.out.println(">");
		else if(b>a) System.out.println("<");
		else System.out.println("==");
	}
}

```

# 5. 연산자

---

- 산술 연산자

| 연산자 | 의미        |
| ------ | ----------- |
| +      | 덧셈        |
| -      | 뺄셈        |
| \*     | 곱셈        |
| /      | 나눗셈      |
| %      | 나머지      |
| ++     | 증가 연산자 |
| - -    | 감소 연산자 |

- 관계 연산자

| 연산자 | 의미        |
| ------ | ----------- |
| ==     | 같다        |
| !=     | 같지 않다   |
| >      | 크다        |
| >=     | 크거나 같다 |
| <      | 작다        |
| <=     | 작거나 같다 |

- 논리 연산자

| 연산자 | 의미 | 비고               |
| ------ | ---- | ------------------ |
| !      | not  | 부정               |
| &&     | and  | 모두 참이면 참     |
| \|\|   | or   | 하나라도 참이면 참 |

- 비트 연산자

| 연산자 | 의미 | 비고                                    | 연산자 | 의미          | 비고                             |
| ------ | ---- | --------------------------------------- | ------ | ------------- | -------------------------------- |
| &      | and  | 모든 비트가 1일 때만 1                  | ~      | not           | 각 비트의 부정, 0이면 1, 1이면 0 |
| ^      | xor  | 모든 비트가 같으면 0, 하나라도 다르면 1 | <<     | 왼쪽 시프트   | 비트를 왼쪽으로 이동             |
| \|     | or   | 모든 비트 중 한 비트라도 1이면 1        | >>     | 오른쪽 시프트 | 비트를 오른쪽으로 이동           |

- 대입 연산자

| 연산자 | 예       | 의미       |
| ------ | -------- | ---------- |
| +=     | a += 1   | a = a + 1  |
| -=     | a -= 1   | a = a - 1  |
| \* =   | a \* = 1 | a = a \* 1 |
| /=     | a /= 1   | a = a / 1  |
| %=     | a %= 1   | a = a % 1  |
| <<=    | a <<= 1  | a = a << 1 |
| >>=    | a >>= 1  | a = a >> 1 |

- 조건 연산자 형 : `조건 ? 1 : 2` : 참이면 1, 거짓이면 2 반환

* 기타 연산자

| 연산자   | 의미                                                                                                                                                            |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sizeof   | 자료형의 크기를 표시한다.                                                                                                                                       |
| ,(콤마)  | 콤마로 구분하여 한 줄에 두 개 이상의 수식을 작성하거나 변수를 정의한다. 왼쪽에서 른쪽으로 순서대로 수행되며, 순서 연산자라 부르기도 한다.                       |
| (자료형) | 사용자가 자료형을 다른 자료형으로 변환할 때 사용하는 것으로, cast(캐스트) 연산자라고 부른다. 변환할 자료형을 괄호 안에 넣어서 변환할 값이나 변수명 앞에 놓는다. |

- 증가/감소 연산자는 변수의 앞(전치) 또는 변수의 뒤(후치)에 붙여 사용한다.
- 전치 : 변수 앞에 증감 연산자가 오는 형태로 먼저 변수의 값을 증감시킨 후 변수를 연산에 사용한다(++a, --a).
- 후치 : 변수 뒤에 증감 연산자가 오는 형태로 먼저 변수를 연산에 사용한 후 변수의 값을 증감시킨다(a++, a--).

* 연산자 우선순위 : 단항, 산술, 시프트, 관계, 비트, 논리, 조건, 대입, 순서

# 6. if문

---

- 조건에 따라서 실행할 문장을 달리하는 제어문. 조건이 참일 때만 실행할 문장을 지정할 수도 있고, 참과 거짓에 대해 각각 다른 실행문을 지정할 수도 있음

- `단순 if문` : 조건이 한 개 일 때 사용하는 제어문

  - 조건이 참일 때 실행할 문장이 하나인 경우

```c
#include <stdio.h>

int main(){
  int num1 = 10;
  if (num1 == 10)
    printf("10\n");
  return 0;
}

```

- 조건이 참일 때 실행할 문장이 두 문장 이상인 경우

```c
#include <stdio.h>

int main(){
  int num1 = 10;
  if (num1 == 10){
    printf("두 문장\n");
    printf("10\n");
  }
  return 0;
}

```

- 조건이 참일 때와 거짓일 때 실행할 문장/이 다를 때

```c
#include <stdio.h>

int main(){
  int num1 = 10;
  if (num1 == 10){
    printf("10\n");
  }else{
    printf("not 10\n");
  }
  return 0;
}

```

- `다중 if문` : 조건이 여러 개 일 때 사용하는 제어문

```c
#include <stdio.h>

int main(){
  int num1 = 10;
  if (num1 >= 10){
    if (num1 >= 20){
      printf("20 이상\n");
    }
  }
  return 0;
}

```

# 7. switch문

---

- _조건에 따라 분기할 곳이 여러 곳인 경우 간단하게 처리할 수 있는 제어문_
- case문의 레이블에는 한 개의 상수만 지정할 수 있으며, int, char, enum형의 상수만 가능
- case문의 레이블에는 변수 지정 불가
- break문은 생략이 가능하지만 break문이 생략되면 수식과 레이블이 일치할 때 실행할 문장부터 break문 또는 switch 문이 종료될 때까지 모든 문장이 실행

```c
#define _CRT_SECURE_NO_WARNINGS
// scanf 보안 경고로 인한 컴파일 에러 방지
#include <stdio.h>

int main(){
  int num1;
  scanf("%d", &num1);

  switch (num1){
    case 1:
      printf("1 \n");
      break
    case 2:
      printf("2 \n");
      break
    default:
      printf("default\n");
  }
  return 0;
}
// 1(입력)
// 1
// 2
// default
```

# 8. for문

---

- 초기값, 최종값, 증가값을 지정하는 수식을 이용해 정해진 횟수를 반복하는 제어문
- 초기값을 정한 다음 최종값에 대한 조건이 참이면 실행할 문장을 실행한 후 초기값을 증가값 만큼 증가시키면서 최종값 에 대한 조건이 참인 동안 실행할 문장을 반복 수행

```c
#include <stdio.h>
int main() {
	int i, j;
    for (i = 2; i <= 4; i++) {
    	for (j = 5; j <= 7; j++) {
    	}
    }
    printf("%d × %d = %d", j, i, i * j);
    return 0;
}

// 8 x 5 = 40
```

# 9. while문

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
    return 0;
}
// 25, 15
```

# 10. 배열과 문자열

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
    return 0;
}

// 4
```

# 11. Java에서의 배열과 문자열

---

- Java에서는 향상된 for문을 사용할 수 있는데, 향상된 for문은 객체를 대상으로만 가능

```java
public class Example {
	public static void main(String[ ] args) {
        int[ ] a = {90,100,80,70,60,50,30};
        int hap = 0;
        float avg;
        for (int i : a){
            hap = hap + i;
        }
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
        for(int i = 0; i < b; i++){
			a[i] = i;            
        }
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



# 12. 포인터

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
	for (int i = 4; i > -1; i -= 2){
        sum += *(a + i);
    }
	printf("%d", sum);
}
// 91
```

# 13. 사용자 정의 함수

---

- _사용자가 필요한 기능을 취향대로 만들어 사용할 수 있는 함수_

- _실기 기출_

```c
#include <stdio.h>

void align(int a[]) {
	int temp;
	for (int i = 0; i < 4; i++)
		for (int j = 0; j < 4 - i; j++){
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
	for (int i = 0; i < 5; i++){
    	printf("%d ", a[i]);
    }
    return 0;
}
// 50 75 85 95 100
```

# 14. 재귀 함수

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

# 15. Java의 클래스와 메소드

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
        for(i = 0; i < exp; i++){
			result = result * data;
        }
        return result;
    }
    public static void main(String args[]) {
        System.out.print(power(2, 10));
    }
}
// 1024(2의 10승)
```

# 16. Python의 기초

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

# 17. 라이브러리

---

- _라이브러리_ : 프로그램을 효율적으로 개발할 수 있도록 자주 사용하는 함수나 데이터들을 미리 만들어 모아 놓은 집합체
- _표준 라이브러리_ : 프로그래밍 언어에 기본적으로 포함되어 있는 라이브러리로, 여러 종류의 모듈이나 패키지 형태
- _외부 라이브러리_ : 개발자들이 필요한 기능들을 만들어 인터넷 등에 공유해 놓은 것으로, 외부 라이브러리를 다운받아 설치한 후 사용

* c의 라이브러리

| 헤더 파일 | 기능                                                         |
| --------- | ------------------------------------------------------------ |
| stdio.h   | 데이터의 입·출력에 사용되는 기능들을 제공(printf, scanf, fprintf, fscanf, fclose, fopen)등 |
| math.h    | 수학 함수들을 제공(sqrt, pow, abs)등                         |
| string.h  | 문자열 처리에 사용되는 기능들을 제공(strlen, strcpy, strcmp)등 |
| stdlib.h  | 자료형 변환, 난수 발생, 메모리 할당에 사용되는 기능들을 제공(atoi, atof, srand, rand, malloc, free) |
| time.h    | 시간 처리에 사용되는 기능들을 제공(time, clock)              |

- java 라이브러리

| 패키지    | 기능                                                         |
| --------- | ------------------------------------------------------------ |
| java.lang | Java에 기본적으로 필요한 인터페이스, 자료형, 예외 처리 등에 관련된 기능을 제공(import문x)(String, System, Process, Runtime, Math, Error) |
| java.util | 날짜 처리, 난수 발생, 복잡한 문자열 처리 등에 관련된 기능을 제공 (Date, Calender, Random, StringTokenizer) |
| java.io   | 파일 입·출력과 관련된 기능 및 프로토콜을 제공 (InputStream, OutputStream, Reader, Writer) |
| java.net  | 네트워크와 관련된 기능을 제공(Socket, URL, InetAddress)      |
| java.awt  | 사용자 인터페이스(UI)와 관련된 기능(rame, Panel, Dialog, Button, Checkbox) |



# 18. 예외 처리

---

- _예외(Exception)_ : 프로그램의 정상적인 실행을 방해하는 조건이나 상태
- _예외 처리(Exception Handling)_ : 예외가 발생했을 때 프로그래머가 해당 문제에 대비해 작성해 놓은 처리 루틴을 수행하도록 하는 것
- 예외의 원인 : 하드웨어 문제, 운영체제의 설정 실수, 라이브러리 손상, 사용자의 입력 실수, 받아들일 수 없는 연산, 할당하지 못하는 기억장치 접근 등
- java의 예외 객체

| 예외 객체                      | 발생 원인                                                    |
| ------------------------------ | ------------------------------------------------------------ |
| ClassNotFoundException         | 클래스를 찾지 못한 경우                                      |
| NoSuchMethodException          | 메소드를 찾지 못한 경우                                      |
| FileNotFoundException          | 파일을 찾지 못한 경우                                        |
| InterruptedIOException         | 입·출력 처리가 중단된 경우                                   |
| ArithmeticException            | 0으로 나누는 등의 산술 연산에 대한 예외가 발생한 경우        |
| IllegalArgumentException       | 잘못된 인자를 전달한 경우                                    |
| NumberFormatException          | 숫자 형식으로 변환할 수 없는 문자열을 숫자 형식으로 변환한 경우 |
| ArrayIndexOutOfBoundsException | 배열의 범위를 벗어난 접근을 시도한 경우                      |
| NegativeArraySizeException     | 0보다 작은 값으로 배열의 크기를 지정한 경우                  |
| NullPointerException           | 존재하지 않는 객체를 참조한 경우                             |