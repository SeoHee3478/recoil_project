import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { themeState } from "../atom/atom";
import { toggleTheme } from "../atom/selector";

export default function Footer() {
  const [theme] = useRecoilState(themeState);
  const toggle = useSetRecoilState(toggleTheme);

  return (
    <footer className={`footer ${theme === "light" ? "white" : "dark"}`}>
      <button onClick={toggle}>테마 변경</button>
    </footer>
  );
}
