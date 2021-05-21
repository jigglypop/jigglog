---
path: "/2020 정보처리기사 필기 요점 정리(1)-데이터베이스 구축(3)/"
category: "정보처리기사 필기"
tags: ["정보처리기사 필기", "정보처리기사"]
title: "2020 정보처리기사 필기 요점 정리(1)-데이터베이스 구축(3)"
date: "2020-01-03T05:00:00.000Z"
summary: "2020 정보처리기사 필기 요점 정리(1)-데이터베이스 구축(3)"
images: ["images/2.jpg"]
---

# 3. SQL 응용

## SQL 개념

---

국제 표준 데이터베이스 언어이며 많은 관계형 데이터베이스(RDB)를 지원하는 언어로 채택

#### SQL의 분류

- DDL(Data Define Language, 데이터 정의어): 스키마, 도메인, 테이블, 뷰, 인덱스를 정의, 변경, 삭제할 때 사용하는 언어

  CREATE : 스키마, 도메인, 테이블, 뷰, 인덱스를 정의

  ALTER : 테이블에 대한 정의를 변경

  DELETE : 스키마, 도메인, 테이블, 뷰, 인덱스를 삭제

* DML(Data Manipulation Language, 데이터 조작어) : 사용자가 저장된 데이터를 실질적으로 처리하는 데 사용

  SELECT : 테이블에서 조건에 맞는 튜플 검색

  INSERT : 테이블에 새로운 튜플 삽입

  DELETE : 테이블에서 조건에 맞는 튜플 삭제

  UPDATE : 테이블에서 조건에 맞는 튜플의 내용 변경

- DCL(Data Control Language, 데이터 제어어) : 데이터의 보안, 무결성, 회복, 병행 수행 제어 등을 정의하는 데 사용하는 언어

  COMMIT : 명령에 의해 수행된 결과를 실제 물리적 디스크로 저장하고 데이터베이스 조작 작업이 정상적으로 완료되었음을 알려줌

  ROLLBACK : 데이터베이스 조작 작업이 비정상적으로 종료되었을 때 원래의 상태로 복구

  GRANT : 데이터베이스 사용자에게 사용 권한을 부여

## DDL

---

DDL(데이터 정의어)는 DB 구조, 데이터 형식, 접근 방식 등 DB를 구축하거나 수정할 목적으로 사용하는 언어

#### CREATE

- CREATE SCHEM : 스키마(데이터베이스 구조와 제약 조건에 관한 전반적인 명세를 기술한 것)를 정의

```
CREATE SCHEMA 스키마명 AUTHORIZATION 사용자_id;
```

```
CREATE SCHEMA 성적 AUTHORIZATION 김이박;
소유권자의 사용자 ID가 '김이박'이고 스키마 '성적'을 정의하는 SQL문
```

- CREATE DOMAIN : 도메인을 정의(대괄호는 생략 가능)

```
CREATE DOMAIN 도메인명 [AS] 데이터_타입
	[DEFAULT 기본값]
	[CONSTRAINT 제약조견명 CHECK (범위값)];
```

```
CREATE DOMAIN [AS] CHAR(1)
	DEFAULT '남'
    CONSTRAINT VALID-GENDER CHECK(VALUE IN('남','여');
성별을 '남' 또는 '여'와 같이 정해진 1개 문자로 표현되는 도메인 GENDER를 정의하는 SQL문
```

- CREATE TABLE : 테이블을 정의

```
CREATE TABLE 테이블명
    (속성명 데이터_타입 [DEFAULT 기본값][NOT NULL], ...
    [, PRIMARAY KEY(기본키_속성명), ...)]
    [, UNIQUE(대체키_속성명), ...)]
    [, FOREIGN KEY(외래키_속성명, ...)]
    	REFERENCES 참조테이블(기본키_속성명, ...)]
        [ON DELETE 옵션]
        [ON UPDATE 옵션]
    [, CONSTRAINT 제약조건명][CHECK (조건식)]);
```

- '이름', '학번', '전공', '성별', '생년월일'로 구성된 학생 테이블을 정의하는 SQL문
- 제약조건
  - '이름'은 NULL 일 수 없음
  - '학번'은 기본키
  - '전공'은 학과 테이블의 '학과 코드'를 참조하는 외래키로 사용
  - 학과 테이블에서 삭제가 일어나면 관련된 튜플들의 전공 값을 NULL로 만듦
  - 학과 테이블에서 '학과 코드'가 변경되면 전공 값도 같은 값으로 변경
  - '생년월일'은 1980-01-01 이후의 데이터
  - 제약 조건의 이름은 '생년월일 제약'
  - 각 속성의 데이터 타입은 적당하게 지정
  - '성별'은 도메인 GENDER 사용

```
CREATE TABLE 학생
    (이름 VARCHAR(15) NOT NULL,
    학번 CHAR(8)
    전공 CHAR(5)
    성별 GENDER
    생년월일 DATE
    PRIMARY KEY(학번)
    FOREIGN KEY(전공) REFERENCES 학과(학과코드)
    	ON DELETE SET NULL
        ON UPDATE CASCADE
    CONSTRAINT 생년월일제약 CHECK(생년월일*='1980-01-01'));
```

- CREATE VIEW

  - 뷰(하나 이상의 기본 테이블로부터 유도되는 이름을 갖는 가상 테이블)를 정의

  - SELECT문의 결과로써 뷰를 생성

```
CREATE VIEW 뷰명[(속성명[, 속성명, ...])]
AS SELECT문;
```

- 고객 테이블에서 '주소'가 '포천시'인 고객들의 '이름'과 '전화번호'를 '포천 고객'이라는 뷰로 정의하는 SQL문

```
CREATE VIEW 포천고객(이름, 전화번호)
AS SELECT 이름,전화번호
FROM 고객
WHERE 주소 = '포천시';
```

- CREATE INDEX

  - 인덱스(검색 시간을 단축시키기 위해 만든 보조적인 데이터 구조)를 정의

  - ASC : 오름차순 정렬, 생략 시 기본 값 / DESC : 내림차순 정렬

  - CLUSTER : 사용 시 인덱스를 클러스터드 인덱스로 지정

  - 클러스터드 인덱스 : 인덱스 키의 순서에 따라 데이터가 정렬되어 저장되는 방식

```
CREATE [UNIQUE] INDEX 인덱스명
ON 테이블명(속성명 [ASC|DESC][,속성명 [ASC|DESC]])
[CLUSTER];
```

- 고객 테이블에서 UNIQUE 한 특성을 갖는 '고객번호'속성에 대해 내림차순으로 정렬하여 '고객번호\_idx'라는 이름으로 인덱스를 정의하는 SQL문

```
CREATE UNIQUE INDEX 고객번호_idx
ON 고객(고객번호 DESC);
```

#### ALTER

- ALTER TABLE

  - 테이블에 대한 정의를 변경

```
ALTER TABLE 테이블명 ADD 속성명 데이터_타입 [DEFAULT '기본값'];
ALTER TABLE 테이블명 ALTER 속성명 [SET DEFAULT '기본값'];
ALTER TABLE 테이블명 DROP COLUMN 속성명 [CASCADE];
```

- 학생 테이블에 최대 3 문자로 구성되는 '학년' 속성을 추가하는 SQL문

```
ALTER TABLE 학생 ADD 학년 VARCHAR(3);
```

- 학생 테이블의 학년 필드의 데이터 타입과 크기를 최대 10글자로 하고 NULL값이 입력되지 않게 하는 SQL문

```
ALTER TABLE 학생 ALTER 학년 VARCHAR(10) NOT NULL;
```

#### DROP

- 스키마, 도메인, 기본 테이블, 튜 테이블, 인덱스, 제약 조건 등을 제거하는 명령문

```
DROP SCHEMA 스키마명 [CASCADE | RESTRICTED];
DROP DOMAIN 도메인명 [CASCADE | RESTRICTED];
DROP TABLE 테이블명 [CASCADE | RESTRICTED];
DROP VIEW 뷰명 [CASCADE | RESTRICTED];
DROP INDEX 인덱스명 [CASCADE | RESTRICTED];
DROP CONSTRAINT 제약조건명
```

- CASCADE : 제거할 때 참조 관계에 있는 테이블의 데이터도 연쇄 삭제

- RESTRICTED : 제거할 때 참조하고 있는 테이블이 있다면 삭제를 취소

## DCL

---

DCL(데이터 제어어)는 데이터의 보안, 무결성, 회복, 병행 제어 등을 정의하는 데 사용하는 언어

#### GRANT

- 데이터베이스 관리자가 사용자에게 권한 부여

#### REVOKE

- 데이터베이스 관리자가 사용자에게 권한 취소

#### COMMIT

- 트랜잭션이 성공적으로 끝난 후 변경된 내용을 데이터베이스에 반영

#### ROLLBACK

- COMMIT 되지 않은 변경된 내용을 취소하고 데이터베이스를 이전 상태로 되돌리는 명령

#### SAVEPOINT

- 트랜잭션 내에 ROLLBACK 할 위치인 저장점을 저장

## DML

---

#### DML의 개념

- DML(데이터 조작어)는 데이터베이스 사용자가 응용 프로그램이나 질의어를 통해 저장된 데이터를 관리하는 데 사용하는 언어

#### INSERT

- 테이블에 새로운 튜플을 삽입

```
INSERT INTO 테이블명([속성명1, 속성명2, ...])
VALUES (데이터1, 데이터2, ...)
```

- 사원 테이블에 (이름 - 김이박, 부서 - 개발)을 삽입하는 SQL문

```
INSERT INTO 사원(이름, 부서) VALUE(김이박, 개발);
```

- 사원 테이블에 있는 개발의 모든 튜플을 개발 부원(이름, 생일) 테이블에 삽입하는 SQL문

```
INSERT INTO 개발부원(이름, 주소)
SELECT 이름, 주소
FROM 사원
WHERE 부서 = "개발"
```

#### DELETE

- 테이블의 튜플 중 특정 튜플을 삭제

```
DELETE
FROM 테이블명
[WHERE 조건]
```

- 사원 테이블에서 부서가 개발인 튜플을 삭제하는 SQL문

```
DELETE FROM 사원 WHERE 부서 = "개발";
```

#### UPDATE

- 테이블의 튜플 중 특정 튜플의 내용을 변경

```
UPDATE 테이블명
SET 속성명 = 데이터[, 속성명=데이터, ...]
[WHERE 조건];
```

- 사원 테이블에서 김이박의 부서를 IT로 변경하는 SQL문

```
UPDATE 사원
SET 부서 = "IT"
WHERE 이름 = "김이박";
```

#### SELECT

- 테이블에서 튜플을 검색

```
SELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...]
FROM 테이블명[, 테이블명, ...]
[, WINDOW 함수 OVER (PARTITION BY 속성명1, 속성명2, ... ORDER BY 속성명3, 속성명4, ...) [AS 별칭]]
[WHERE 조건]
[GROUP BY 속성명, 속섬영, ..]
[HAVING 조건]
[ORDER BY 속성명 [ASC | DESC]];
```

- ORDER BY : 특정 속성을 기준으로 정렬하여 검색

  ASC : 오름차순

  DESC : 내림차순

* WINDOW 함수 : GROUP BY 절을 이용하지 않고 속성의 값을 집계할 함수를 기술

  PARTITION BY : WINDOW 함수가 적용될 범위로 사용할 속성을 지정

  ORDER BY : PARTITION 안에서 정렬 기준으로 사용할 속성을 지정

  ROW_NUMBER() : 각 레코드에 대한 일련번호 반환

  RANK() : 순위를 반환하되 공동 순위를 반영

  DENSE_RANK() : 순위를 반환하되 공동 순위를 반영하지 않음

- GROUP BY : 특정 속성을 기준으로 그룹화하여 검색할 때 사용. 그룹 함수와 같이 사용

  COUNT(속성명) : 그룹별 튜플 수를 구하는 함수

  SUM(속성명) : 그룹별 합계를 구하는 함수

  AVG(속성명) : 그룹별 평균을 구하는 함수

  MAX(속성명) : 그룹별 최대값을 구하는 함수

  MIN(속성명) : 그룹별 최소값을 구하는 함수

  ROLLUP(속성명, 속성명, ...) : 인수로 주어진 속성을 대상으로 그룹별 소계를 구하는 함수

  CUBE(속성명, 속성명, ...) : 인수로 주어진 속성을 대상으로 모든 조합의 그룹별 소계를 구함

* HAVING : GROUP BY와 함께 사용하여 그룹에 조건을 지정

#### SELECT 예제

<img src="https://k.kakaocdn.net/dn/1E1NK/btqCcBRRfmo/XD0DZV4tJEJVgBy8ACxF8K/img.png" alt="img" style="zoom:50%;" />\*

- 기본 검색 : 사원 테이블에 있는 모든 튜플을 검색하는 SQL문

```
SELETE * FROM 사원;
```

<img src="https://k.kakaocdn.net/dn/bLSbZ6/btqCcVvR4ry/7HeIVmgUxEjkvy9I92v481/img.png" alt="img" style="zoom:50%;" />\*

```
SELECT DISTINCT 부서 FROM 사원;
사원 테이블에서 부서를 중복없이 검색하는 SQL문
```

<img src="https://k.kakaocdn.net/dn/bG0ynK/btqCcCiZufW/JqyR0s4W9K7jAZgrGjeTY1/img.png" alt="img" style="zoom:50%;" />\*

- 조건 지정 검색

```
SELECT * FROM 사원 WHERE 부서 = "개발";
사원 테이블에서 부서가 개발인 튜플을 검색하는 SQL문
```

<img src="https://k.kakaocdn.net/dn/PsTAx/btqCevJZ4p1/UYkBUTlWWRAfIIflVRg8Sk/img.png" alt="img" style="zoom:50%;" />\*

```
SELECT * FROM 사원 WHERE 부서 = "개발" OR 부서 = "IT";
SELECT * FROM 사원 WHERE 부서 IN("개발","IT");
사원 테이블에서 부서가 개발 혹은 IT인 튜플을 검색하는 SQL문
```

<img src="https://k.kakaocdn.net/dn/bS079d/btqCcBYKMA5/8Ze1MmcXQhKKuriZYoZEQ0/img.png" alt="img" style="zoom:50%;" />\*

```
SELECT * FROM 사원 WHERE 이름 LIKE "김%";
사원 테이블에서 성이 김인 튜플을 검색하는 SQL문
```

<img src="https://k.kakaocdn.net/dn/rpbge/btqCcUX4XdU/zswQIP3KHbcQRADBUknxh0/img.png" alt="img" style="zoom:50%;" />\*

```
SELECT * FROM 사원 WHERE 부서 IS NULL;
사원 테이블에서 부서가 NULL인 튜플을 검색하는 SQL문
```

<img src="https://k.kakaocdn.net/dn/nvIyD/btqCgRewrdi/1v1qHuykYWhEdS6qFePH8K/img.png" alt="img" style="zoom:50%;" />\*

- 정렬 검색 : ORDER BY를 이용한 검색

```
SELECT * FROM 사원 ORDER BY 이름 ASC;
사원 테이블에서 이름을 오름차순으로 정렬하여 튜플을 검색하는 SQL문
```

<img src="https://k.kakaocdn.net/dn/dKNwfJ/btqCdh6xBN4/qXJDsvkvp8Y1GGNSL5adkk/img.png" alt="img" style="zoom:50%;" />\*

- 하위 질의 : 조건절에 다시 SELECT문을 넣어 그 결과를 조건으로 검색

```
SELECT 이름 FROM 사원 WHERE 이름 = (SELECT 이름 FROM 취미 WHERE 취미활동 = "축구");
취미 테이블에서 취미활동이 축구인 사원 이름의 튜플을 검색하는 SQL문
```

<img src="https://k.kakaocdn.net/dn/cfdW9Y/btqCe30MC0G/M6mKZ1nqvCpNUVV4wAqP20/img.png" alt="img" style="zoom:50%;" />\*

- 복수 테이블 : 여러 테이블을 대상으로 검색

```
SELECT 사원.이름, 사원.부서
FROM 사원, 취미
WHERE 사원.경력 *= 10 AND 사원.이름 = 취미.이름;
경력이 10년 이상인 사원의 이름, 부서, 취미활동을 검색하는 SQL문
```

<img src="https://k.kakaocdn.net/dn/boWh8o/btqCd1CnEgM/w0pfFPJl0A8aGqhIzJKjdK/img.png" alt="img" style="zoom:50%;" />\*

#### SELECT 예제 2

<img src="https://k.kakaocdn.net/dn/wHR7r/btqCeuEhuZz/XFRpIe2TAvBXfbgBLYiix1/img.png" alt="img" style="zoom:50%;" />\*

- WINDOW 함수 이용

```
SELECT 부서, 경력
    ROW_NUMBER() OVER (PARTITION BY 부서 ORDER BY 경력 DESC) AS 짬순
FROM 사원;
사원 테이블에서 부서 별로 경력에 대한 일련번호를 구하여 짬순이라는 이름을 붙이는 SQL문
```

<img src="https://k.kakaocdn.net/dn/bDzv2a/btqCgnSemIS/z1qFgOzdE1fkMpcwgsuSkK/img.png" alt="img" style="zoom:50%;" />\*

- GROUP BY : 그룹 지정 검색

```
SELECT 부서, AVG(경력) AS 평균
FROM 사원
GROUP BY 부서;
사원 테이블에서 부서별 경력의 평균을 구하는 SQL문
```

<img src="https://k.kakaocdn.net/dn/cKHnAP/btqCgSqWxVR/FykcN2yB4opD46BsQ0Bk41/img.png" alt="img" style="zoom:50%;" />\*

- 집합 연산자를 이용한 통합 질의

```
SELECT 속성명1, 속성명2, ...
FROM 테이블명
UNION | UNION ALL | INTERSECT | EXCEPT
SELECT 속성명1, 속성명2, ...
FROM 테이블명
[ORDER BY 속성명 [ASC | DESC]];
```

- UNION : 두 SELECT 문의 결과를 통합하고 중복된 행은 한 번만 출력
- UNION ALL : 두 SELECT 문의 결과를 통합하고 중복된 행도 그대로 출력
- INTERSECT : 두 SELECT 문의 결과 중 공통된 행만 출력
- EXCEPT : 첫번째 SELECT 문의 결과에서 두 번째 SELECT 문의 결과를 제외한 행을 출력

# 4. SQL 활용

## 프로시저

---

#### 프로시저의 개요

- 절차형 SQL을 활용하여 특정 기능을 수행하는 일종의 트랜잭션 언어
- 호출을 통해 실행되어 미리 저장해놓은 SQL 작업 수행
- 여러 프로그램에서 호출하여 사용 가능
- 데이터베이스에 저장되어 수행되기 때문에 스토어드 프로시저라고도 함
- 시스템의 일일 마감 작업, 일괄 작업 등에 사용

#### 프로시저의 구성

<img src="https://k.kakaocdn.net/dn/b3mXZa/btqCsHcsZK3/cYrQt6mv8KyuAEz9ayide0/img.png" alt="img" style="zoom:50%;" />\*

- DECLARE : 프로시저의 명칭, 변수, 인수, 데이터 타입을 정의하는 선언부
- BEGIN / END : 프로시저의 시작과 종료를 의미
- CONTROL : 조건문 또는 반복문이 삽입되어 순차적으로 처리
- SQL : DML, DCL이 삽입되어 데이터 관리를 위한 작업(조회, 추가, 수정, 삭제) 수행
- EXCPETION : BEGIN ~ END 안의 구문 실행 시 예외 처리
- TRANSACTION : 수행된 데이터 작업들을 DB에 저장할지 취소할지 결정

#### 프로시저 생성

```
CREATE [OR REPLACE] PROCEDURE 프로시저명(파라미터)
[지역번수 선언]
BEGIN
    프로시저 BODY;
END;
```

- OR REPLACE : 동일한 프로시저 이름이 이미 존재하는 경우 기존의 프로시저를 대체

- 파라미터

  - IN : 호출 프로그램이 프로시저에게 값을 전달할 때 사용

  - OUT : 프로시저가 호출 프로그램에게 값을 전달할 때 사용

  - INOUT : 호출 프로그램이 프로시저에게 값을 전달하고, 프로시저 실행 후 호출 프로그램에게 값을 반환할 때 지정

  - 매개변수명 : 호출 프로그램으로부터 전달받은 값을 저장할 변수의 이름을 지정

  - 자료형 : 변수의 자료형을 지정

- 프로시저 BODY

  - 프로시저의 코드를 기록

  - BEGIN과 END 사이에 적어도 하나의 SQL 문이 존재해야 함

- 사원번호를 입력받아 해당 사원의 지급방식을 S로 변경하는 프로시저

```
CREATE OR REPLACE PROCEDURE emp_change_s(i_사원번호 IN INT)
IS
BEGIN
    UPDATE 급여 SET 지급방식 = 'S' WHERE 사원번호 = i_사원번호;
    EXCEPTION
        WHEN PROGRAM_ERROR THEN
            ROLLBACK;
    COMMIT;
END;
```

#### 프로시저 실행

```
EXECUTE 프로시저명;
EXEC 프로시저명;
CALL 프로시저명;
```

- 위 3가지 명령어 중 하나를 사용

- 위에 정의한 emp_change_s 프로시저를 사원번호 32를 인수로 하여 실행

```
EXECUTE emp_change_s(32);
EXEC emp_change_s(32);
CALL emp_change_s(32);
```

#### 프로시저 제거

```
DROP PROCEDURE 프로시저명;
```

- 위에 정의한 emp_change_s 프로시저를 제거

```
DROP PROCEDURE emp_change_s;
```

## 트리거

---

#### 트리거의 개요

- 데이터베이스 시스템에서 데이터의 삽입 갱신 삭제 등의 이벤트가 발생할 때마다 관련 작업이 자동으로 수행되는 절차형 SQL

- 데이터베이스에 저장

- 데이터 변경 및 무결성 유지 로그 메시지 출력 등의 목적으로 사용

- DCL을 사용할 수 없으며, DCL이 포함된 프로시저나 함수를 호출하는 경우에도 오류 발생

- 트리거에 오류가 있는 경우 트리거가 처리하는 데이터에도 영향을 미침

#### 트리거의 구성

<img src="https://k.kakaocdn.net/dn/b1SOap/btqCtYSzWrt/IAtZiJtHTnx6QE4kcQwQhk/img.png" alt="img" style="zoom:50%;" />\*

- DECLARE : 트리거의 명칭, 변수 및 상수, 데이터 타입을 정의

- EVENT : 트리거가 실행되는 조건

- BEGIN / END : 트리거의 시작과 끝

- CONTROL : 조건문 또는 반복문이 삽입되어 순차적으로 처리

- SQL : DML문이 삽입되어 데이터 관리를 위한 작업(조회, 추가, 수정, 삭제) 수행

- EXCEPTION : BEGIN ~ END 안의 구문에서 예외가 발생 시 처리

#### 트리거의 생성

```
CREATE [OR REPLACE] TRIGGER 트리거명 [동작시기 옵션][동작 옵션] ON 테이블명
REFERENCING [NEW | OLD] AS 테이블명
FOR EACH ROW
[WHEN 조건식]
BEGIN
    트리거 BODY;
END;
```

- 동작 시기 옵션 : 트리거가 실행될 때를 지정

  - AFTER : 테이블이 변경된 후

  - BEFORE : 테이블이 변경되기 전

- 동작 옵션 : 트리거가 실행되게 할 작업의 종류를 지정

  - INSERT : 새로운 튜플을 삽입할 때

  - DELETE : 튜플을 삭제할 때

  - UPDATE : 튜플을 수정할 때

- NEW | OLD : 트리거가 적용될 테이블의 별칭을 지정

  - NEW : 추가되거나 수정에 참여할 튜플들의 집합(테이블)을 의미

  - OLD : 수정되거나 삭제 전 대상이 되는 튜플들의 집합(테이블)을 의미

- FOR EACH ROW : 각 튜플마다 트리거를 적용한다는 의미

- WHEN 조건식 : 트리거를 적용할 튜플의 조건을 지정

- 학생 테이블에 새로운 튜플이 삽입될 때 튜플에 학년 정보가 누락되었으면 학년 필드에 신입생을 치환하는 트리거를 학년 정보\_tri라는 이름으로 정의

```
CREATE TRIGGER 학생정보_tri BEFORE INSERT ON 학생
REFERENCING NEW AS new_table
FOR EACH ROW
WHEN (new_table.학년 IS NULL)
BEGIN
    :new_table.학년 := '신입생';
END;
```

#### 트리거의 제거

```
DROP TRIGGER 트리거명;
```

- 위에 정의한 학생정보\_tri를 제거

```
DROP TRIGGER 학생정보_tri;
```

## 사용자 정의 함수

---

#### 사용자 정의 함수의 개요

- 프로시저와 유사하게 SQL을 사용하여 일련의 작업을 연속적으로 처리하여 종료 시 처리 결과를 단일 값으로 반환하는 절차형 SQL

- 데이터베이스에 저장되어 DML문의 호출에 의해 실행

- 예약어 RETURN을 통해 값이 반환되기 때문에 출력 파라미터가 없음

- 테이블 조작은 할 수 없고 SELECT를 통해 검색만 할 수 있음

- 프로시저를 호출하여 사용할 수 없음

#### 사용자 정의 함수의 구성

<img src="https://k.kakaocdn.net/dn/PrIeI/btqCrPWdc3a/2xNz3k7BOigKWrbya5UeH1/img.png" alt="img" style="zoom:50%;" />\*

- 프로시저의 구성과 유사

- RETURN : 호출 프로그램에 반환할 값이나 변수를 정의

#### 사용자 정의 함수 생성

```
CREATE [OR REPLACE] FUNCTION 사용자 정의 함수명(파라미터)
[지역변수 선언]
BEGIN
    사용자 정의 함수 BODY;
    RETURN 반환;
END;
```

- 프로시저와 유사하며 파라미터에의 구성요소는 IN, 매개변수명, 자료형이 있음

- RETURN 반환값 : 반환할 값이나 반환할 값이 저장된 변수를 호출 프로그램으로 돌려줌

- i*성별코드를 입력받아 1이면 남자, 2면 여자를 반환하는 사용자 정의 함수를 Get_S*성별로 정의

```
CREATE FUNCTION Get_S_성별(i_성별코드 IN INT)
RETURN VARCHAR2
IS
BEGIN
    IF (i_성별코드 = 1) THEN
        RETURN '남자';
    ELSE
        RETURN '여자';
    END IF;
END;
```

#### 사용자 정의 함수 실행

```
SELECT 사용자 정의 함수명 FROM 테이블명;
INSERT INTO 테이블명(속성명) VALUES (사용자 정의 함수명);
DELETE FROM 테이블명 WHERE 속성명 = 사용자 정의 함수명;
UPDATE 테이블명 SET 속성명 = 사용자 정의 함수명;
```

#### 사용자 정의 함수 제거

```
DROP FUNCTION 사용자 정의 함수명;
```

- 위에 정의한 Get*S*성별을 제거

```
DROP FUNCTION Get_S_성별;
```

## DBMS 접속 기술

---

#### DBMS 접속 기술의 개요

- 사용자가 데이터를 접속하기 위해 응용 시스템을 이용하여 DBMS에 접근하는 것

- 응용 시스템은 사용자로부터 매개 변수를 전달받아 SQL을 실행하고 DBMS로부터 전달받은 결과를 사용자에게 전달

- 웹 응용프로그램은 웹 응용 시스템을 통해 DBMS에 접근

- 웹 응용 시스템은 웹 서버와 웹 애플리케이션 서버(WAS)로 구성

  - 사용자 ↔ 웹 서버 ↔ WAS ↔ DBMS

#### DBMS 접속 기술

- DBMS에 접근하기 위해 사용하는 API 또는 프레임워크를 의미

  - API(Application Programming Interface) : 응용 프로그램 개발 시 운영 체제나 DBMS 등을 이용할 수 있도록 규칙 등에 대해 정의해 놓은 인터페이스
  - 프레임워크 : 소프트웨어에서는 특정 기능을 수행하기 위해 필요한 클래스나 인터페이스 등을 모아둔 집합체

* JDBC(Java DataBase Connectivity)

  - Java 언어

* 썬 마이크로시스템에서 출시

  - Java SE에 포함되어 있고 JDBC 클래스는 java.sql, javax.sql에 포함

* 접속하려는 DBMS에 대한 드라이버 필요

- ODBC(Open DataBase Connectivity)

  - 개발 언어와 상관 없음

- 마이크로소프트에서 출시

  - MS-Access, DBase, DB2, Excel, Text 등 다양한 데이터베이스에 접근 가능

* MyBatis

  - JDBC 코드를 단순화하여 사용할 수 있는 SQL Mapping 기반 오픈소스 접속 프레임워크

* SQL 문장을 분리하여 XML 파일을 만들고 Mapping을 통해 SQL을 실행

  - SQL을 거의 그대로 사용할 수 있어 국내 환경에 적합

#### 동적 SQL

- 개발 언어에 삽입되는 SQL 코드를 문자열 변수에 넣어 처리하는 것
- 조건에 따라 SQL 구문을 동적으로 변경하여 처리 가능
- NVL 함수를 사용할 필요가 없음
- 응용 프로그램 수행 시 SQL이 변형될 수 있어 프리컴파일할 때 구문 분석, 접근 권한 확인 등을 할 수 없음

## SQL 테스트

---

#### SQL 테스트의 개요

- SQL이 작성 의도에 맞게 원하는 기능을 수행하는지 검증하는 과정
- 단문 SQL은 코드를 직접 실행한 후 결과를 확인
- 절차형 SQL은 테스트 전에 생성을 통해 구문 오류나 참조 오류의 존재 여부 확인
- 정상적으로 생성된 절차형 SQL은 디버깅을 통해 로직을 검증하고 결과를 통해 최종 확인

#### 단문 SQL 테스트

- DDL, DML, DCL이 포함되어 있는 SQL과 TCL을 직접 실행하여 테스트

- DESCRIBE 명령어를 이용하면 DDL로 작성된 테이블이나 뷰의 속성, 자료형, 옵션들을 확인할 수 있음

- DCL로 설정된 사용자 권한은 사용자 권한 정보가 저장된 테이블을 SELECT문으로 조회하거나 SHOW 명령어로 확인할 수 있음

* Oracle : SELECT \* FROM DBA_ROLE_PRIVES WHERE GRANTEE = 사용자;
* MySQL : SHOW GRANTS FOR 사용자@호스트;

#### 절차형 SQL 테스트

- 프로시저, 사용자 정의 함수, 트리거 등의 절차형 SQL은 디버깅을 통해 기능의 적합성 여부 검증, 실행을 통해 결과를 확인하는 테스트를 수행

- SHOW 명령어를 통해 오류 내용을 확인

  - SHOW ERRORS;

- 데이터베이스에 변화를 줄 수 있는 SQL문은 주석 처리 후 출력문을 이용하여 결과 확인

  - Oracle : DBMS_OUTPUT.ENABLE; / DBMS_OUTPUT.PUT_LINE(데이터);

- MySQL : SELECT 데이터

## ORM

---

#### ORM(Object-Relational Mapping)의 개요

- 객체지향 프로그래밍의 객체와 관계형 데이터베이스의 데이터를 연결하는 기술
- 객체지향 프로그래밍에서 사용할 수 있는 가상의 객체지향 데이터베이스를 만들어 프로그래밍 코드와 데이터 연결
- 프로그래밍 코드 또는 데이터베이스와 독립적이므로 재사용 및 유지보수가 용이
- SQL 코드를 직접 사용하지 않기 때문에 직관적이고 간단하게 데이터 조작 가능

#### ORM 프레임워크

- ORM을 구현하기 위한 구조와 구현을 위해 필요한 여러 기능들을 제공하는 소프트웨어
- JAVA : JPA, Hibernate, EclipseLink, DataNucleus, Ebean 등
- C++ : ODB, QxOrm 등
- Python : Django, SQLAlchemy, Storm 등
- iOS : DatabaseObjects, Core Data 등
- .NET : NHibernate, DatabaseObjects, Dapper 등
- PHP : Doctrine, Propel, RedBean 등

#### ORM의 한계

- 프레임워크가 자동으로 작성하기 때문에 의도대로 작성되었는지 확인할 필요가 있음
- 객체지향적 사용을 고려, 설계한 데이터베이스가 아닌 경우 프로젝트가 크고 복잡할수록 ORM 기술을 적용하기 어려움
- 기존의 기업들은 ORM 고려하지 않은 데이터베이스를 사용하고 있어 ORM에 적합하게 변환하려면 많은 시간과 노력이 필요

## 쿼리 성능 최적화

---

#### 쿼리 성능 최적화의 개요

- 데이터 입출력 애플리케이션의 성능 향상을 위해 SQL 코드를 최적화

- 최적화 전 APM을 사용하여 최적화할 쿼리 선정

  - APM(Application Performance Management/Monitoring) : 애플리케이션의 성능 관리를 위해 다양한 모니터링 기능을 제공하는 도구

- RBO(Rule Based Optimizer) : 규칙 기반 옵티마이저

- CBO(Cost Based Optimizer) : 비용 기반 옵티마이저

<img src="https://k.kakaocdn.net/dn/ckjOUW/btqCqMyPjBa/QrzfQlGSkvijENlO8ZQzZ1/img.png" alt="img" style="zoom: 80%;" />\*

#### 실행 계획

- DBMS의 옵티마이저가 수립한 SQL 코드의 실행 절차와 방법을 의미
- EXPLAIN 명령어를 통해 확인
- 그래픽이나 텍스트로 표현
- 요구사항을 처리하기 위한 연산 순서가 적혀있고 연산에는 조인, 테이블 검색, 필터, 정렬 등이 있음

#### 쿼리 성능 최적화

- 실행 계획에 표시된 연산 순서, 조인 방식, 테이블 조회 방법 등을 참고하여 SQL문이 더 빠르고 효율적으로 작동하도록 코드와 인덱스를 재구성

- SQL 코드 재구성

  - WHERE 절을 추가하여 일부 레코드만 조회

  - WHERE 절에 연산자 사용 자제

  - 특정 데이터 확인 시 IN보다 EXISTS 사용

  - 힌트를 활용하여 실행 계획의 액세스 경로 및 조인 순서 변경

- 인덱스 재구성

  - SQL 코드에서 조회되는 속성과 조건들을 고려하여 인덱스 구성

  - 인덱스를 추가하거나 기존 인덱스의 열 순서 변경

  - 단일 인덱스로 쓰기나 수정 없이 읽기로만 사용되는 경우 IOT(Index-Organized Table)로 구성
