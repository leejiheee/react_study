import "./Main.css";

const Main = () => {
  const user = {
    name: "황현진",
    isLogin: true,
  }

  if(user.isLogin){
    return <div className="logout">로그아웃</div>
  }else{
    return <div>로그인</div>
  }

  // return (
  //   <>
  //   {user.isLogin ? (
  //     <div>로그아웃</div>
  //   ) : (
  //     <div>로그인</div>
  //   )}
  //   </>
  // );
};

export default Main;


// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야.
// 4. 최상위 태그는 반드시 하나여야만 한다.(최상위 태그로 사용할만한 태그가 마땅하지 않으면 빈 <> 태그로 감싼다.)