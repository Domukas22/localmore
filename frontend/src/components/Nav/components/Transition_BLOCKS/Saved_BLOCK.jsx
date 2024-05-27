//
//

import css from "../../Nav.module.css";
import { SavedProfile_LINK } from "../../../btn/btn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// export function Saved_BLOCK({ savedProfile_OBJs, REMOVE_fromSaved, resize = () => {} }) {
//   return (
//     <div className={css.block_WRAP} data-custom="saved">
//       {savedProfile_OBJs.length > 0 && <p>{savedProfile_OBJs.length} liked profiles</p>}

//       {savedProfile_OBJs &&
//         savedProfile_OBJs.length > 0 &&
//         savedProfile_OBJs.map((profile) => {
//           return (
//             <li className={css.savedBtn_LI} key={`Saved-${profile._id}`}>
//               <SavedProfile_LINK
//                 name={profile.name.en}
//                 subname={profile.subname.en}
//                 image_URL={profile?.img?.desktop?.[0] + "/Big"}
//                 aria_LABEL=""
//                 remove={() => {
//                   REMOVE_fromSaved(profile._id);
//                   resize();
//                 }}
//               />
//             </li>
//           );
//         })}

//       {savedProfile_OBJs.length === 0 && (
//         <div className={css.noSavedItems_BOX}>
//           <p>No saved profiles</p>
//         </div>
//       )}
//     </div>
//   );
// }

export function Saved_BLOCK({ savedProfile_OBJs, REMOVE_fromSaved, resize = () => {} }) {
  const [deletingItem, setDeletingItem] = useState(null);
  const SHOULD_noItemBoxBeVisible =
    (savedProfile_OBJs.length === 1 && deletingItem) || savedProfile_OBJs.length === 0;

  const handleRemove = (profileId) => {
    setDeletingItem(profileId);
    if (savedProfile_OBJs.length > 1) resize();

    setTimeout(() => {
      REMOVE_fromSaved(profileId);
      setDeletingItem(null);
      if (savedProfile_OBJs.length === 1) resize();
    }, 300); // Delay to match the fade-out duration
  };

  return (
    <div className={css.block_WRAP} data-custom="saved">
      <p>{savedProfile_OBJs.length} liked profiles</p>
      <AnimatePresence>
        {savedProfile_OBJs.map((profile) => (
          <motion.li
            className={css.savedBtn_LI}
            key={`Saved-${profile._id}`}
            // initial={{ opacity: 1, height: "auto" }}
            // animate={{
            //   opacity: deletingItem === profile._id ? 0 : 1,
            //   height: deletingItem === profile._id ? 0 : "auto",
            // }}
            // transition={{ opacity: { duration: 0.3 }, height: { duration: 0.3 } }}
          >
            <SavedProfile_LINK
              name={profile.name.en}
              subname={profile.subname.en}
              image_URL={profile?.img?.desktop?.[0] + "/Big"}
              aria_LABEL=""
              remove={() => handleRemove(profile._id)}
            />
          </motion.li>
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {SHOULD_noItemBoxBeVisible && (
          <motion.div
            className={css.noSavedItems_BOX}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
