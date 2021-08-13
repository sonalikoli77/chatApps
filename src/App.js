import logo from './logo.svg';
import './App.css';
import Register from "./Components/Register/Register";
import { BrowserRouter,Route,Link,Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Messenger from './Components/Messenger/Messenger';
import ProfileSidebar from './Components/ProfileSidebar/ProfileSidebar';
import FriendsList from './Components/FriendsList/FriendsList';
import Chatmain from './Components/Chatmain/Chatmain';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact={true} component={Register} />
              <Route path="/Register">
                <Register />
              </Route> 
              <Route path="/messenger"  exact component={Messenger}/>
              <Route path="/profilesidebar"  exact component={ProfileSidebar}/>
              <Route path="/friendslist"  exact component={FriendsList}/>
              <Route path="/chatmain"  exact component={Chatmain}/>
                 
          </Switch>
        </div>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
