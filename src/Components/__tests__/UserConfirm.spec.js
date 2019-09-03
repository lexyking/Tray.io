import React from 'react';
import { create } from 'react-test-renderer';
import UserConfirm from '../UserConfirm';


describe('UserConfirm component', () => {
  test('Render Correctly', () => {
    const userConfirm = create(<UserConfirm values />);
    expect(userConfirm.toJSON()).toMatchSnapshot();
  })
})