//

import { useContext } from "react";

import { LogoSvg_COMP } from "../../assets/logo/LogoSvg_COMP";
import { ICON_x, ICON_dropDownArrow, ICON_save, ICON_search } from "../icons/icons";

import DD from "../dd/dd";
import PropTypes from "prop-types";

import { USE_windowWidth } from "../../hooks/USE_windowWidth";

import { AnimatePresence } from "framer-motion";

import css from "./Nav.module.css";

import USE_Toggle from "../../hooks/USE_toggle";
import { Btn } from "../btn/btn";

import { Lang_CONTEXT } from "../../contexts/lang";
import { SavedProfileIDs_CONTEXT } from "../../contexts/savedProfiles";

import SearchBar from "../search/search";

import { Categories_DD } from "./components/Categories_DD";
import { More_DD } from "./components/More_DD";
import { Settings_DD } from "./components/Settings_DD";

import { Mobile_MENU } from "./components/Mobile_MENU";
import { Dialog, Modal } from "react-aria-components";
/*
BREAKPOINTS:
  1440px - Big Desktop
  1280px - Desktop
  1024px - Tablet
  480px - Mobile
*/

export default function Nav({ tagUsages, search, SET_search, categories, profiles }) {
  const [IS_menuOpen, TOGGLE_menu, SET_menuOpen] = USE_Toggle(false);
  const { lang, TOGGLE_lang } = useContext(Lang_CONTEXT);

  const window_WIDTH = USE_windowWidth();
  const layout = window_WIDTH > 1150 ? "desktop" : window_WIDTH > 900 ? "tablet" : "mobile";

  const SHRINK_logo = window_WIDTH > 580 || IS_menuOpen ? false : true;
  const [SHRINK_search, SET_shrinkSearch] = USE_Toggle(true);

  const handleMenuItemClick = (action) => {
    console.log(action);
    alert(action);
  };

  return (
    <header className={css.header}>
      <AnimatePresence>
        <h1 key="nav-logo" data-shrink={SHRINK_logo ? SHRINK_logo : false}>
          <a href="http://localhost:5173/" title="← Back to the homepage">
            <LogoSvg_COMP shrink={SHRINK_logo ? SHRINK_logo : false} />
          </a>
        </h1>

        {layout === "desktop" && (
          <nav key="nav">
            <ul>
              <li>
                <SearchBar
                  SET_search={SET_search}
                  IS_mobile={false}
                  shrink={false}
                  search={search}
                  SET_shrinkSearch={SET_shrinkSearch}
                />
              </li>
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
              <li>
                <Categories_DD categories={categories} />
              </li>
              <li>
                <More_DD tagUsage_COUNT={tagUsages.length} lang={lang} TOGGLE_lang={TOGGLE_lang} />
              </li>
            </ul>
          </nav>
        )}
        {layout === "desktop" && (
          <nav key="nav-second">
            <ul style={{ display: "flex", columnGap: "8px" }} key="nav-right">
              {layout !== "desktop" && (
                <li>
                  <Btn
                    styles={["btn-40", "round", "grey"]}
                    text="Search"
                    left_ICON={<ICON_search />}
                    aria_LABEL=""
                    onClick={() => {}}
                  />
                </li>
              )}
              <li>
                <Saved_DD profiles={profiles} />
              </li>
              <li>
                <Settings_DD lang={lang} TOGGLE_lang={TOGGLE_lang} />
              </li>
            </ul>
          </nav>
        )}
        {layout !== "desktop" && (
          <nav key="nav-second">
            <ul style={{ display: "flex", columnGap: "8px" }} key="nav-right">
              {window_WIDTH > 450 && (
                <li>
                  <Saved_DD profiles={profiles} />
                </li>
              )}
              {!IS_menuOpen && (
                <li>
                  <Btn
                    styles={["btn-40", "round", "grey"]}
                    text="Search"
                    left_ICON={<ICON_search />}
                    aria_LABEL=""
                    onClick={() => {}}
                  />
                </li>
              )}
              {window_WIDTH > 860 && (
                <>
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
                  <li>
                    <Categories_DD categories={categories} />
                  </li>
                  <li>
                    <More_DD
                      tagUsage_COUNT={tagUsages.length}
                      lang={lang}
                      TOGGLE_lang={TOGGLE_lang}
                      align="right"
                    />
                  </li>
                </>
              )}

              {window_WIDTH < 860 && (
                <li>
                  {/* <Mobile_MENU
                    categories={categories}
                    tagUsages={tagUsages}
                    lang={lang}
                    TOGGLE_lang={TOGGLE_lang}
                    TOGGLE_menu={TOGGLE_menu}
                  /> */}
                  <Btn
                    styles={["btn-40", "round", "grey"]}
                    text="Menu"
                    right_ICON={<ICON_dropDownArrow />}
                    aria_LABEL=""
                    onClick={TOGGLE_menu}
                  />
                </li>
              )}
              {window_WIDTH > 960 && (
                <li>
                  <Settings_DD lang={lang} TOGGLE_lang={TOGGLE_lang} />
                </li>
              )}
            </ul>
          </nav>
        )}

        {IS_menuOpen && (
          <Mobile_MENU
            tagUsage_COUNT={tagUsages.length}
            lang={lang}
            TOGGLE_lang={TOGGLE_lang}
            categories={categories}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

function Saved_DD({ profiles }) {
  const { savedProfile_IDs, REMOVE_fromSaved } = useContext(SavedProfileIDs_CONTEXT);
  const saved_PROFILES = profiles.filter((p) => savedProfile_IDs.has(p._id));

  return (
    <DD align="right" width={280} btnLeft_ICON={<ICON_save />}>
      <span>{savedProfile_IDs.size} liked profiles</span>
      {savedProfile_IDs &&
        savedProfile_IDs.size > 0 &&
        Array.from(saved_PROFILES).map((profile) => {
          return (
            <div key={profile._id} style={{ display: "flex" }}>
              <li key={profile._id + "-visit"} style={{ display: "flex", flex: "1" }}>
                <img
                  src={profile?.img?.desktop?.[0] + "/Big"}
                  style={{ width: "32px", height: "32px", borderRadius: "4px" }}
                />

                <span>{profile.name.en}</span>
              </li>
              <li key={profile._id + "-remove"}>
                <Btn
                  styles={["btn-44", "navDD_BTN"]}
                  left_ICON={<ICON_x color={"dark"} />}
                  onClick={() => REMOVE_fromSaved(profile._id)}
                  FIRE_clickEvent={false}
                />
              </li>
            </div>
          );
        })}
    </DD>
  );
}

Nav.propTypes = {
  tagUsages: PropTypes.array,
  search: PropTypes.string,
  SET_search: PropTypes.func,
  categories: PropTypes.array,
};
