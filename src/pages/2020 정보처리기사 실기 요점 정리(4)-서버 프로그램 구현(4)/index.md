---
path: "/2020 정보처리기사 실기 요점 정리(4)-서버 프로그램 구현(4)/"
category: "정보처리기사 실기"
tags: ["정보처리기사 실기", "정보처리기사","서버 프로그램 구현"]
title: "2020 정보처리기사 실기 요점 정리(4)-서버 프로그램 구현(4)"
date: "2020-06-04T15:15:00.000Z"
summary: "서버 프로그램 구현"
images: ["images/1.jpg"]
---

> 혼자 공부하면서 정리한 내용입니다. 자세한 내용은 책을 찾아서 공부하세요
>
> 2020 정보 처리 기사 실기 요약 / 요점 - 4. 서버 프로그램 구현 (4)

# 04. 배치 프로그램 구현

---



## 1) 배치 프로그램

### (1) 배치 프로그램



- 사용자와의 상호작용 없이 여러작업들을 미리 정해진 일련의 순서에 따라 일괄적으로 처리하는 것

### (2) 배치 프로그램의 필수 요소



* 배치 스케줄러의 개념

| 유형                     | 설명                                         |
| ------------------------ | -------------------------------------------- |
| 이벤트성 배치            | 특정 조건을 설정해두고 조건이 충족될 때 수행 |
| 온디맨드(On-Demand) 배치 | 사용자 요청시 수행                           |
| 정기 배치                | 정해진 시점에 정기적으로 실행                |



### (3) 배치 스케줄러

* 배치 스케줄러의 종류

| 유형          | 설명                                                         |
| ------------- | ------------------------------------------------------------ |
| 스프링 배치   | Spring Source 사와 Accenture사가 2007년 공동 개발한 오픈 소스 프레임워크 |
| 쿼츠 스케줄러 | 스프링 프레임워크로 개발되는 응용프로그램들의 일괄 처리를 위한 다양한 기능 제공 |

*  Cron 표현식

| 순서 | 필드 이름   | 허용 값                    |
| ---- | ----------- | -------------------------- |
| 1    | 초(Seconts) | 0~59, 특수문자             |
| 2    | 분(Minutes) | 0~59, 특수문자             |
| 3    | 시간(Hours) | 0~23, 특수문자             |
| 4    | 일(Day)     | 1~31, 특수문자             |
| 5    | 월(Months)  | 1~12,  JAN ~ DEC, 특수문자 |
| 6    | 요일(Weeks) | 1~7,  SUN ~SAT, 특수문자   |
| 7    | 연도(Year)  | 1970~2099, 특수문자        |



* Cron 표현식 특수문자 의미

| 기호 | 의미                     |
| ---- | ------------------------ |
| *    | 모든 수                  |
| ?    | 해당 항목을 미사용       |
| -    | 기간 설정                |
| ,    | 특정 기간 설정           |
| /    | 시작시간과 반복간격 설정 |
| L    | 마지막 기간에 동작       |
| W    | 가장 가까운 평일에 동작  |
| #    | 몇 번째 주, 요일 설정    |



- Cron 표현식 사용예시

| 사용 예            | 의미                                   |
| ------------------ | -------------------------------------- |
| 0 0 12 * * *       | 매일 12시에 실행                       |
| 0 15 10 * * *      | 매일 10시 15분에 실행                  |
| 0 * 14 * * *       | 매일 14시에 0분 ~ 59분까지 매 분 실행  |
| 0 0/5 14 * * *     | 매일 14시에 시작해서 5분 간격으로 실행 |
| 0 0 20 ? * MON-FRI | 월 ~ 금 20시 0분 0초에 실행            |
| * /1 * * * *       | 매 1분마다 실행                        |
| * /10 * * * *      | 매 10분마다 실행                       |



### (4) 배치 프로그램 설계

* 배치 프로그램 관리대장 확인
* 배치 설계서 확인





### (5) 배치 프로그램 작성

* DTO (Data Transfer Object), VO(Value Object) 구현

```java
public class PushMessageVO{
    private String pushSeqCd;
    private String sendSubject;
    private String sendContent;
    private String sndrEmpNo;
    private String sndrNm;
    private String arrayEmpNo;
    private String getPushSeqCd(){
        return pushSeqCd;
    }
    public void setPushSeqCd(String pushSeqCd){
        this.pushSeqCd = pushSeqCd;
    }
    public String getSendSubject(){
        return sendSubject;
    }
}
```

* SQL문 구현

```xml
<mapper namespace="PushMessageDAO">
<select id="selectPushEmpList" resultType="PushMessageVO">
    SELECT
        A.CMPY_CD AS cmpyCd
        A.DEPY_CD AS deptCd
        A.DEPY_NM_KOR AS deptNmKor
        A.EMP_NO AS empNo
        A.EMP_NM_KOR AS empNmKor
        A.DUTY_CD AS dutyCd
    FROM MOB_EMPTEST A,
    	MOB_DVCTEST B
    WHERE 1 = 1
    	AND A.CMPY_CD = B.CMPY_CD(+)
    	AND A.EMP_NO = B.EMP_NO(+)
</select>
</mapper>
```



* 데이터 접근 객체(DAO: Data Access Object) 구현

```java
@Repository
public class PushMessageDAO implements MessageDao {
    @Autowired
    private SqlSession sqlSession;
    public List<DagaMap> selectPushEmpList(MessageVO vo){
        return sqlSession.selectPushEmpList(vo);
    }
}
```



* 서비스(Service) 클래스 구현

```java
@Service
public class pushService implements CommService {
    @Autowired
    PushMessageDAO dao;
    
    @Override
    public void sendPushEmpList(pushMessageVO msg){
        pushMessageVO pushVO = dao.sendPushEmpList(msg);
        dao.insertPushContents(member);
    }
}
```



* 스케줄러 등록

```xml
<bean name="dailyPushMsg"
      class="org.springframework.scheduling.quartz.JobDetailBean"
      p:jobClass="test.job.DailyPushMsgJob">
    <property name="jobDataAsMap">
        <map>
            <entry key="pushService" value-ref="pushService"></entry>
            <entry key="commService" value-ref="commService"></entry>
        </map>
    </property>
</bean>


<bean id="dailyPushMsgTrigger"
      class="org.springframework.scheduling.quartz.CronTriggerBean">
    <property name="jobDetail" ref="dailyPushMsg"/>
    <property name="cronExpression" value="0 0/1 06-23 * * ?"/>
</bean>

```

