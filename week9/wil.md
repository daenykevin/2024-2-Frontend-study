#### What I Learned?
- API? : fetch에 들어있는 URL을 받아, json이라는 형식의 데이터로 보내준다.
- 'then' 은 무엇일까? : API를 다 처리하고 그 후에 데이터를 참조하게 하는 것.

#### What I Did?
- JS로 HTML 태그를 넣는 법
1. 새로운 태그를 만든다.
2. 태그에 데이터를 넣는다.
3. 새로운 태그를 root에 추가한다.
4. root를 태그에 업데이트 한다.
5. 하지만 코드의 양이 너무 많아진다...
- react 등장
1. JS에 html 코드를 넣어 작업하고 원래 코드로 바꾸는 컴파일러로 바꾸는 아이디어?
2. JSX와 BABEL 컴파일러
3. 이후 Single Page Application의 시대가 왔다.

- React 사용해보기(터미널에서 작동한다.)
1. npx create-react-app "파일 이름" : "파일 이름"을 생성한다.
2. 'cd "파일 이름"', 'npm start'로 실행한다.

- 생성된 파일은 index.html, index.js,App.js 등등이 있다.
1. index.html의 body 태그에는 "root" 태그만이 사실상 존재하며, 이 태그안에 js를 집어넣는 것이 react이다.
2. index.js는 "root" 태그르 찾아서 App이라는 태그를 넣고 있다.
3. App.js는 App() function이 작동하고 있다.
4. App() 함수는 index.js에서 <App />으로 쓰이고 있다.

- React로 자기소개 페이지 작성하기
1. family 폴더를 src 아래에 생성하고 js 파일 생성하기(이때 파일명은 대문자로 시작해야 한다.)
2. 코드를 작성하고, App.js 에 <파일명 />을 입력하기
3. 작성된 페이지 확인하기

[9주차 과제](https://create-react-cd6l14n2h-daenykevins-projects.vercel.app/)