import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
// it is responsible for providing the reducer / redux to the react  
import { Provider } from 'react-redux';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">

        {/* here passing cake as props means we are passing cake=true as prop and value  */}
        <ItemContainer cake />
        <ItemContainer  />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
// Note:------ Provider component don't know about the redux store so we need to specify redux store as a prop .
// Note:-------- we should provide redux store on the top of the app component generally 