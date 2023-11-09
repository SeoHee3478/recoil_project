import { selector } from "recoil";
import { themeState } from "./atom";

export const toggleTheme = selector({
  key: "toggleTheme",
  get: ({ get }) => get(themeState), //현재 상태
  set: ({ set }) => {
    set(themeState, (prevTheme) => (prevTheme === "light" ? "dark" : "light")); // 테마를 토글
  },
});
