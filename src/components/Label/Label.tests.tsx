import { render, screen } from '@testing-library/react';
import { Label } from './Label';

test('renders label text', () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText('Test Label')).toBeInTheDocument();
});
