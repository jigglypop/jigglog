---
path: "/2020 정보처리기사 실기 요점 정리(8)-SQL 응용(1)/"
category: "정보처리기사 실기"
tags: ["정보처리기사 실기", "정보처리기사","SQL 응용"]
title: "2020 정보처리기사 실기 요점 정리(8)-SQL 응용(1)"
date: "2020-06-08T18:06:01.000Z"
summary: "SQL 응용 01. 절차형 SQL 작성하기"
images: ["images/1.jpg"]
---

> 혼자 공부하면서 정리한 내용입니다. 자세한 내용은 책을 찾아서 공부하세요

---



# 01. 절차형 SQL 작성하기

## 1) 프로시저

### (1) 프로시저의 개념

* 절차형 SQL 을 활용하여 특정 기능을 수행할 수 있는 트랜잭션 언어
* 프로시저 호출을 통해 실행되며, 이를 통해 일련의 SQL 작업을 포함하는 데이터 조작어를 수행한다







### (2) 프로시저 구성

* 선언부(DECLARE) : 프로시저의 명칭, 변수와 인수 그리고 그에 대한 데이터 타입을 정의
* 시작/종료부(BEGIN/END) : 프로시저의 시작과 종료를 알림
* 제어부(CONTROL) : 기본적으로는 순차적으로 처리. 조건문과 반복문을 이용하여 문장 처리
* SQL : DML을 주로 사용
* 예외부(EXCEPTION): BEGIN/END절에서 실행되는 SQL문이 실행될 때 예외발생시 예외처리 방법을 정의
* 실행부(TRANSACTION) : 트리거에서 수행된 DML수행 내역의 DBMS의 적용 또는 취소 여부를 결정하는 처리부





### (3) 프로시저 구성 상태





## 2) 사용자 정의 함수

### (1) 사용자 정의 함수 개념

* 절차열 SQL을 활용하여 일련의 SQL 처리를 수행하고, 수행결과를 단일 값으로 반환할 수 있는 절차형 SQL
* DBMS에서 제공되는 공통적 함수 이외에 사용자가 직접 정의하고 작성





### (5) 사용자 정의 함수 예시

```sql
CREATE FUNCTION GET_AGE
(V_BIRTH_DATE IN CHAR(8))
IS

BEGIN
	V_CURRENT_YEAR CHAR(4);
	V_BIRTH_YEAR CHAR(4);
	V_AGE NUMBER;
	
IF V_BIRTH_DATE > "30000000" THEN
SET
	V_CLOSING_DATE = "20200101";
END IF;


SELECT TO_CHAR(SYSDATE,"YYYY"),
		SUBSTR(V_BIRTH_DATE,1,4)
	IFTO V_CURRENT_YEAR,
		V_BIRTH_YEAR
	FROM DUAL;
```





## 3) 트리거

### (1) 트리거의 개념

* 특정 테이블에 삽입, 수정, 삭제 등의 데이터 변경 이벤트가 발생하면 DBMS에서 자동 실행
* 이벤트는 전체 트랜잭션 대상과 각행에 의해 발생되는 경우 



### (2) 트리거의 목적

* 특정 테이블에 대한 데이터 변경 시작점 설정, 그와 관련된 작업 자동 수행
* 데이터 무결성 유지 / 로그메시지 출력



### (3) 트리거의 종류

* 행 트리거 : 데이터 변화가 생길 때마다 실행
* 문장 트리거 : 트리거에 의해 단 한번 실행

### (4) 트리거의 구성

* EVENT명령어를 통해 트리거 실행을 위한 이벤트 인지, 변수 IN/OUT 이 없음 

| 구성요소               | 설명                                                         |
| ---------------------- | ------------------------------------------------------------ |
| 선언부(DECLARE)        | 명칭 정의                                                    |
| 이벤트부(EVENT)        | 실행되는 타이밍, 이벤트 명시                                 |
| 시작/종료부(BEGIN/END) | 시작과 종료 표현 , BEGIN/END 쌍으로 표시                     |
| 제어부(CONTROL)        | 순차적으로 처리/ 비교 조건에 따라 블록 또는 문장 실행/ 조건에 따라 반복 |
| SQL                    | DML을 주로 사용하지 않고 DDL 사용                            |
| 예외부(EXCEPTION)      | 예외 처리                                                    |

### (5) 트리거의 구문

* 선언부 : 트리거의 이름, 변수의 이름과 타입 선언 (CREATE[OR REPLACE] TREGGER 트리거명)

  | 구성         | 설명                                                       |
  | ------------ | ---------------------------------------------------------- |
  | CREATE       | DBMS내에 객체(트리거, 함수, 프로시저)를 생성               |
  | [OR REPLACE] | OR REPLACE명령은 트리거 존재시 현재 컴파일 내용으로 덮어씀 |
  | TREGGER      | TREGGER는 트리거를 사용한다는 의미                         |
  | 트리거명     | 트리거 이름                                                |

* 이벤트부(EVENT) : 트리거 타이밍, 트리거 이벤트, 수행 테이블 지정 (순서 유형 ON 테이블명)

  | 구성   | 설명                                             |
  | ------ | ------------------------------------------------ |
  | BEFORE | INSERT/UPDATE/DELETE를 수행하기 전에 트리거 실행 |
  | AFTER  | INSERT/UPDATE/DELETE 성공한 후에만 실행          |

* 시작/종료부(BEGIN/END) : 시작과 종료를 알려주는 필수 구문

* 제어부(CONTROL) : 실행 흐름 제어(IF/CASE)

* SQL : 조회/추가/수정/삭제 수행, SELECT/INSERT/DELETE/UPDATE 문장 사용 , OLD 및 NEW 수식어 접두어를 붙여 참조

  | 데이터 작업 | OLD          | NEW          |
  | ----------- | ------------ | ------------ |
  | INSERT      | NULL         | 삽입된 값    |
  | UPDATE      | 갱신 전의 값 | 갱신 후의 값 |
  | DELETE      | 삭제 전의 값 | NULL         |

* 예외부(EXCEPTION) : 예외 상황



### (6) 트리거 작성 예제

```sql
--- 1) 선언부
CREATE TRIGGER PUT_EMPLOYEE_HIST

--- 2) 이벤트부 :  EMPLOYEE 테이블 수정 및 삭제 후 해당 트리거 실행
AFTER UPDATE OR DELETE
ON EMPLOYEE
FOR EACH ROW

--- 3) 시작/종료부
BEGIN

--- 4) 제어부 :  EMPLOYEE에 UPDATE 연산이 발생할 경우 
IF UPDATING
THEN
--- 5) SQL : EMPLOYEE 테이블에 갱신 전 EMPLOYEE_ID 갱신 후 EMPLOYEE_NAME값을 EMPLOYEE_HIST에 대입
    INSERT INTO EMPLOYEE_HIST
        (EMPLOYEE_ID,
        EMPLOYEE_NAME,
        EMPLOYEE_STATUS)
    VALUES (:OLD.EMPLOYEE_ID,
            :NEW.EMPLOYEE_NAME,
            "부서이동");
        
        
ELSEIF DELETING
THEN
--- 5) SQL : EMPLOYEE 테이블에 DELETE연산이 발생할 경우
--- EMPLOYEE_ID 테이블에 삭제 전 EMPLOYEE_ID, EMPLOYEE_NAME값을 EMPLOYEE_HIST에 삽입

    INSERT INTO EMPLOYEE_HIST
        (EMPLOYEE_ID,
        EMPLOYEE_NAME,
        EMPLOYEE_DEFT)
    VALUES (:OLD.EMPLOYEE_ID,
            :NEW.EMPLOYEE_NAME,
            "퇴사");
            
END IF;
END;
```

