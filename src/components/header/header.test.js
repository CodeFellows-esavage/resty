import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from './index';

describe('Testing the Header component', () => {
  it('should render the title', () => {
    //temp test to practice testing, no functionality is actually tested here...
    render(<Header />);

    let title = screen.getByText('RESTy');
    console.log(title);
    expect(title).toBeInTheDocument();
  });
});