//

import css from "./Nav.module.css";
import { useContext, useEffect, useRef, useState } from "react";

import { LogoSvg_COMP } from "../../assets/logo/LogoSvg_COMP";
import { ICON_x, ICON_dropDownArrow, ICON_search } from "../icons/icons";
import PropTypes from "prop-types";
import { USE_windowWidth } from "../../hooks/USE_windowWidth";
import { AnimatePresence, motion } from "framer-motion";
import USE_Toggle from "../../hooks/USE_toggle";
import { Btn } from "../btn/btn";
import { Lang_CONTEXT } from "../../contexts/lang";
import { Theme_CONTEXT } from "../../contexts/theme";
import { FontSizeContext } from "../../contexts/fontSize";
import SearchBar from "../search/Searchbar";

import { Categories_DD } from "./components/Dropdowns/Categories_DD";
import { More_DD } from "./components/Dropdowns/More_DD";
import { Settings_DD } from "./components/Dropdowns/Settings_DD";
import { Saved_DD } from "./components/Dropdowns/Saved_DD";
import { Mobile_MENU } from "./components/Mobile_MENU/Mobile_MENU";
import { ICON_menuLines } from "../icons/icons";
import { Search_OVERLAY } from "./components/Search_OVERLAY/Search_OVERLAY";
import { Modal_SEARCH } from "../search/Search_RESULTS/Modal_SEARCH";

export default function Nav({ tagUsages, search, SET_search, categories, profiles }) {
  const [IS_menuOpen, TOGGLE_menu, SET_menuOpen] = USE_Toggle(false);
  const [IS_searchOpen, TOGGLE_search, SET_searchOpen] = USE_Toggle(false);
  const { fontSize } = useContext(FontSizeContext); // 1, 2, 3
  const { lang, TOGGLE_lang } = useContext(Lang_CONTEXT);
  const { theme } = useContext(Theme_CONTEXT);
  const [current_MENU, SET_currentMenu] = useState("all");

  const mainSearch_REF = useRef(null);
  const overlaySearch_REF = useRef(null);

  function TOGGLE_menu_2nd() {
    if (IS_menuOpen) {
      SET_menuOpen(false);

      setTimeout(() => {
        SET_currentMenu("all");
      }, 301);
    } else {
      SET_menuOpen(true);
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-noscroll", `${search !== ""}`);
  }, [search]);

  const window_WIDTH = USE_windowWidth();
  const layout = GET_layout(window_WIDTH, fontSize);

  const SHRINK_logo = layout <= 5 || IS_menuOpen ? false : true;
  if (window_WIDTH > 900 && IS_menuOpen) SET_menuOpen(false);
  if (layout < 5 && IS_searchOpen) SET_searchOpen(false);
  if (layout > 4 && !IS_searchOpen && search !== "") {
    SET_searchOpen(true);
  }

  const SHOULD_showSearchBtn = layout >= 5 && !IS_menuOpen;

  return (
    <header className={css.header} data-theme={theme} data-hidemainnav={IS_searchOpen}>
      <div className={css.nav_WRAP}>
        <h1 key="nav-logo" data-shrink={SHRINK_logo ? SHRINK_logo : false}>
          <a href="http://localhost:5173/" title="← Back to the homepage">
            <LogoSvg_COMP shrink={SHRINK_logo ? SHRINK_logo : false} />
          </a>
        </h1>
        <nav key="nav">
          <ul className={!SHOULD_showSearchBtn && css["hide-search-btn"]}>
            <AnimatePresence>
              {layout >= 5 && !IS_menuOpen && (
                <motion.li
                  initial={{ opacity: 0, x: 70 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 70 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  data-custom="search-btn-li"
                >
                  <Btn
                    styles={["btn-40", "round", "grey"]}
                    text={layout <= 8 && "Search"}
                    left_ICON={<ICON_search />}
                    aria_LABEL=""
                    onClick={TOGGLE_search}
                    custom_DATA="search-btn"
                    FIRE_clickEvent={false}
                  />
                </motion.li>
              )}
            </AnimatePresence>
            {layout <= 4 && (
              <li>
                <SearchBar SET_search={SET_search} search={search} searchBar_REF={mainSearch_REF} />
              </li>
            )}
            {layout <= 2 && (
              <li>
                <Btn
                  styles={["btn-40", "round", "grey"]}
                  text="Startseite"
                  aria_LABEL=""
                  onClick={() => {}}
                  active="true"
                  key="nav-btn-1"
                />
              </li>
            )}
            {layout <= 3 && (
              <li>
                <Categories_DD categories={categories} />
              </li>
            )}
            {layout <= 4 && (
              <li>
                <More_DD
                  tagUsage_COUNT={tagUsages.length}
                  lang={lang}
                  TOGGLE_lang={TOGGLE_lang}
                  align={layout > 1 && "right"}
                  IS_textMenu={layout > 3}
                />
              </li>
            )}
            {layout >= 5 && (
              <li>
                <Btn
                  styles={["btn-40", "round", "grey"]}
                  text={layout <= 7 && "Menu"}
                  right_ICON={
                    IS_menuOpen ? (
                      <ICON_x small={layout <= 7 ? true : false} />
                    ) : !IS_menuOpen && layout > 7 ? (
                      <ICON_menuLines />
                    ) : (
                      <ICON_dropDownArrow />
                    )
                  }
                  aria_LABEL=""
                  onClick={TOGGLE_menu_2nd}
                />
              </li>
            )}
            {layout <= 6 && (
              <li data-marginleft={layout === 1 ? true : false}>
                <Saved_DD all_PROFILES={profiles} />
              </li>
            )}
            {layout === 1 && (
              <li>
                <Settings_DD lang={lang} TOGGLE_lang={TOGGLE_lang} />
              </li>
            )}
          </ul>
        </nav>
      </div>

      <Mobile_MENU
        tagUsage_COUNT={tagUsages.length}
        lang={lang}
        TOGGLE_lang={TOGGLE_lang}
        categories={categories}
        TOGGLE_menu={TOGGLE_menu_2nd}
        profiles={profiles}
        IS_menuOpen={IS_menuOpen}
        current_MENU={current_MENU}
        SET_currentMenu={SET_currentMenu}
      />

      <AnimatePresence>
        {IS_searchOpen && (
          <Search_OVERLAY
            search={search}
            SET_search={SET_search}
            TOGGLE_search={TOGGLE_search}
            searchBar_REF={overlaySearch_REF}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
function GET_layout(windowWidth, fontSize) {
  const layoutMapping = {
    1: {
      // font size 1
      1200: 1,
      1060: 2,
      960: 3,
      800: 4,
      620: 5,
      470: 6,
      360: 7,
      300: 8,
      default: 10,
    },
    2: {
      // font size 2
      1280: 1,
      1140: 2,
      1000: 3,
      860: 4,
      640: 5,
      480: 6,
      370: 7,
      300: 8,
      default: 10,
    },
    3: {
      // font size 3
      1400: 1,
      1280: 2,
      1120: 3,
      940: 4,
      700: 5,
      540: 6,
      400: 7,
      340: 8,
      default: 10,
    },
  };

  const sizeMapping = layoutMapping[fontSize] || layoutMapping[3]; // Default to font size 3 if not found
  const breakpoints = Object.keys(sizeMapping)
    .map(Number)
    .filter((bp) => !isNaN(bp))
    .sort((a, b) => b - a); // Sort breakpoints in descending order

  // Iterate over the breakpoints to find the correct layout
  for (let breakpoint of breakpoints) {
    if (windowWidth > breakpoint) {
      return sizeMapping[breakpoint];
    }
  }
  return sizeMapping.default;
}

Nav.propTypes = {
  tagUsages: PropTypes.array,
  search: PropTypes.string,
  SET_search: PropTypes.func,
  categories: PropTypes.array,
};