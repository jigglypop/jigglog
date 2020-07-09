---

path: "/2020 정보처리기사 실기 요점 정리(10)-프로그래밍 언어 활용(3)/"
category: "정보처리기사 실기"
tags: ["정보처리기사 실기", "정보처리기사","프로그래밍 언어 활용"]
title: "2020 정보처리기사 실기 요점 정리(10)-프로그래밍 언어 활용(3)"
date: "2020-06-10T02:16:03.000Z"
summary: "프로그래밍 언어 활용 03. 프로그래밍 예제 및 알고리즘"
images: ["images/1.jpg"]
---

> 혼자 공부하면서 정리한 내용입니다. 자세한 내용은 책을 찾아서 공부하세요



# 03. 프로그래밍 예제 및 알고리즘

---

## 1) 기본 문법



### (1) Hello World

```c
#include<stdio.h>

void main(){
    printf("Hello World\n");
}
```

```c++
#include<iostream>

using namespace std;

void main(){
    cout << "Hello World\n";
    cout << endl;
}
```

```java
public class A {
    public static void main(String[] args){
        System.out.println("Hello World");
    }
}
```

```python
print("Hello World")
```

* answer : Hello World



### (2) 데이터 타입

* 문자 타입

```c
#include<stdio.h>

void main(){
    char a = "B";
    printf("a\n");
}
```

```c++
#include<iostream>

void main(){
    char a = "B";
    std::cout << "a" << std::endl;
}
```

```java
public static void main(String[] args){
    char a = "B";
    System.out.println("a");
}
```

```python
a = "B"
print("a")
```

* a



```c
#include<stdio.h>

void main(){
    char a = "B";
    printf("%c\n",a);
}
```

```c++
#include<iostream>

void main(){
    char a = "B";
    std::cout << a << std::endl;
}
```

```java
public static void main(String[] args){
    char a = "B";
    System.out.println(a);
}
```

```python
a = "B"
print(a)
```

* B



```c
#include<stdio.h>

void main(){
    char a = "B";
    printf("a: %c\n",a);
}
```

```c++
#include<iostream>

void main(){
    char a = "B";
    std::cout << "a: " << a << std::endl;
}
```

```java
public static void main(String[] args){
    char a = "B";
    System.out.println("a: "+a);
}
```

```python
a = "B"
print("a: ",a)
```

* a: B



* 정수 타입

```c
#include<stdio.h>

void main(){
    int a = 5;
    printf("a: %d\n",a);
}
```

```c++
#include<iostream>

void main(){
    int a = 5;
    std::cout << "a: " << a;
    std::cout << std::endl;
}
```

```java
public static void main(String[] args){
    int a = 5;
    System.out.println("a: "+a);
}
```

```python
a = 5
print("a: ",a)
```

* a: 5



```c
#include<stdio.h>

void main(){
    char a = "B";
    printf("%d %c\n",a,a);
}
```

```c++
#include<iostream>

void main(){
    char a = "B";
    std::cout << (int)a<< " ";
    std::cout << a << std::endl;
}
```

```java
public static void main(String[] args){
    char a = "B";
    System.out.println(""+(int)a+""+a);
}
```

```python
a = "B"
print(ord(a),a)
```

* 66 : B