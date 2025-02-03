import React, { useState } from "react";
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import { showRightSidebarAction, toggleLeftmenu } from "../../store/actions";

import { withTranslation } from "react-i18next";

const Header = props => {
  const [menu, setMenu] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [socialDrp, setsocialDrp] = useState(false);

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <div className="logo logo-dark">
                <span className="logo-sm fs-18">
                  Sindh Chambal Sanctuary
                </span>
                <span className="logo-lg fs-18">
                  Sindh Chambal Sanctuary
                  {/* <img src={logoDark} alt="" height="17" /> */}
                </span>
              </div>
            </div>
          </div>
          <form className="app-search d-none d-lg-block">
            <div className="position-relative">
              <input
                className="form-control"
                // selected={startDate}
                // onChange={(date) => setStartDate(date)}
                      type='date'
                name="joiningDate"
                placeholder="Select Date"
                // options={{
                //   dateFormat: "d M, Y"
                // }}
              />
              <span className="bx bx-search-alt" />
            </div>
          </form>

          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item noti-icon "
                id="page-header-search-dropdown"
                onClick={() => setSearch(!isSearch)}
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className={
                  isSearch
                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                    : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        className="form-control"
                        type='date'
                        // selected={startDate}
                        // onChange={(date) => setStartDate(date)}
                        name="joiningDate"
                        placeholder="Select Date"
                        // options={{
                        //   dateFormat: "d M, Y"
                        // }}
                      />

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
};

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout;
  return { layoutType, showRightSidebar, leftMenu };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})(withTranslation()(Header));
