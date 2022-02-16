import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from './index';

describe('Testing the Footer component', () => {
  it('should render the copyright date', () => {
    //temp test to practice testing, no functionality is actually tested here...
    render(<Footer />);
    let date = screen.getByText('© 2018');
    expect(date).toBeInTheDocument();
  });
});

