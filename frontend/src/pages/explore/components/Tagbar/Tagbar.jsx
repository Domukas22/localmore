//
//
import { Categories_DD } from "../../../../components/Nav/components/Dropdowns/Categories_DD";
import { Btn } from "../../../../components/btn/btn";
import css from "./Tagbar.module.css";

import {
  ICON_x,
  ICON_arrow,
  ICON_dropDownArrow,
  ICON_activeDigit,
  ICON_3dots,
} from "../../../../components/icons/icons";
import { useContext, useEffect, useRef, useState } from "react";
import { FontSizeContext } from "../../../../contexts/fontSize";
import { USE_windowSize } from "../../../../hooks/USE_windowWidth";
import { MobileTag_MENU } from "../MobileTag_MENU/MobileTag_MENU";
import { MobileCategory_MENU } from "../MobileCategory_MENU/MobileCategory_MENU";

export function Tagbar({
  categories,
  all_TAGS,
  active_TAGS,
  nonActive_TAGS,
  potential_TAGS,
  SET_potentialTags,
  window_WIDTH,
  UPDATE_tags,
  tagGroups,
  tagUsages,
}) {
  const { fontSize, fontSize_SCALE } = useContext(FontSizeContext);
  const { width } = USE_windowSize();
  const [chosen_TAGS, SET_chosenTags] = useState([]);
  const [HAS_shadow, SET_shadow] = useState(false);

  const tagbar_REF = useRef(null);
  const mainBtns_REF = useRef(null);

  const [IS_mobileTagMenuOpen, SET_isMobileTagMenuOpen] = useState(false);
  const [IS_mobileCategoryMenuOpen, SET_isMobileCategoryMenuOpen] = useState(false);

  useEffect(() => {
    const nav_HEIGHT = 56 * fontSize_SCALE;

    const handleScroll = () => {
      SET_shadow(nav_HEIGHT >= tagbar_REF.current.getBoundingClientRect().top && width < 1100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fontSize, fontSize_SCALE, width]);

  useEffect(() => {
    const CALCULATE_tagWidth = (tag) => {
      const icon_WIDTH = 20 * fontSize_SCALE;
      const padding = 12 * fontSize_SCALE * 2;
      const buttonInside_GAPS = 16 * fontSize_SCALE;
      const letters_WIDTH = 8 * fontSize_SCALE * tag.name.en.length; // a little overshot to make sure it fits
      const button_GAP = 8 * fontSize_SCALE;
      const icon_X = 16 * fontSize_SCALE;

      const total =
        padding + icon_WIDTH + buttonInside_GAPS + letters_WIDTH + icon_WIDTH + button_GAP;

      return total;
    };

    const calculateTagsToFit = () => {
      if (mainBtns_REF.current && tagbar_REF.current) {
        const tagbar_WIDTH = tagbar_REF.current.clientWidth;
        const mainBtns_WIDTH = mainBtns_REF.current.clientWidth;
        const remainingWidth = tagbar_WIDTH - mainBtns_WIDTH;

        let usedWidth = 0;
        const chosenTags = [];

        for (const tag of all_TAGS.filter((tag) => nonActive_TAGS.has(tag._id))) {
          const tagWidth = CALCULATE_tagWidth(tag); // You need to implement this function
          if (usedWidth + tagWidth <= remainingWidth) {
            chosenTags.push(tag);
            usedWidth += tagWidth;
          } else {
            break;
          }
        }

        SET_chosenTags(chosenTags);
      }
    };

    const resizeObserver = new ResizeObserver(calculateTagsToFit);
    resizeObserver.observe(tagbar_REF.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [all_TAGS, fontSize, fontSize_SCALE, width, active_TAGS, nonActive_TAGS]);

  return (
    <header className={css.header} ref={tagbar_REF} data-shadow={HAS_shadow}>
      {window_WIDTH < 900 && (
        <div className={css.mobileBtn_WRAP}>
          <Btn
            styles={["btn-40", "round"]}
            text={"Sportsfields"}
            left_ICON={<img src="https://cdn-icons-png.flaticon.com/512/889/889455.png"></img>}
            right_ICON={<ICON_dropDownArrow />}
            aria_LABEL=""
            onClick={() => SET_isMobileCategoryMenuOpen(true)}
            FIRE_clickEvent={false}
          />
          <Btn
            styles={["btn-40", "round"]}
            text={"Tags"}
            left_ICON={
              <ICON_activeDigit count={active_TAGS.size} IS_active={active_TAGS.size > 0} />
            }
            aria_LABEL=""
            onClick={() => {
              SET_isMobileTagMenuOpen(true);
              const scroll = window.scrollY;
              console.log(scroll);
              window.scrollTo(0, -1);
              setTimeout(() => {
                window.scrollTo(0, scroll);
              }, 50);
            }}
            FIRE_clickEvent={false}
          />
        </div>
      )}
      {window_WIDTH > 900 && (
        <>
          <div className={css.mainBtn_WRAP} ref={mainBtns_REF}>
            <Categories_DD categories={categories} styles={["btn-36", "round", "dropdown"]} />
            {/* ACTIVE TAGS */}
            {all_TAGS
              .filter((tag) => active_TAGS.has(tag._id))
              .map((tag, index) => (
                <Btn
                  key={index}
                  styles={["btn-36", "round", "active"]}
                  text={tag?.name?.en}
                  left_ICON={<img src={tag.icon?.url ? tag.icon?.url : ""} />}
                  aria_LABEL=""
                  right_ICON={<ICON_x color="brand" small={true} />}
                  onClick={() => UPDATE_tags(tag, "remove")}
                  FIRE_clickEvent={false}
                />
              ))}
          </div>

          {active_TAGS.size === 0 && (
            <>
              {" "}
              <div className={css.tags_WRAP}>
                {/* NON-ACTIVE TAGS */}
                {chosen_TAGS.map((tag, index) => {
                  const IS_potentialAdd = potential_TAGS.toAdd_IDs.has(tag._id);

                  return (
                    <Btn
                      key={index}
                      styles={["btn-36", "round", `${IS_potentialAdd ? "green" : ""}`]}
                      text={tag?.name?.en}
                      left_ICON={<img src={tag.icon?.url ? tag.icon?.url : ""} />}
                      aria_LABEL=""
                      right_ICON={
                        <ICON_x
                          color={IS_potentialAdd ? "green" : "dark"}
                          small={true}
                          rotate={true}
                          rotationAnimation={IS_potentialAdd}
                        />
                      }
                      onClick={() => {
                        if (IS_potentialAdd) {
                          SET_potentialTags((prev) => {
                            const updated = { ...prev };
                            updated.toAdd_IDs.delete(tag._id);
                            return updated;
                          });
                          return;
                        } else {
                          SET_potentialTags((prev) => {
                            const updated = { ...prev };
                            updated.toAdd_IDs.add(tag._id);
                            return updated;
                          });
                        }
                      }}
                      FIRE_clickEvent={false}
                    />
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
      {IS_mobileTagMenuOpen && (
        <MobileTag_MENU
          {...{
            tagGroups,
            all_TAGS,
            tagUsages,
            active_TAGS,
            UPDATE_tags,
            potential_TAGS,
            SET_potentialTags,
            IS_mobileTagMenuOpen,
            SET_isMobileTagMenuOpen,
          }}
        />
      )}
      {IS_mobileCategoryMenuOpen && (
        <MobileCategory_MENU
          {...{
            IS_mobileCategoryMenuOpen,
            SET_isMobileCategoryMenuOpen,
            categories,
          }}
        />
      )}
    </header>
  );
}
