//
//

import { useState } from "react";
import { AllCategories_BLOCK } from "../../../Transition_MENU/Blocks/Categories/AllCategories_BLOCK/AllCategories_BLOCK";
import { Category_BLOCK } from "../../../Transition_MENU/Blocks/Categories/Category_BLOCK/Category_BLOCK";
import { BtnBack_BLOCK } from "../../../Transition_MENU/Blocks/General/BtnBack_BLOCK/BtnBack_BLOCK";
import { Feedback_BLOCK } from "../../../Transition_MENU/Blocks/Nav/Feedback_BLOCK/Feedback_BLOCK";
import { Legal_BLOCK } from "../../../Transition_MENU/Blocks/Nav/Legal_BLOCK/Legal_BLOCK";
import { Nav_BLOCKS } from "../../../Transition_MENU/Blocks/Nav/Nav_BLOCKS/Nav_BLOCKS";
import { Settings_BLOCKS } from "../../../Transition_MENU/Blocks/Nav/Settings_BLOCKS/Settings_BLOCKS";
import Transition_MENU from "../../../Transition_MENU/Transition_MENU";
import DD from "../../DD";
import { USE_handleDropdown } from "../../hooks/USE_handleDropdown";
import { USE_getCategories } from "../../../../hooks/USE_getCategories";

export function More_DD({
  tag_USAGES,
  align,
  IS_textMenu = false,
  categories,
  SHOULD_showCategories,
  SHOULD_showSettings,
  SHOULD_showHome,
}) {
  const { startCateg_ARR, endCateg_ARR, GET_subCategories } = USE_getCategories(categories);
  const { HANLDE_dd, current_MENU, menu_HEIGHT, SET_currentMenu, dropdown_REF, scroll } =
    USE_handleDropdown();

  const [reverse, SET_reverse] = useState(false);

  return (
    <DD
      btn_TEXT={IS_textMenu ? "Menu" : "More"}
      width={28}
      onOpen={() => HANLDE_dd("open")}
      onClose={() => HANLDE_dd("close")}
      align={align}
      scroll={scroll}
      height={menu_HEIGHT}
      menu_REF={dropdown_REF}
    >
      {/* All */}
      <Transition_MENU
        current_MENU={current_MENU}
        classNames="menu-primary"
        menu_NAME="all"
        resize={(el) => HANLDE_dd("resize", el)}
      >
        <Nav_BLOCKS
          SET_currentMenu={SET_currentMenu}
          visible_BTNs={{
            liked: false,
            categories: SHOULD_showCategories,
            settings: SHOULD_showSettings,
            home: SHOULD_showHome,
          }}
          SET_reverse={SET_reverse}
        />
      </Transition_MENU>

      {/* All Categories */}
      <Transition_MENU
        current_MENU={current_MENU}
        classNames={reverse ? "menu-secondary-reverse" : "menu-secondary"}
        menu_NAME="categories"
        resize={(el) => HANLDE_dd("resize", el)}
      >
        <BtnBack_BLOCK
          title="Back to menu"
          onClick={() => {
            SET_reverse(false);
            SET_currentMenu("all");
          }}
          aria_LABEL=""
        />
        <AllCategories_BLOCK
          start_CATEG={startCateg_ARR}
          end_CATEG={endCateg_ARR}
          SET_currentMenu={SET_currentMenu}
          SET_reverse={SET_reverse}
        />
      </Transition_MENU>

      {/* Individual Categories */}
      {startCateg_ARR.map((categ) => {
        return (
          <Transition_MENU
            key={categ._id}
            resize={(el) => HANLDE_dd("resize", el)}
            current_MENU={current_MENU}
            classNames="menu-third"
            menu_NAME={categ._id}
          >
            <BtnBack_BLOCK
              title="All categories"
              onClick={() => SET_currentMenu("categories")}
              aria_LABEL=""
            />

            <Category_BLOCK category_OBJ={categ} categoryChildren_ARR={GET_subCategories(categ)} />
          </Transition_MENU>
        );
      })}

      {/* Settings */}
      <Transition_MENU
        current_MENU={current_MENU}
        classNames="menu-secondary"
        menu_NAME="settings"
        resize={(el) => HANLDE_dd("resize", el)}
      >
        <BtnBack_BLOCK title="Back" onClick={() => SET_currentMenu("all")} aria_LABEL="" />
        <Settings_BLOCKS resize={() => HANLDE_dd("fit-content-font-resize")} />
      </Transition_MENU>

      {/* Feedback */}
      <Transition_MENU
        current_MENU={current_MENU}
        classNames="menu-secondary"
        menu_NAME="feedback"
        resize={(el) => HANLDE_dd("resize", el)}
      >
        <BtnBack_BLOCK title="Back" onClick={() => SET_currentMenu("all")} aria_LABEL="" />
        <Feedback_BLOCK />
      </Transition_MENU>

      {/* Legal */}
      <Transition_MENU
        current_MENU={current_MENU}
        classNames="menu-secondary"
        menu_NAME="legal"
        resize={(el) => HANLDE_dd("resize", el)}
      >
        <BtnBack_BLOCK title="Back" onClick={() => SET_currentMenu("all")} aria_LABEL="" />
        <Legal_BLOCK />
      </Transition_MENU>
    </DD>
  );
}