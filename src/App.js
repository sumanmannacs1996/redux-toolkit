import './App.css';
import CakeClassView from './components/CakeClassView';
import ClassUserContainer from './components/ClassUserContainer';
import IcecreamClassView from './components/IcecreamClassView';

function App() {
  return (
    <div className="App">
      <CakeClassView />
      <IcecreamClassView />
      <ClassUserContainer />
    </div>
  );
}

export default App;
