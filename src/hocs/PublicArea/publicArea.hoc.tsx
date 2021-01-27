import { MapDispatchToPropsPublicInterface } from "../../interfaces/hocs.interface";
import React, { Component, ComponentType } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Diff } from "utility-types";
import * as actions from "../../store/actions/";
import { RouteComponentProps } from "react-router-dom";
import { RootState } from "../../store/reducers";
import Action from "../../interfaces/actions.interface";
import NavBar from "../../components/UI/NavBar/navBar.component";

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

interface Hocstate {
  rtl: boolean;
  toggled: boolean;
  collapsed: boolean;
}
// These props will be injected into the base component
export const withPublicArea = <BaseProps extends {}>(
  BaseComponent: ComponentType<BaseProps>
) => {
  class Hoc extends Component<HocProps & RouteComponentProps<{}>, Hocstate> {
    // Enhance component name for debugging and React-Dev-Tools
    state = {
      rtl: false,
      toggled: false,
      collapsed: false,
    };
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
      const { overrideCount, children } = this.props;

      return (
        <div className="app">
          <NavBar className="nevermind" key="navbar" />
          <BaseComponent
            login={this.login}
            overrideCount={overrideCount} // injected
            {...(children as BaseProps)}
          />
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

  return ConnectedHoc;
};

export default withPublicArea;
