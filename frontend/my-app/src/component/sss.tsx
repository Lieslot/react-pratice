import React, { useEffect } from "react";

const LoginReturn = () => {
  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    console.log(authorizationCode); //인증 코드
  });

  return (
    <>
      <div></div>
    </>
  );
};

export default LoginReturn;