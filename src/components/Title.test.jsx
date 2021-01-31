import { h } from 'preact';
import { render } from '@testing-library/preact';
import '@testing-library/jest-dom/extend-expect';
import Title from './Title';

describe('<Title>', () => {
  it('renders the title as h1', () => {
    const { getByText } = render(<Title content="buildless.site" />);
    const title = getByText(/buildless.site/i);
    expect(document.body.contains(title));
  });
});
