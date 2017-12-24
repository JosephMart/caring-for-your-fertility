import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Footer from '../../components/Footer'
import AddTodo from '../AddTodo';
import VisibleTodoList from '../VisibleTodoList';

export const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

export const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)
export const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
