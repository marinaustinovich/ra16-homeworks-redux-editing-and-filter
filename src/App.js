import { Fragment } from 'react';
import './App.css';
import ServiceAdd from './components/ServiceAdd/ServiceAdd';
import ServiceList from './components/ServiceList/ServiceList';
import ServiceFilter from './components/ServiceFilter/ServiceFilter';

function App() {
  return (
    <div className="App">
      <Fragment>
        <ServiceAdd />
        <ServiceFilter/>
        <ServiceList />
      </Fragment>
    </div>
  );
}

export default App;
