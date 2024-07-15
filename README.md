# 동문 커리어 매칭 서비스 “밥벌이”

### [2024년도 1학기] 데이터사이언스 캡스톤디자인 1팀 ISIC

<br>

## 🧑‍🤝‍🧑 Member

| <img src="https://avatars.githubusercontent.com/u/114787723?v=4" width="200" height="200" /> | <img src="https://avatars.githubusercontent.com/u/112068007?v=4" width="200" height="200" /> | <img src="https://avatars.githubusercontent.com/u/34148750?v=4" width="200" height="200" /> | <img src="https://avatars.githubusercontent.com/u/43908014?v=4" width="200" height="200" /> |
| :------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                            [김현진](https://github.com/hyeonjins)                            |                          [한종원](https://github.com/imsohungrynow)                          |                            [박세호](https://github.com/sayyyho)                             |                            [최지안](https://github.com/choijian)                            |
|                                              AI                                              |                                              AI                                              |                                         프론트엔드                                          |                                       디자인, 백엔드                                        |
|                                       산업시스템공학과                                       |                                       산업시스템공학과                                       |                                       정보통신공학과                                        |                                       정보통신공학과                                        |
|                    팀장,<br> 직업 추천 모델 개발,<br> 데이터 수집 및 정제                    |                         선배 추천 모델 개발,<br> 데이터 수집 및 정제                         |                            반응형 UI/UX 구현,<br> 데이터 크롤링                             |                          UI/UX 설계, 웹 크롤링,<br> DB 및 API 설계                          |

<br>

## 👨🏼‍💻 프로젝트 소개

- **학생들의 데이터를 바탕**으로 학생들에게 **적합한 직업**과 **유사한 활동 이력의 동문 선배를 추천**해주는 서비스
- **RAG 기법을 활용**하여 학생들의 이력에 기반한 **직업 추천 및 보완점** 제공
- **코사인 유사도를 활용**하여 동문 선배와 **유사도 비교 및 선배 활동 이력** 제공  
  <br>

## 🧸 개발 배경 및 필요성

- 대학생들의 진로 고민에 따른 **취업 관련 플랫폼 수요 증가**
- 기존 서비스들은 사용자 **맞춤형 정보를 제공하기에 제한적**
- 멘토 탐색 및 서비스 이용 과정에서 **시간적, 비용적 부담 발생**  
  <br>

## 📅 개발 기간

2024.03.02 ~ 2024.06.14  
 <br>

## 🔧 기술 스택

### Frontend

<div>
   
   ![ts](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
   ![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
   ![vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)
   ![axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)
   ![recoil](https://img.shields.io/badge/recoil-3578E5?logo=recoil&logoColor=white&style=for-the-badge)
   ![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
   ![vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=white&style=for-the-badge)
</div>

### Backend

<div>
   
   <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
   <img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white">
   <img src="https://img.shields.io/badge/gunicorn-499848?style=for-the-badge&logo=gunicorn&logoColor=white">
   <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">
   <img src="https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white">
   <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
   <img src="https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white">
   <img src="https://img.shields.io/badge/amazon%20EC2-FF9900?style=for-the-badge&logo=amazon%20ec2&logoColor=white">
   <img src="https://img.shields.io/badge/amazon%20RDS-527FFF?style=for-the-badge&logo=amazon%20RDS&logoColor=white">

</div>

### AI

<div>
   
   <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
   <img src="https://img.shields.io/badge/langchain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white">
   <img src="https://img.shields.io/badge/gpt%203.5%20turbo-412991?style=for-the-badge&logo=openai&logoColor=white">
   <img src="https://img.shields.io/badge/scikit%20learn-F7931E?style=for-the-badge&logo=scikit%20learn&logoColor=white">

</div>  
<br>

## 🎨 화면 구성

<img src="docs\screen1.jpg" width="800" height="450">
<img src="docs\screen2.jpg" width="800" height="450">
<br>

## 🐍 플로우 차트

<img src="docs\flow_chart.png" width="800" height="330">
<br>

## 🦦 시스템 아키텍쳐

<img src="docs\system_architecture.png" width="800" height="300">
<br>

## 👨‍🎓 기대효과

- 동국대 교내 학생들만 이용할 수 있는 서비스가 아닌, **타 학교 학생들도 사용이 가능하도록 서비스를 확장**할 수 있다.
- "밥벌이"를 통해 형성된 **선후배 간의 멘토링 문화와 네트워크**는 광범위한 커뮤니티에 긍정적인 영향을 기대해 볼 수 있다.
- 동국대학교 **'드림패스'와의 연동**을 통해 학생들이 한 곳에서 모든 취업 관련 서비스를 이용할 수 있는 통합 플랫폼을 구축할 수 있다.
- 학생들은 매칭된 선배들과의 네트워킹을 통해 진로 탐색부터 **멘토링, 커피챗, 이력서 작성 지원**에 이르기까지 **취업 관련 다양한 분야에서 도움**을 받을 수 있다.
