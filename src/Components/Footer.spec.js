import React from 'react';
import { create } from 'react-test-renderer';
import Footer from './Footer';

// Because the footer is an invariable component in this applicationCache, we can test the Snapshot
// and compare it to the previous one

describe('Footer component', () => {
  test('Matches the snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  })
})