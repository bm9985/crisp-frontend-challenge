import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.';
import { HeaderProps } from './index'; // Import HeaderProps type

// Define a function to create props for testing
const createProps = (props?: Partial<HeaderProps>): HeaderProps => ({
  title: 'Title',
  ...props,
});

describe('Header Component', () => {
  it('should render and match the snapshot', () => {
    const props: HeaderProps = createProps({
      rightContent: <div>node</div>,
      children: <div>node</div>,
    });

    render(<Header {...props} />);
    const headerWrapper = screen.getByTestId('headerWrapper');

    expect(headerWrapper).toMatchSnapshot();
  });

  it('should render without errors', () => {
    render(<Header {...createProps()} />);
    const headerWrapper = screen.getByTestId('headerWrapper');

    expect(headerWrapper).toBeInTheDocument();
  });

  it('should have invert class if invert is true', () => {
    const props: HeaderProps = createProps({ invert: true });
    render(<Header {...props} />);
    const headerContainer = screen.getByTestId('headerContainer');

    expect(headerContainer).toHaveClass('invert');
  });

  it('should render right content properly', () => {
    const props: HeaderProps = createProps({ rightContent: <div>test</div> });
    render(<Header {...props} />);
    const headerRightContent = screen.getByTestId('headerRightContent');

    expect(headerRightContent).toMatchSnapshot();
  });

  it('should render children if they exist as props', () => {
    const children : any  = <div>test</div>;
    const props: HeaderProps = createProps({ children });
    render(<Header {...props} />);
    const headerContainer = screen.getByTestId('headerContainer');

    expect(headerContainer).toContainElement(children);
  });

  it("should not render children if they don't exist as props", () => {
    render(<Header {...createProps()} />);
    const headerContainer = screen.getByTestId('headerContainer');

    expect(headerContainer).toBeEmptyDOMElement();
  });
});
