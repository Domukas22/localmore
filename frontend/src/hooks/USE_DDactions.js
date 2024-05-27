//
//
// create a custom hook to handle the dropdown actions
import { useEffect, useState, useRef } from "react";
import { USE_windowSize } from "./USE_windowWidth";

export function USE_DDactions() {
  const [current_MENU, SET_currentMenu] = useState("all");
  const [menu_HEIGHT, SET_menuHeight] = useState(null);

  const dropdown_REF = useRef(null);
  const scroll = SHOULD_scroll(menu_HEIGHT);

  console.log(menu_HEIGHT);

  // useEffect(() => SET_menuHeight(200), []);/

  useEffect(() => {
    if (!dropdown_REF.current) return;
    dropdown_REF.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [current_MENU]);

  function HANLDE_dd(action, el = null) {
    switch (action) {
      case "open":
        SET_menuHeight(dropdown_REF.current?.firstChild.offsetHeight + 1);
        console.log("OPEN");
        break;

      case "resize":
        SET_menuHeight(el.offsetHeight + 1);
        console.log("RESIZE");
        break;

      case "fit-content-font-resize":
        SET_menuHeight("fit-content");
        console.log("FIT-CONTENT");
        setTimeout(() => {
          SET_menuHeight(dropdown_REF.current?.firstChild.offsetHeight + 1);
        }, 301);
        break;

      case "close":
        SET_menuHeight(200);
        console.log("CLOSE");
        SET_currentMenu("all");
        break;
    }
  }

  return { HANLDE_dd, current_MENU, menu_HEIGHT, SET_currentMenu, dropdown_REF, scroll };
}

const SHOULD_scroll = (menu_HEIGHT) => {
  const { height } = USE_windowSize();
  const [scroll, SET_scroll] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const nav_HEIGHT = 60; // px
    const gap = 20; // px
    const maxHeight = height - nav_HEIGHT - gap; // 100% height -

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (menu_HEIGHT > maxHeight) {
      SET_scroll(true);
    } else {
      timeoutRef.current = setTimeout(() => {
        SET_scroll(false);
      }, 301);
    }
  }, [height, menu_HEIGHT]);

  return scroll;
};
