---
path: "/2020 정보처리기사 실기 요점 정리(4)-서버 프로그램 구현(3)/"
category: "정보처리기사 실기"
tags: ["정보처리기사 실기", "정보처리기사"]
title: "2020 정보처리기사 실기 요점 정리(4)-서버 프로그램 구현(3)"
date: "2020-06-04T15:15:00.000Z"
summary: "서버 프로그램 구현"
images: ["images/1.jpg"]
---

> 혼자 공부하면서 정리한 내용입니다. 자세한 내용은 책을 찾아서 공부하세요
>
> 2020 정보 처리 기사 실기 요약 / 요점 - 4. 서버 프로그램 구현 (3)



# 03. 서버 프로그램 구현

---



## 1) 서버 프로그램 구현



### (1) 서버 프로그램 구현의 개념



### (2) 서버 프로그램 구현 절차

* Back End
  * DTO/VO 구현
  * SQL문 구현
  * DAO 구현
  * Service 구현
  * Controller 구현

* Front End

  * 화면 구현

  

### (3) 서버 프로그램의 세부 구현

* DTO(Data Transfer Object), VO(Value Object) 구현 : 화면에서 전달받은 회원 정보로 데이터베이스에 저장하는 객체를 구현

```java
public class JoinVO {
    String id; // 회원 아이디
    String password; // 회원 비밀번호
    String name; // 회원 이름
    public void setId(String id){
        return id = id;
    }
    public void getId(){
        return id;
    }
}
```

* SQL 문 구현

```sql
---SQL 구현
CREATE TABLE CUSTOMER
(
	ID VARCHAR(20) NOT NULL COMMENT '아이디',
    PASSWORD VARCHAR(20) COMMENT '패스워드',
    NAME VARCHAR(10) COMMENT '이름',
    PRIMARY KEY(PK_ID)
) COMMENT '회원정보';
```

```xml
<!-- MyBatis XML 구현 -->

<mapper namespace="com.my.sql">
    <!-- 회원 이름을 통해 회원 테이블 조회-->
    <select id="selectJoin"
            parameterType="com.my.vo.JoinVO"
            resultType="com.my.vo.JoinVO">
        SELECT * FROM CUSTOMER
        WHERE(name=#{name})
    </select>
    
    <!-- 아이디, 패스워드, 이름 등을 회원 테이블에 저장-->
    <insert id="insertJoin" parameterType="com.my.vo.JoinVO">
    	INSERT INTO CUSTOMER values(#{id}, #{pw}, #{name})
    </insert>
</mapper>
```

* 데이터 접근 객체(DAO; Data Access Object 구현)

```java
public JoinDAO(){
    
}
public int selectJoin(joinVO vo) throws Exception {
    return sqlSession.selectJoin("com.my.sql.selectJoin",joinVO);
}
public void insertJoin(joinVO vo){
    sqlSession.insertJoin("com.my.sql.insertJoin",joinVO);
}
```

* 서비스(Service) 클래스 구현

```java
@Service
public class JoinService implements IMemberService{
    @Autowired
    JoinDao dao;
    
    @Override
    public void insertJoin(JoinVO join){
        JoinVO member = dao.selectJoin(join);
        dao.insertJoin(member);
    }
}
```

* 컨트롤러(Controller) 클래스 구현

```java
public class CreateController extends HttpServlet{
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) 
        throws ServletException, IOException{
        JoinVO vo = new JoinVO();
        JoinDAO dao = new JoinDAO();
        PrintWriter out = res.getWriter();
        
        String result;
        vo.setId(req.getParameter("id"));
        vo.setId(req.getParameter("password"));
        vo.setId(req.getParameter("name"));
        SimpleDateFormat sdf = new SimpleDateFormat("yyyymmdd");
        Date date = null;
        
        try{
            date = sdf.parse(req.getParameter("year") 
                   + "-" + req.getParameter("month"))
                   + "-" + req.getParameter("day"));
        }
        catch(ParseException e) {
            e.printStackTrace();
        }
        
    }
}
```

* 입/출력 검증(Validation) 로직 구현

```java
public class CreateController extends httpServlet {
	@Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) 
        throws ServletException, IOException {
        result = dao.insertJoin(vo);
        if(result == "success"){
            System.out.println("회원가입 성공");
        }else{
            System.out.println("회원가입 실패");
        }
     
    }
}
```





#### 1) 서버개발 프레임워크

- 서버 개발은 웹어플리케이션의 로직을 구현할 서버 프로그램을 제작하여 WAS에 탑재하는 것
- 서버 개발 프레임워크의 대부분은 model-view-controller(MVC) 패턴을 기반으로 함
  - Spring : JAVA 전자정부 표준 프레임워크의 기반 기술
  - Node.js : JavaScript 기반, 실시간 입출력이 빈번한 애플리케이션에 적합
  - Django : Python 컴포넌트의 재사용과 플러그인화 강조
  - Codeigniter : PHP 인터페이스가 간편하며 서버자원을 적게 소모
  - Ruby on Rails Puby : 테스트를 위한 웹서버 지원
  
  

#### 2) 프레임 워크의 특성

- 모듈화
- 재사용성
- 확장성
- 제어의 역흐름 : 개발자가 관리,통제 해야하는 객체 제어권한을 프레임워크에 넘겨 생산성 향상

#### 3) 서버 개발 과정

- DTO(Data Transfer Object)/ VO((Value Object) 구현 : DTO/VO 구현은 데이터 교환을 위해 사용할 객체를 생성하는 과정

  - DTO : 데이터 교환을 위해 생성되는 객체
  - VO : DTO와 동일하지만 읽기만 가능, 수정 불가

- SQL 구현 : XML 파일로 저장하여 관리 가능, 중복 SQL문을 최소화, 유지보수 간편

- DAO(Data Access Object) 구현 : 데이터베이스에 접근하고, SQL을 활용하여 데이터를 실제로 조작하는 코드 구현

  - DAO : DB에 접근하여 데이터를 조회/생성/수정/삭제 작업을 수행하는 객체

- Service 구현 : 사용자의 요청에 응답하기 위한 로직 구현

- Controller 구현 : 사용자의 요청에 적절한 서비스를 호출하여 그결과를 사용자에게 반환하는 코드 구현

