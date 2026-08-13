import {Routes,Route} from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./Store/store";
import { Feed } from "./components/Feed";
import { BrowserRouter } from "react-router-dom";
import Profile from "./components/Profile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
function App() {
 

  return (
    <>
     <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
               <Route path="/profile" element={<Profile />} />
             <Route path="/connections" element={<Connections />} />
               <Route path="/requests" element={<Requests />} />
              {/*  <Route path="/premium" element={<Premium />} />
              <Route path="/chat/:targetUserId" element={<Chat />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    
    </>
  )
}

export default App
