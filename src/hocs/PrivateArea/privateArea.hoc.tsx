import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Diff } from "utility-types";
import Action from "../../interfaces/actions.interface";
import {
  MapDispatchToPropsInterface,
  MapStateToPropsInterface,
} from "../../interfaces/hocs.interface";
import * as actions from "../../store/actions/";
import { RootState } from "../../store/reducers";

const mapStateToProps = (state: RootState): MapStateToPropsInterface => ({
  sum: state.Reducers.sum,
  name: state.Reducers.name,
  isLoggedIn: state.AuthReducers.isLoggedIn,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<Action, {}, AnyAction>
): MapDispatchToPropsInterface => {
  return {
    add: (addNumber: number): Action => dispatch(actions.add(addNumber)),
    remove: (removeNumber: number): Action =>
      dispatch(actions.remove(removeNumber)),
  };
};

type PrivateAreaProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    // here you can extend ConnectedHoc with new props
    overrideCount?: number;
  };

// These props will be injected into the base component
export const withPrivateArea = <BaseProps extends {}>(
  BaseComponent: React.ComponentType<BaseProps>
) => {
  class PrivateArea extends React.Component<PrivateAreaProps> {
    // Enhance component name for debugging and React-Dev-Tools
    static displayName = `withConnectedCount(${BaseComponent.name})`;
    // reference to original wrapped component
    static readonly WrappedComponent = BaseComponent;

    fun = (): void => {
      const { add, remove } = this.props;
      console.log("fun");
      add(5);
      remove(4);
    };

    componentDidMount = (): void => {
      const { add, remove } = this.props;
      console.log("componentDidMount Logged in");
      add(5);
      remove(4);
    };

    render(): JSX.Element {
      const { sum, name, overrideCount, isLoggedIn, children } = this.props;
      if (!isLoggedIn) {
        return <Redirect to="/" />;
      }
      return (
        <BaseComponent
          fun={this.fun}
          overrideCount={overrideCount} // injected
          sum={sum} // injected
          name={name} // injected
          {...(children as BaseProps)}
        />
      );
    }
  }

  const ConnectedPrivateArea = connect<
    ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps>, // use "undefined" if NOT using mapDispatchToProps
    Diff<BaseProps, {}>,
    RootState
  >(
    mapStateToProps,
    mapDispatchToProps
  )(PrivateArea);

  return ConnectedPrivateArea;
};

export default withPrivateArea;
