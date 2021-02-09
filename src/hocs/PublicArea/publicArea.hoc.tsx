import { MapDispatchToPropsPublicInterface } from "../../interfaces/hocs.interface";
import React, { Component, ComponentType } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Diff } from "utility-types";
import * as actions from "../../store/actions/";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootState } from "../../store/reducers";
import Action from "../../interfaces/actions.interface";
import NavBar from "../../components/UI/NavBar/navBar.component";
import Footer from "../../components/UI/Footer/footer.component";
import { MenuOption } from "../../components/UI/NavBar/navBar.interface";
import { withTranslation, WithTranslation } from "react-i18next";
import parse from "html-react-parser";

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<Action, {}, AnyAction>
): MapDispatchToPropsPublicInterface => {
  return {
    login: (): Promise<void> => dispatch(actions.login()),
  };
};

type HocProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    // here you can extend ConnectedHoc with new props
    overrideCount?: number;
  };

// These props will be injected into the base component
export const withPublicArea = <BaseProps extends {}>(
  BaseComponent: ComponentType<BaseProps>
) => {
  class Hoc extends Component<
    HocProps & WithTranslation & RouteComponentProps<{}>,
    {}
  > {
    // Enhance component name for debugging and React-Dev-Tools
    state = {
      rtl: false,
      toggled: false,
      collapsed: false,
    };

    static options: MenuOption[] = [
      {
        name: "Home",
        toUrl: "/",
      },
      {
        name: "Component",
        options: [
          {
            name: "Buttons",
            toUrl: "/button",
            hasDivider: true,
          },
          {
            name: "Inputs",
            toUrl: "/input",
            hasDivider: true,
          },
          {
            name: "Select",
            toUrl: "/select",
            hasDivider: true,
          },
          {
            name: "Checkbox",
            toUrl: "/checkbox",
            hasDivider: true,
          },
          {
            name: "Radio",
            toUrl: "/radio",
            hasDivider: true,
          },
          {
            name: "File upload",
            toUrl: "/upload",
            hasDivider: true,
          },
          {
            name: "TextArea",
            toUrl: "/textarea",
          },
        ],
      },
    ];
    static displayName = `withConnectedCount(${BaseComponent.name})`;
    // reference to original wrapped component
    static readonly WrappedComponent = BaseComponent;

    login = async (): Promise<void> => {
      const { login, history } = this.props;
      await login();
      history.push("/inicio");
    };

    componentDidMount = (): void => {
      console.log("componentDidMount public area");
    };

    handleToggleSidebar = (value: boolean): void => {
      this.setState({ toggled: value });
    };

    render(): JSX.Element {
      const { overrideCount, children, t } = this.props;

      return (
        <div className="app">
          <NavBar
            title="Sirius"
            hasLogin={false}
            hasSignUp={false}
            options={Hoc.options}
            key="navbar"
          />
          <BaseComponent
            login={this.login}
            overrideCount={overrideCount} // injected
            {...(children as BaseProps)}
          />
          <Footer>
            <p>{parse(t("footerText"))}</p>
          </Footer>
        </div>
      );
    }
  }

  const ConnectedHoc = connect<
    ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps>, // use "undefined" if NOT using mapDispatchToProps
    Diff<BaseProps, {}>,
    RootState
  >(
    mapStateToProps,
    mapDispatchToProps
  )(Hoc);

  return withRouter(withTranslation()(ConnectedHoc));
};

export default withPublicArea;
