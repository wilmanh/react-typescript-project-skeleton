import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import NavBarProps, { MenuOption } from "./navBar.interface";

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  const { t } = useTranslation();
  const { title, hasLogin, hasSignUp, options, imageUrl } = props;

  const getOptions = (options: MenuOption[]): JSX.Element[] => {
    return options?.map(
      (item: MenuOption, index: number): JSX.Element => {
        if (item.options) {
          const subOptions = getOptions(item.options);
          const menu = (
            <div
              key={`option-${item.name}-${index}`}
              className="navbar-item has-dropdown is-hoverable"
            >
              <div className="navbar-link">{item.name}</div>
              <div className="navbar-dropdown">{subOptions}</div>
            </div>
          );
          return menu;
        } else {
          return (
            <React.Fragment key={`option-${item.name}-${index}`}>
              <Link to={item?.toUrl ? item.toUrl : ""} className="navbar-item">
                {item.name}
              </Link>
              {item.hasDivider && (
                <hr
                  key={`divider-${item.name}-${index}`}
                  className="navbar-divider"
                />
              )}
            </React.Fragment>
          );
        }
      }
    );
  };
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          className="navbar-item"
          href="https://github.com/wilmanh/react-typescript-project-skeleton"
        >
          {title && (
            <span className="tag is-primary is-light is-large">{title}</span>
          )}
          {imageUrl && <img src={imageUrl} width="112" height="28" alt="img" />}
        </a>

        <button
          type="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">{getOptions(options)}</div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {hasSignUp && (
                <button className="button is-primary">
                  <strong>{t("signUp")}</strong>
                </button>
              )}
              {hasLogin && (
                <button className="button is-light">{t("logIn")}</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
