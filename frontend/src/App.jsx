import "./styles/reset.css";
import "./styles/App.css";

import { useState } from "react";
import Explore from "./pages/explore/explore.jsx";
import { USE_windowWidth } from "./hooks/USE_windowWidth";
import { USE_fetchData } from "./hooks/USE_fetchData.js";
import { base_URL } from "./config.js";
import Nav from "./components/Nav/Nav.jsx";
import { Search_RESULTS } from "./components/search/Search_RESULTS/Search_RESULTS.jsx";

export function App() {
  const [search, SET_search] = useState("");

  const {
    data: profiles,
    loading: LOADING_profiles,
    error: profile_ERROR,
  } = USE_fetchData(`${base_URL}/staticProfiles`);

  const {
    data: tags,
    loading: LOADING_tags,
    error: tags_ERROR,
  } = USE_fetchData(`${base_URL}/tags`);

  const {
    data: tagUsages,
    loading: LOADING_tagUsages,
    error: tagUsages_ERROR,
  } = USE_fetchData(`${base_URL}/tagUsages`);

  const {
    data: categories,
    loading: LOADING_categories,
    error: categories_ERROR,
  } = USE_fetchData(`${base_URL}/categories`);

  return (
    <>
      <Nav
        tagUsages={tagUsages}
        search={search}
        SET_search={SET_search}
        categories={categories}
        profiles={profiles}
      />
      {search !== "" && <Search_RESULTS search={search} profiles={profiles} />}
      <Explore
        profiles={profiles}
        tags={tags}
        tagUsages={tagUsages}
        windowWidth={USE_windowWidth()}
        search={search}
      />
    </>
  );
}
