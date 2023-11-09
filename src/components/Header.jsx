import React from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../atom/atom";

export default function Header() {
  const [theme] = useRecoilState(themeState);
  return (
    <header className={`header ${theme === "light" ? "white" : "dark"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
