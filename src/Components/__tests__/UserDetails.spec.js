import React from 'react';
import { create } from 'react-test-renderer';
import UserDetails from '../UserDetails';


describe('UserDetails component', () => {
  test('Render Correctly', () => {
    const userDetails = create(<UserDetails values />);
    expect(userDetails.toJSON()).toMatchSnapshot();
  })
})