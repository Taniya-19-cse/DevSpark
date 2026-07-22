import {Routes,Route} from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./Store/store";
import { Feed } from "./components/Feed";
function App() {
 

  return (
    <>
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Body/>}>
      <Route path="/" element={<Feed/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Route>
    </Routes>
    </Provider>
    
    </>
  )
}

export default App
