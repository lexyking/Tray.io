import React from 'react';
import { create } from 'react-test-renderer';
import Header from '../Header';

// Because the header is an invariable component in this applicationCache, we can test the Snapshot
// and compare it to the previous one

describe('Header component', () => {
  test('Matches the snapshot', () => {
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
  })
})