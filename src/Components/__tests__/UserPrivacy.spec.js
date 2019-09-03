import React from 'react';
import { create } from 'react-test-renderer';
import UserPrivacy from '../UserPrivacy';

// Because the header is an invariable component in this applicationCache, we can test the Snapshot
// and compare it to the previous one

describe('UserPrivacy component', () => {
  test('Render Correctly', () => {
    // const values = { isUpdate: false, isCommunication: false }
    const userPrivacy = create(<UserPrivacy values />);
    expect(userPrivacy.toJSON()).toMatchSnapshot();
  })
})