import React from 'react';
import { create } from 'react-test-renderer';
import UserDone from '../UserDone';


describe('UserDone component', () => {
  test('Render Correctly', () => {
    const userDone = create(<UserDone />);
    expect(userDone.toJSON()).toMatchSnapshot();
  })
})