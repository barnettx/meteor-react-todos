import { Meteor } from 'meteor/meteor';

import { TasksCollection } from '../imports/api/TasksCollection';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
    ].forEach((text) => TasksCollection.insert({text}))
  }

  const SEED_USERNAME = 'meteorite'
  const SEED_PASSWORD = 'password'

  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    })
  }
});
