/* eslint-disable no-unused-vars */
import Dashboard from "./Pages/Dashboard"
import GroupDetailView from "./Pages/GroupPage"
import LandingPage from "./Pages/LandingPage"
import Login from "./Pages/auth/Login"
import Signup from "./Pages/auth/SignUp"

import { BrowserRouter as Router , Routes, Route } from "react-router-dom"

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={< LandingPage />} />
        <Route path="/group/:id">
          {({ match }) => {
            const group = groupData.find(
              (g) => g.id === parseInt(match.params.id)
            );
            return group ? <GroupDetailView group={group} /> : <p>Group not found</p>;
          }}
        </Route>
        <Route exact path="/home" element={< Dashboard />} />
        <Route exact path="/group/:id" element={<GroupDetailView />} />
       
      </Routes>
    </Router>
    </>
  )
}

export default App
