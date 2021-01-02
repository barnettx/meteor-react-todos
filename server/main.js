import { Meteor } from 'meteor/meteor';

import { TasksCollection } from '../imports/api/TasksCollection';

let insertTask = 

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
    ].forEach((text) => TasksCollection.insert({text}))
  }
});
