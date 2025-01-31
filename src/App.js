import PropTypes from 'prop-types';
import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Routes, Route } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./routes";

// Import all middleware
import Authmiddleware from "./routes/route";

// layouts Format
import HorizontalLayout from "./components/HorizontalLayout/";

// Import scss
import "./assets/scss/theme.scss";

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";




const getLayout = (layoutType) => {
  let Layout = HorizontalLayout;
  return Layout;
};

const App = () => {


  const selectLayoutState = (state) => state.Layout;
  const LayoutProperties = createSelector(
    selectLayoutState,
      (layout) => ({
        layoutType: layout.layoutType,
      })
  );

    const {
      layoutType
  } = useSelector(LayoutProperties);

  const Layout = getLayout(layoutType);

  return (
    <React.Fragment>
      <Routes>
    
        {authProtectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <Authmiddleware>
                <Layout>{route.component}</Layout>
              </Authmiddleware>}
            key={idx}
            exact={true}
          />
        ))}
      </Routes>
    </React.Fragment>
  );
};

App.propTypes = {
  layout: PropTypes.any
};

export default App;