import SmallButton from '.';
import { render } from '@testing-library/react';


describe('SmallButton', () => {
  test('should render a button with default props when only \'type\' prop is provided', () => {
    const { getByRole } = render(<SmallButton type="primary" />);
    const button = getByRole('button');
    expect(button).toBeDefined();
    expect(button.textContent).toBe('');
  });

  test('should render a button with type and text props when \'type\' and \'text\' props is provided', () => {
    const { getByRole } = render(<SmallButton type="primary" text="Click me" />);
    const button = getByRole('button');
    expect(button.textContent).toBe('Click me');
  });

  test('should render a button with type and children props when \'type\' and \'children\' props is provided', () => {
    const { getByRole } = render(<SmallButton type="primary"><div>Children</div></SmallButton>);
    const button = getByRole('button');
    expect(button.innerHTML).toBe('<div>Children</div>');
  });

  test('should render a button with type and children props when \'type\', \'text\' and \'children\' props is provided', () => {
    const { getByRole } = render(<SmallButton type="primary" text="Click me"><div>Children</div></SmallButton>);
    const button = getByRole('button');
    expect(button.innerHTML).toBe('Click me');
  });
})