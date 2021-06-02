---
path: "/2021 정보 처리 기사 실기 요약 8-SQL 응용/"
category: "정보처리기사 실기 요약"
tags: ["정보처리기사 실기 요약", "정보처리기사", "정처기"]
title: "2021 정보 처리 기사 실기 요약 8-SQL 응용"
date: "2021-05-12T12:45:00.000Z"
summary: "2021 정보 처리 기사 SQL 응용 요약 입니다. 정처기 공부를 할 때 활용하세요."
images: ["images/1.jpg"]
---

> 정보처리기사 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 책을 참고해서 공부하세요

> 2021 정보 처리 기사 SQL 응용 입니다. 정처기 공부를 할 때 활용하세요.



# 1. DDL

---

* `DDL` : _DB 구조, 데이터 형식, 접근 방식 등 DB를 구축하거나 수정할 목적으로 사용하는 언어_

- DDL은 번역한 결과가 데이터 사전이라는 특별한 파일에 여러 개의 테이블로서 저장 (CREATE SCHEMA, CREATE DOMAIN, CREATE TABLE, CREATE VIEW, CREATE INDEX, ALTER TABLE, DROP)

- `CREATE TABLE`  : 테이블을 정의하는 명령문
  - `PRIMARY KEY` : 기본키로 사용할 속성 또는 속성의 집합을 지정
  - `UNIQUE` : 대체키로 사용할 속성 또는 속성의 집합을 지정하는 것으로 UNIQUE로 지정한 속성은 중복된 값을 가질 수 없음
  - `ON DELETE` : 참조 테이블의 튜플이 삭제되었을 때 기본 테이블에 취해야 할 사항을 지정(NO ACTION, CASCADE, SET NULL, SET DEFAULT)
  - `ON UPDATE` : 참조 테이블의 참조 속성 값이 변경되었을 때 본 테이블에 취해야 할 사항을 지정(NO ACTION, CASCADE, SET NULL, SET DEFAULT)
  - `CONSTRAINT` : 제약 조건의 이름을 지정. 이름을 지정할 필요가 없으면 CHECK절만 사용하여 속성 값에 대한 제약 조건을 명시
  - `CHECK` : 속성 값에 대한 제약 조건을 정의

```sql
CREATE TABLE 학생(
    이름 VARCHAR(15) NOT NULL, 
    학번 CHAR(8), 
    전공 CHAR(8), 
    성별 VARCHAR(1), 
    생년월일 DATE, 
    PRIMARY KEY(학번), 
    FOREIGN KEY(전공) REFERENCES 학과(학과코드)
ON DELETE SET NULL
ON UPDATE CASCADE, 
CONSTRAINT 생년월일제약 CHECK(생년월일>='1980-01-01'));
```

* 다른 테이블을 이용한 테이블 정의 : 기존 테이블의 정보를 이용해 새로운 테이블을 정의

```sql
CREATE TABLE 재학생 
AS SELECT 학번, 이름
FROM 학생;
```

* `CREATE VIEW ` : 뷰(View)를 정의하는 명령문
  * SELECT문을 서브 쿼리로사용하여 SELECT문의 결과로서 뷰를 생성
  * 서브 쿼리인 SELECT문에는 UNION이나 ORDER BY절을 사용할 수 없음
  * 속성명을 기술하지 않으면 SELECT문의 속성명이 자동으로 사용

```sql
CREATE VIEW 건축공학과(이름, 학번)
AS SELECT 이름, 학번
FROM 학생
WHERE 전공='건축';
```

* `ALTER TABLE` : 테이블에 대한 정의를 변경
  * `ADD` : 새로운 속성(열)을 추가
  *  `MODIFY` : 특정 속성의 정의를 변경
  * `DROP COLUMN` : 특정 속성을 삭제

```sql
ALTER TABLE 학생 ADD 학년 VARCHAR(3);
ALTER TABLE 학생 MODIFY 학번 VARCHAR(10) NOT NULL;
```

* `DROP` : 기본 테이블 제거
  * `CASCADE` : 제거할 요소를 참조하는 다른 모든 개체를 함께 제거. 즉 주 테이블의 데이터 제거시 각 외래키와 관계를 맺고 있는 모든 데이터를 제거하는 참조 무결성 제약 조건을 설정하기 위해 사용
  * `RESTRICTED` : 다른 개체가 제거할 요소를 참조중일 때는 제거를 취소

```sql
DROP TABLE 학생 CASCADE;
```



# 2. DCL

---

- `DCL(데이터 제어어)` : 데이터의 보안, 무결성, 회복, 병행 제어 등을 정의
  - DCL은 데이터베이스 관리자(DBA)가 데이터 관리를 목적으로 사용
  - GRANT, REVOKE, COMMIT, ROLLBACK, SAVEPOINT
- `GRANT / REVOKE`
  - 데이터베이스 관리자가 데이터베이스 사용자에게 권한을 부여하거나 취소
  - `GRANT` : 권한 부여
  - `REVOKE` : 권한 취소
- 사용자등급 지정 및 해제
  - `DBA ` : 데이터베이스 관리자
  - `RESOURCE` : 데이터베이스 및 테이블 생성 가능자
  - `CONNECT` : 단순 사용자

```sql
GRANT RESOURCE TO NABI
-- 사용자 ID가 NABI인 사람에게 데이터베이스 및 테이블 생성 가능 권한 부여
GRANT CONNECT TO STAR;
-- 사용자 ID가 STAR인 사람에게 단순 사용자 권한 부여
REVOKE 사용자등급 FROM 사용자_ID_리스트
```

- 테이블 및 속성에 대한 권한 부여 및 취소
  - 권한 종류 : ALL, SELECT, INSERT, DELETE, UPDATE, ALTER
  - `WITH GRANT OPTION` : 부여받은 권한을 다른 사용자에게 다시 부여할 수 있는 권한을 부여
  - `GRANT OPTION FOR` : 다른 사용자에게 권한을 부여할 수 있는 권한을 취소
  - `CASCADE` : 권한 취소 시 권한을 부여받았던 사용자가 다른 사용자에게 부여한 권한도 연쇄적으로 취소

```sql
GRANT ALL ON 고객 TO NABI WITH GRANT OPTION
-- 사용자 ID가 NABI인 사람에게 테이블에 대한 모든 권한과 다른사람에 대한 권한 부여
GRANT ALL ON 학생 TO YDH;
-- YDH에게 학생 테이블의 모든 권한 부여
GRANT DELETE ON 강좌 TO YDH WITH GRANT OPTION;
-- YDH에게 강좌 테이블의 삭제 권한과 삭제 권한을 다른 사람에게 부여할 수 있는 권한 부여
REVOKE SELECT, INSERT, DELETE ON 교수 FROM YDH
-- YDH에게 부여된 교수에 대한 SELECT, INSERT, DELETE 권한 취소
REVOKE UPDATE ON 수강 FROM YDH CASCADE
-- YDH에 부여된 UPDATE 권한과 권한 부여 권한, 다른사람에게 부여한 권한 모두 취소
REVOKE GRANT OPTION FOR UPDATE ON 고객 FROM STAR;
-- 사용자 ID가 STAR 인 사람에게 부여한 고객 테이블에 대한 권한 중 UPDATE 권한을 다른 사람에게 부여할 수 있는 권한만 취소
```

- `COMMIT` : 트랜잭션이 성공적으로 끝나면 데이터베이스가 새로운 일관성 상태를 가지기 위해 변경된 모든 내용을 데이터베이스에 반영하여야 할 때
- `ROLLBACK` : 아직 COMMIT되지 않은 변경된 모든 내용들을 취소하고 데이터베이스를 이전 상태로 되돌림
- `SAVEPOINT` : 트랜잭션 내에 ROLLBACK 할 위치인 저장점을 지정하는 명령어, 저장점을 지정할 때는 이름을 부여하며, ROLLBACK 시 지정된 저장점까지의 트랜잭션 처리 내용이 취소



# 3. DML

---

- `DML(데이터 조작어)` : 데이터베이스 사용자가 응용 프로그램이나 질의어를 통해 저장된 데이터를 실질적으로 관리하는데 사용되는 언어
  - SELECT, INSERT, DELETE, UPDATE

* `삽입문(INSERT INTO)` : 기본 테이블에 새로운 튜플을 삽입

```sql
INSERT INTO 사원(이름, 부서) 
VALUES('YDH','인터넷')

 -- 사원 테이블에 (이름-YDH, 부서-인터넷) 입력
 
 INSERT INTO 사원 (이름, 부서, 생일, 주소, 기본급) 
 VALUES ('YDH', '기획', '2020-10-03', '대전', 90);
 
 -- 사원 테이블에 ('YDH', '기획', '2020-10-03', '대전', 90) 삽입
 
 INSERT INTO 편집부원(이름, 생일, 주소, 기본급)
 SELECT 이름, 생일, 주소, 기본급 FROM 사원
 WHERE 부서='편집';
 
 -- 사원 테이블에 있는 편집부의 모든 튜플을 편집부원(이름, 생일, 주소, 기본급) 테이블에 삽입
```

- `삭제문(DELETE FROM)` : 기본 테이블에 있는 튜플들 중에서 특정 튜플을 삭제

```sql
DELETE
FROM 사원
WHERE 이름='YDH1';

-- 사원 테이블에서 이름이 YDH1인 튜플 삭제

DELETE 
FROM 사원
-- 사원 테이블의 모든 레코드 삭제
```

- `갱신문(UPDATE SET)` :기본 테이블에 있는 튜플들 중에서 특정 튜플의 내용을 변경

```sql
UPDATE 사원
SET 주소='세종',기본급 = 기본급 + 90
WHERE 이름='YDH2';
-- 사원 테이블에서 YDH2의 주소를 세종으로, 기본급을 90만원 인상
```

# 4. DML - SELECT(1)

---

```sql
SELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블 명.]속성명, …] [, 그룹함수(속성명) [AS 별칭]]
FROM 테이블명[, 테이블명, …] [WHERE 조건]
[GROUP BY 속성명, 속성명, …] [HAVING 조건]
[ORDER BY 속성명 [ASC | DESC]]
```

- `PREDICATE` : 불러올 튜플 수를 제한할 명령어를 기술
  - _ALL_ : 모든 튜플
  - _DISTINCT_ : 중복된 튜플이 있으면 그 중 첫 번째 한 개만
  - _DISTINCTROW_ : 중복된 튜플을 검색하지만 선택된 속성의 값이 아닌, 튜플 전체를 대상
- 속성명 : 검색하여 불러올 속성(열) 및 수식들을 지정
  - 기본 테이블을 구성하는 모든 속성을 지정할 때 는 '\*' 를 기술
  - 두 개 이상의 테이블을 대상으로 검색할 때는 (테이블명.속성명)으로 표현함
  - AS : 속성 및 연산의 이름을 다른 제목으로 표시
- `FROM절` : 질의에 의해 검색될 데이터들을 포함하는 테이블명
- `WHERE절` : 검색할 조건
- `ORDER BY절` : 특정 속성을 기준으로 정렬하여 검색할 때 사용

* `기본 검색`
* 사원 테이블의 모든 튜플 검색

```sql
SELECT * FROM 사원;
SELECT 사원.* FROM 사원;
SELECT 이름, 부서, 생일, 주소, 기본급 FROM 사원;
SELECT 사원.이름, 사원.부서, 사원.생일, 사원.주소, 사원.기본급 FROM 사원;

이름 부서 생일 주소 기본급
----------------------------------
홍길동  기획 61/04/05 망원동120
임꺽정  인터넷  69/09/01 서교동 80
황진이  편집 75/07/21 합정동100
김선달  편집 73/10/22 망원동 90
성춘향  기획 64/02/20 대흥동100
장길산  편집 67/03/11 상암동120
일지매  기획 78/04/29 연남동110
강건달  인터넷  80/12/11  90
```

* 사원 테이블에서 주소만 검색하되 같은 주소는 한번만 출력

```SQL
SELECT DISTINCT 주소 FROM 사원;

주소                                                                                                  
------
망원동
연남동
서교동
합정동
상암동
대흥동
```

* 사원 테이블에서 기본급에 특별수당 10을 더한 월급을 '~부서의 ~의 월급 ~'으로 출력(오라클)

```SQL
SELECT 부서 || '부서의' AS 부서2, 이름 || '의 월급' AS 이름2, 기본급 + 10 AS 기본급2
FROM 사원;


부서2  이름2 기본급2
---------------------------
기획부서의 홍길동의 월급130
인터넷부서의  임꺽정의 월급 90
편집부서의 황진이의 월급110
편집부서의 김선달의 월급100
기획부서의 성춘향의 월급110
편집부서의 장길산의 월급130
기획부서의 일지매의 월급120
인터넷부서의  강건달의 월급100
```

* `조건 지정 검색`
* 사원 테이블에서 기획부의 모든 튜플

```SQL
SELECT *
FROM 사원
WHERE 부서='기획';

이름    부서   생일    주소 기본급
------------------------------
홍길동  기획 61/04/05 망원동 120
성춘향  기획 64/02/20 대흥동 100
일지매  기획 78/04/29 연남동 110
```

* 사원 테이블에서 부서는 '기획'이고 기본급이 110보다 큰 튜플을 검색하는 SQL문을 작성하시오

```SQL
SELECT * 
FROM 사원
WHERE 부서='기획' AND 기본급 > 110;

이름    부서   생일    주소 기본급
------------------------------
홍길동  기획 61/04/05 망원동 120
```

* 사원 테이블에서 '부서'가 '기획'이거나 '인터넷'인 튜플 검색

```SQL
SELECT * 
FROM 사원
WHERE 부서='기획' OR 부서='인터넷';

SELECT * 
FROM 사원
WHERE 부서 IN ('기획','인터넷');

이름    부서     생일    주소   기본급
------------------------------------
임꺽정  인터넷  69/09/01 서교동  80
성춘향  기획    64/02/20 대흥동  100
일지매  기획    78/04/29 연남동  110
강건달  인터넷  80/12/11         90
```

* 사원 테이블에서 성이 '김'인 사람의 튜플 검색

```SQL
SELECT * 
FROM 사원
WHERE 이름 LIKE '김%';

이름   부서   생일    주소 기본급
---------------------------------
김선달  편집 73/10/22 망원동 90
```

* 사원 테이블에서 생일이 '69-01-01'에서 '73-12-31'

```SQL
SELECT * 
FROM 사원
WHERE 생일 BETWEEN '69-01-01' AND '73-12-31';

이름     부서   생일     주소  기본급
---------------------------------
임꺽정  인터넷  69/09/01 서교동 80
김선달  편집    73/10/22 망원동 90
```

* 사원 테이블에서 주소가 NULL인 튜플 검색

```SQL
SELECT * 
FROM 사원
WHERE 주소 IS NULL;

이름    부서    생일    주소   기본급
-----------------------------------
강건달  인터넷  80/12/11       90
```

* `정렬 검색`
* 사원 테이블에서 주소를 기준으로 내림차순 정렬시켜 상위 2개 튜플만 검색(오라클)

```SQL
SELECT  * 
FROM 사원
WHERE ROWNUM <= 2
ORDER BY 주소 DESC;

이름    부서     생일    주소 기본급
------------------------------------
임꺽정  인터넷  69/09/01 서교동 80
홍길동  기획    61/04/05 망원동 120
```

* 사원 테이블에서 부서를 기준으로 오름차순 정렬하고 같은 부서에 대해서는 이름을 기준으로 내림차순

```SQL
SELECT  * 
FROM 사원
ORDER BY 부서 ASC, 이름 DESC;

이름    부서    생일   주소  기본급
-----------------------------------
홍길동  기획 61/04/05 망원동 120
일지매  기획 78/04/29 연남동 110
성춘향  기획 64/02/20 대흥동 100
임꺽정  인터넷  69/09/01 서교동 80
강건달  인터넷  80/12/11     90
황진이  편집 75/07/21 합정동 100
장길산  편집 67/03/11 상암동 120
김선달  편집 73/10/22 망원동 90
```

* `하위 질의`
* 취미가 나이트댄스인 사원의 이름과 주소를 검색

```SQL
SELECT 이름, 주소
FROM 사원
WHERE 이름=(SELECT 이름 FROM 여가활동 WHERE 취미='나이트댄스');

이름    주소                                                                                                 
---------------
성춘향  대흥동                                                                                              
```

* 취미 활동을 하지 않는 사원

```SQL
SELECT * 
FROM 사원
WHERE 이름 NOT IN (SELECT 이름 FROM 여가활동);


이름    부서    생일   주소 기본급
---------------------------------
강건달  인터넷  80/12/11      90
홍길동  기획 61/04/05 망원동 120
황진이  편집 75/07/21 합정동 100
장길산  편집 67/03/11 상암동 120
```

* `복수 테이블 검색`
* 경력이 10년 이상인 사원의 이름, 부서, 취미, 경력 검색

```SQL
SELECT 사원.이름, 사원.부서, 여가활동.취미, 여가활동.경력
FROM 사원, 여가활동
WHERE 여가활동.경력 >= 10 AND 사원.이름 = 여가활동.이름;

이름   부서  취미  경력
---------------------------
김선달  편집 당구 10
일지매  기획 태껸 15
```





# 5. DML - SELECT(2)



| 그룹 함수명   | 속성           |
| ------------- | -------------- |
| COUNT(속성명) | 그룹별 튜플 수 |
| MAX(속성명)   | 그룹별 최대값  |
| MIN(속성명)   | 그룹별 최소값  |
| SUM(속성명)   | 그룹별 합계    |
| AVG(속성명)   | 그룹별 평균    |

- `HAVING절` : GROUP BY와 함께 사용, 그룹에 대한 조건 지정
- `ORDER BY절` : 특정 속성을 기준으로 정렬하여 검색할 때 사용
  - 속성명 : 정렬의 기준이 되는 속성명을 기술
  - _ASC_ : 오름차순. 생략하면 오름차순으로 지정
  - _DESC_ : 내림차순

* WINDOW 함수 이용 검색
* 상여금 테이블에서 '상여내역'별로 '상여금'에 대한 일련 번호 구하기

```sql
SELECT 상여내역, 상여금
	ROW_NUMBER() OVER (PARTITION BY 상여내역 ORDER BY 상여급 DESC) AS NO
FROM 상여금;

상여내역   상여금         NO
---------------------------
야간근무    120         1
야간근무 	80          2
야간근무 	80          2
야간근무 	50          4
연장근무    100         1
연장근무    100         2
연장근무    40          3
연장근무    30          4
특별근무    90          1
특별근무    90          2
특별근무    90          3
특별근무    80          4
```

* 상여금 테이블에서 '상여내역'별로 '상여금'에 대한 순위를 구하기

```SQL
SELECT 상여내역, 상여금, RANK() OVER (PARTITION BY 상여내역 ORDER BY 상여금 DESC) AS 상여금순위
FROM 상여금;

상여내역    상여금    상여순위
--------- ---------- ----------
야간근무   120          1
야간근무    80          2
야간근무    80          2
야간근무    50          4
연장근무   100          1
연장근무   100          1
연장근무    40          3
연장근무    30          4
특별근무    90          1
특별근무    90          1
특별근무    90          1
특별근무    80          4
```

* 그룹 지정 검색
* 상여금 테이블에서 '부서'별 '상여금'의 평균

```SQL
SELECT 부서, AVG(상여금) AS 평균
FROM 상여금
GROUP BY 부서;

부서              평균
-------------------------
기획            102.5
인터넷             70
편집               66
```

* 상여금 테이블에서 '부서'별 튜플 수

```SQL
SELECT 부서, COUNT(*) AS 사원수
FROM 상여금
GROUP BY 부서;

부서         사원수
-------------------
기획         4
인터넷       3
편집         5
```

* 상여금 테이블에서 '상여금'이 100 이상인 사원이 2명 이상인 '부서'의 튜플 수

```SQL
SELECT 부서, COUNT(*) AS 사원수
FROM 상여금
WHERE 상여금 >= 100
GROUP BY 부서
HAVING COUNT(*) >= 2

부서         사원수
-------------------
기획         3
```

* 상여금 테이블의 '부서', '상여내역', 그리고 '상여금' 에 대해 부서별 상여내역별 소계와 전체합계(ROLLUP)

```SQL
SELECT 부서, 상여내역, SUM(상여금) AS 상여금합계
FROM 상여금
GROUP BY ROLLUP(부서, 상여내역);


부서       상여내역    상여금합계
----------------------------------
기획     야간근무        120
기획     연장근무        200
기획     특별근무         90
기획                    410
편집     야간근무        210
편집     연장근무         40
편집     특별근무         80
편집                    330
인터넷   연장근무         30
인터넷   특별근무        180
인터넷                  210
                       950
```

* 상여금 테이블의 '부서', '상여내역', 그리고 '상여금' 에 대해 부서별 상여내역별 소계와 전체합계(CUBE)

```SQL
SELECT 부서, 상여내역, SUM(상여금) AS 상여금합계
FROM 상여금
GROUP BY CUBE(부서, 상여내역);
 

부서       상여내역    상여금합계
---------------------------------
                        950
         야간근무        330
         연장근무        270
         특별근무        350
기획                     410
기획     야간근무        120
기획     연장근무        200
기획     특별근무         90
편집                     330
편집     야간근무        210
편집     연장근무         40
편집     특별근무         80
인터넷                   210
인터넷   연장근무         30
인터넷   특별근무        180
```



# 6. DML - JOIN

---

- 2개의 테이블에 대해 연관된 튜플들을 결합하여, 하나의 새로운 릴레이션을 반환
- JOIN은 일반적으로 FROM절에 기술하지만, 릴레이션이 사용되는 어느 곳에서나 사용 가능
- `INNER JOIN` : 가장 일반적인 JOIN의 형태로, 관계가 설정된 두 테이 블에서 조인된 필드가 일치하는 행만을 표시
- WHERE절을 이용한 표기 형식

```sql
SELECT [테이블명1.]속성명, [테이블명2.]속성명, …
FROM 테이블명1, 테이블명2, …
WHERE 테이블명1.속성명 = 테이블명2.속성명;
```

- NATURAL JOIN을 이용한 표기 형식

```sql
SELECT [테이블명1.]속성명, [테이블명2.]속성명, …
FROM 테이블명1 JOIN 테이블명2 USING(속성명);
```

# 7. DML - OUTER JOIN

---

- 릴레이션에서 JOIN 조건에 만족하지 않는 튜플도 결과로 출력하기 위한 JOIN 방법
- `LEFT OUTER JOIN` : INNER JOIN의 결과를 구한 후, 우측 항 릴레이션의 어떤 튜플과도 맞지 않는 좌측 항의 릴레이션에 있는 튜플들에 NULL 값을 붙여서 INNER JOIN의 결과에 추가

```sql
SELECT [테이블명1.] 속성명, [테이블명2.] 속성명, …
FROM 테이블명1 LEFT OUTER JOIN 테이블명2
ON 테이블명1.속성명 = 테이블명2.속성명;
```

- `RIGHT OUTER JOIN` : INNER JOIN의 결과를 구한 후, 좌측 항 릴레이션의 어떤 튜플과도 맞지 않는 우측 항의 릴레이션에 있는 튜플들에 NULL 값을 붙여서 INNER JOIN의 결과에 추가

```sql
SELECT [테이블명1.]속성명, [테이블명2.]속성명, …
FROM 테이블명1 RIGHT OUTER JOIN 테이블명2
ON 테이블명1.속성명 = 테이블명2.속성명;
```



# 8. PL/SQL

---

### 1) PL/SQL 개요

* 최근의 프로그래밍 언어의 특성을 수용한 SQL의 확장 기능

### 2) 사용시 장점

* 컴파일이 필요 없어 script 생성 및 변경 후 바로 실행 가능
* 프로그램 개발의 모듈화 가능
* 식별자 선언 가능
* 절차적 언어 구조로 된 프로그램 작성 가능
* 에러 처리 가능
* 성능 향상

### 3) 프로시저(Procedure)

- _절차형 SQL을 활용하여 특정 기능을 수행하는 일종의 트랜잭션 언어_
- 호출을 통해 실행되어 미리 저장해 놓은 SQL 작업을 수행
- 시스템의 일일 마감 작업, 일괄 작업 등에 주로 사용

* _이벤트 : (DECLARE / BIGIN / END)_

```plsql
CREATE TABLE 대학교
( 
    학교 VARCHAR2(30),
    성적 NUMBER(3),
    학과 VARCHAR2(30)
);
commit;
```

* 기본 형식
  * `DECLARE` :프로시저 명칭, 변수, 인수, 데이터 타입 정의
  * `BEGIN / END` : 프로시저의 시작과 종료
  * `CONTROL` : 조건문 / 반복문 삽입되어 순차처리
  * `SQL` : DML, DCL이 삽입되어 데이터 관리를 위한 CRUD 수행
  * `EXCEPTION` : BEGIN ~ END 안의 구문 실행 시 예외가 발생하면 이를 처리하는 방법 정의
  * `TRANSACTION` : 수행된 데이터 작업들을 DB에 적용할지 취소할지 결정

```sql
DECLARE (필수)
BEGIN (필수)
  * CONTROL
  * SQL
  * EXCEPTION
  * TRANSACTION
END (필수)
```

- 생성

```sql
CREATE OR REPLACE PROCEDURE EX_PROC(
    P_성적 IN NUMBER,
    P_학과 IN VARCHAR2
)
IS 
P_학교 VARCHAR2(30) := '서울대학교';
BEGIN
    INSERT INTO 대학교(학교, 성적, 학과) VALUES (P_학교, P_성적, P_학과);
    EXCEPTION
        WHEN PROGRAM_ERROR THEN
            ROLLBACK;
    COMMIT;
END EX_PROC;
```

- 실행

```sql
EXECUTE EX_PROC(500,'물리학과');
EXEC EX_PROC(500,'물리학과');
CALL EX_PROC(500,'물리학과');
```

- 제거

```sql
DROP PROCEDURE EX_PROC;
```

### 4) 트리거(Trigger)

* _데이터베이스 시스템에서 데이터의 삽입, 갱신, 삭제 등의 이벤트가 발생할 때마다 관련 작업이 자동으로 수행되는 절차형 SQL_

- 데이터베이스에 저장되며, 데이터 변경 및 무결성 유지, 로그 메시지 출력 등의 목적으로 사용
- _이벤트 : (DECLARE/EVENT/BEGIN/END)_

```sql
DECLARE (필수)
EVENT (필수)
BEGIN (필수)
  * CONTROL
  * SQL
  * EXCEPTION
END (필수)
```

- 생성

```sql
CREATE TRIGGER EX_TRIG BEFORE INSERT ON 대학교
REFERENCING NEW AS NEW_TABLE
FOR EACH ROW
WHEN (NEW_TABLE.학년 IS NULL)
    BEGIN
        :NEW_TABLE.학년 := 1;
    END;
```

- 제거

```sql
DROP TRIGGER EX_TRIG;
```



### 5) 사용자 정의 함수

* 프로시저와 유사하게 _SQL을 사용하여 일련의 작업을 연속적으로 처리하며, 종료 시 처리 결과를 단일 값으로 반환하는 절차형 SQL_

- 데이터베이스에 저장되어 DML문의 호출에 의해 실행
- 예약어 RETURN을 통해 값을 반환하기 때문에 출력 파라미터가 없음

* _이벤트 : (DECLARE/BEGIN/END)_

```sql
DECLARE (필수)
BEGIN (필수)
  * CONTROL
  * SQL
  * EXCEPTION
  * RETURN (필수)
END (필수)
```

- 생성

```sql
CREATE [OR REPLACE] FUNCTION 사용자 정의 함수명(파라미터) [지역변수 선언]
BEGIN
  사용자 정의 함수 BODY;
RETURN 반환값;
END;

```

- 실행

```sql
SELECT 함수명 FROM 테이블명;
INSERT INTO 테이블명(속성명) VALUES (함수명);
DELETE FROM 테이블명 WHERE 속성명 = 함수명;
UPDATE 테이블명 SET 속성명 = 함수명;
```

- 제거

```sql
DROP FUNCTION 함수명;
```

# 11. 제어문

---

절차형 SQL은 SQL 명령어가 서술된 순서에 따라 위에서 아래로 차례대로 실행되는데, 이러한 진행 순서를 변경하기 위해 사용하는 명령문

* `IF문` : 조건에 따라 실행할 문장을 달리하는 제어문

```plsql
 -- IF 단일
DECLARE 
    X INT := 20;
BEGIN
    IF X > 10 THEN
        DBMS_OUTPUT.PUT_LINE('TRUE');
    END IF;
END;

-- TRUE

-- IF / ELSE
DECLARE 
    X INT := 10;
BEGIN
    IF X > 10 THEN
        DBMS_OUTPUT.PUT_LINE('TRUE');
    ELSE
        DBMS_OUTPUT.PUT_LINE('FALSE');        
    END IF;
END;

-- FALSE

-- IF / ELSIF / ELSE

DECLARE 
    X INT := 0;
BEGIN
    IF X > 20 THEN
        DBMS_OUTPUT.PUT_LINE('TRUE20');
    ELSIF X > 10 THEN
        DBMS_OUTPUT.PUT_LINE('TRUE10');   
    ELSE
        DBMS_OUTPUT.PUT_LINE('FALSE');        
    END IF;
END;

-- FALSE
```

* `LOOP` : 조건에 따라 실행할 문장을 수행하는 제어문

```PLSQL
DECLARE
    I INT := 0;
    I_SUM INT := 0;
BEGIN
    LOOP
         I := I+1;
         I_SUM :=I_SUM + I;
         EXIT WHEN I >= 10;
    END LOOP;
    DBMS_OUTPUT.PUT_LINE(I_SUM);
END;
-- 55
```

* `FOR LOOP` : 초기값부터 종료값까지 증가하면서 실행할 문장 반복 수행

```plsql
DECLARE
    I_SUM INT := 0;
BEGIN
    FOR I IN 1..10
    LOOP
        I_SUM := I_SUM + I;
    END LOOP;
    DBMS_OUTPUT.PUT_LINE(I_SUM);
END;

-- 55
```

* `WHILE LOOP` : 조건이 참인 동안 실행할 문장을 반복 수행

```plsql
DECLARE
	I INT := 0;
	I_SUM INT := 0;
BEGIN
    WHILE I < 10
    LOOP
        I := I+1;
        I_SUM := I_SUM + I;
    END LOOP;
    DBMS_OUTPUT.PUT_LINE(I_SUM);
END;
```

* `CONTINUE` : 반복문의 실행을 제어하기 위해 사용하는 예약어

```plsql
BEGIN
    FOR I IN 1..3 LOOP
        DBMS_OUTPUT.PUT_LINE(I);
        DBMS_OUTPUT.PUT_LINE('HELLO');
        CONTINUE WHEN I = 2;
        DBMS_OUTPUT.PUT_LINE('WORLD');
    END LOOP;
END;


1
HELLO
WORLD
2
HELLO
3
HELLO
WORLD
```



# 12. SQL - 커서(Cursor)

---

- 커서 : 쿼리문의 처리 결과가 저장되어 있는 메모리 공간을 가리키는 포인터. 커서의 수행은 열기, 패치, 닫기의 세 단계로 진행
- `묵시적 커서` : 내부에서 자동으로 생성되어 사용, DBMS 자체적으로 열리고(Open) 패치(Fetch)되어 사용이 끝나면 닫히지만(Close) 커서의 속성을 조회하여 사용된 쿼리 정보를 열람하는 것이 가능
  - `SQL%FOUND`: 쿼리 수행의 결과로 패치(Fetch)된 튜플 수가 1개 이상이면 TRUE
  - `SQL%NOTFOUND` : 쿼리 수행의 결과로 패치(Fetch)된 튜플 수가 0개이면 TRUE
  - `SQL%ROWCOUNT` : 쿼리 수행의 결과로 패치(Fetch)된 튜플 수를 반환
  - `SQL%ISOPEN` : 커서가 열린(Open) 상태이면 TRUE , 묵시적 커서는 자동으로 생성된 후 자동으로 닫히기 때문에 항상 FALSE
- `명시적 커서` : 사용자가 직접 정의해서 사용
  - 사용자가 직접 정의해서 사용하는 커서로, 주로 절차형 SQL에서 SELECT문의 결과로 반환되는 여러 튜플들을 제어하기 위해 사용
  - 커서는 기본적으로 열기 ,패치, 닫기 순으로 이루어지며, 명시적 커서로 사용하기 위해서는 열기 전에 선언을 해야함
