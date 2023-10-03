import PropTypes from 'prop-types'
import { configureStore } from '@reduxjs/toolkit';
import reducers from '../store/reducers';

export const findByTestAttr = (component, attr) =>
  component.find(`[data-test='${attr}']`);

  export const checkProps = ({ propTypes, name }, expectedProps) => {
    const propError = PropTypes.checkPropTypes(propTypes, expectedProps, 'props', name);
    expect(propError).toBeUndefined();
  };

export const testStore = (preloadedState) =>
  configureStore({
    reducer: reducers,
    preloadedState,
  });
