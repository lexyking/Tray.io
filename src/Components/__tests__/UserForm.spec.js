import React from 'react';
import { create } from 'react-test-renderer';
import UserForm from '../UserForm';

// Because the header is an invariable component in this applicationCache, we can test the Snapshot
// and compare it to the previous one

describe('UserForm component', () => {
  test('Matches the snapshot', () => {
    const userForm = create(<UserForm />);
    expect(userForm.toJSON()).toMatchSnapshot();
  })
})