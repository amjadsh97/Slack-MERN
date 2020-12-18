import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Chat from "./components/Chat";
import {useState} from "react";
import Login from "./components/Login";
import {useStateValue} from "./StateProvider";

function App() {
    // const [user, setUser] = useState(null);
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="app">
            <Router>
                {!user ? <Login/> : (
                    <>
                    <Header/>

                    <div className="app__body">
                        <Sidebar/>
                        <Switch>
                            <Route path='/room/:roomId'>
                                <Chat/>
                            </Route>
                            <Route path='/'>

                            </Route>
                        </Switch>
                    </div>
                </>)}

                {/*sidebar*/}
                {/*chat screen*/}
            </Router>

        </div>
    );
}

export default App;
