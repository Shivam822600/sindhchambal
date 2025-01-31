import React, { useState } from "react";
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import "flatpickr/dist/themes/material_blue.css";
import FlatPickr from "react-flatpickr";
// Redux Store
import { showRightSidebarAction, toggleLeftmenu } from "../../store/actions";
// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
// import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import megamenuImg from "../../assets/images/megamenu-img.png";
import logo from "../../assets/images/logo.svg";
import logoLight from "../../assets/images/logo-light.png";
import logoLightSvg from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.png";

// import images
import github from "../../assets/images/brands/github.png";
import bitbucket from "../../assets/images/brands/bitbucket.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import slack from "../../assets/images/brands/slack.png";

//i18n
import { withTranslation } from "react-i18next";

const Header = props => {
  const [menu, setMenu] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [socialDrp, setsocialDrp] = useState(false);
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
                <FlatPickr
                  className="form-control"
                  // selected={startDate}
                  // onChange={(date) => setStartDate(date)}
                  name="joiningDate"
                  placeholder="Select Date"
                  options={{
                    dateFormat: "d M, Y"
                  }}
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
                      <FlatPickr
                        className="form-control"
                        // selected={startDate}
                        // onChange={(date) => setStartDate(date)}
                        name="joiningDate"
                        placeholder="Select Date"
                        options={{
                          dateFormat: "d M, Y"
                        }}
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
