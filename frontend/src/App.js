import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Followers from "./pages/manage/Follower";
import Following from "./pages/manage/Following";
import Profile from "./pages/profile/Profile";
import Search from "./pages/search/Search";
import Settings from "./pages/settings/Settings";
import Sign from "./pages/sign up/Sign";
import Upload from "./pages/upload/Upload";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./redux/action/useraction";
import Oprofile from "./pages/profile/Oprofile";
import Preupdate from "./pages/update/preupdate";
import Protectedroute from "./protectedroute";
import Protectedroute2 from "./protectedroute2";
import Crevate from "./pages/crevate/crevate";

function App() {
  const { user, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
   
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <>
                  <h1>Loader</h1>
                </>
              ) : (
                <Protectedroute isAuthenticated={isAuthenticated}>
                  <Home user={user}></Home>
                </Protectedroute>
              )
            }
          />
          <Route path="/crevate" element={<Crevate/>}/>
          <Route path="/search" element={<Search />} />

          <Route
            path="/profile"
            element={
              loading ? (
                <>
                  <h1>Loader</h1>
                </>
              ) : (
                <Protectedroute isAuthenticated={isAuthenticated}>
                  <Profile user={user} />
                </Protectedroute>
              )
            }
          />
          <Route
            path="/settings"
            element={
              loading ? (
                <>
                  <h1>Loader</h1>
                </>
              ) : (
                <Protectedroute isAuthenticated={isAuthenticated}>
                  <Settings user={user} />
                </Protectedroute>
              )
            }
          />
          <Route
            path="/upload"
            element={
              loading ? (
                <>
                  <h1>Loader</h1>
                </>
              ) : (
                <Protectedroute isAuthenticated={isAuthenticated}>
                  <Upload user={user} />
                </Protectedroute>
              )
            }
          />
          <Route
            path="/update"
            element={
              loading ? (
                <>
                  <h1>Loader</h1>
                </>
              ) : (
                <Protectedroute isAuthenticated={isAuthenticated}>
                  <Preupdate user={user} />
                </Protectedroute>
              )
            }
          />
          <Route
            path="/signup"
            element={
              loading ? (
                <>
                  <h1>Loader</h1>
                </>
              ) : (
                <Protectedroute2 isAuthenticated={isAuthenticated}>
                  <Sign />
                </Protectedroute2>
              )
            }
          />
          <Route
            path="/login"
            element={
              loading ? (
                <>
                  <h1>Loader</h1>
                </>
              ) : (
                <Protectedroute2 isAuthenticated={isAuthenticated}>
                  <Login />
                </Protectedroute2>
              )
            }
          />
          <Route
            path="/followers"
            element={
              loading ? (
                <>
                  <h1>Loader</h1>
                </>
              ) : (
                <Protectedroute isAuthenticated={isAuthenticated}>
                  <Followers user={user} />
                </Protectedroute>
              )
            }
          />
          <Route
            path="/following"
            element={
              loading ? (
                <>
                  <h1>Loader</h1>
                </>
              ) : (
                <Protectedroute isAuthenticated={isAuthenticated}>
                  <Following user={user} />
                </Protectedroute>
              )
            }
          />
          <Route path="/:id" element={<Oprofile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
