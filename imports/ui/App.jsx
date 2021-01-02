import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import { TasksCollection } from '../api/TasksCollection';
import { Task } from './Task';

import { TaskForm } from './TaskForm';

const toggleChecked = ({_id, isChecked}) => {
  TasksCollection.update(_id, {
    $set: {
      isChecked: !isChecked
    }
  })
}

export const App = () => {

  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch())

  return (
    <div>
      <h1>Welcome to Meteor!</h1>

    <TaskForm/>
      
      <ul>
        { tasks.map(task => <Task key={task._id} task={task} onCheckboxClick={toggleChecked}/>) }
      </ul>
    </div>
  )
};
