# Course-Registration-Planner
[성균관대학교 자연과학 캠퍼스 전용]

수강 신청 목록을 자동으로 계획해줍니다.

## Workflow
1. 자신의 학과를 선택합니다.
2. 수강을 원하는 교과목을 선택합니다.
3. 원하는 수강 신청 난이도, 별점, 초안 수을 선택합니다.
4. 교과목록을 분석해 시간표를 생성합니다.
5. 제시된 시간표 초안을 1~3개 가량 선택합니다.
6. 추정 성공률이 높은 수강 신청 리스트를 제시합니다.

## Service
- ### fetcher
    - 당학기 교과목을 가져옵니다.
    - 수집 항목은 다음과 같습니다.
        - 교과목명
        - 교수명
        - 학수번호
        - 학점
        - 수업시간
        - 건물 번호
        - 온/오프라인 여부
        - 교과 분류 (교양)
        - 수강 대상
        - 그외 태그
- ### planner
    - 책가방 담은 수를 분석해 수강 신청 위험도를 평가합니다.
    - 시간표 초안 생성에 아래와 같은 항목을 고려합니다.
        - 신청 위험도
        - 별점 => 동일 교수님의 다른 수업 평점도 반영됩니다.
        - 수업 시간
        - 건물 거리 (성균관대 자과캠만 매핑됩니다.)
        - 온/오프라인 여부
        - 교과 분류 (교양)
        - 수강 대상

## Tech Stack
- TypeScript
    - Backend: NestJS
    - Frontend: NextJS
    - Worker: FastAPI
- GraphQL

## [Designs] (https://www.figma.com/design/JmDadXelLILF3NlyRBSfkz/SKKU-Planner?node-id=0-1&t=bmfNqiv48IhFf8W4-1)
 : UI Designs on Figma