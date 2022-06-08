import React from 'react';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Category from './pages/Category'
import Post from './pages/Post'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import CreateNew from './pages/CreateNew';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route  path="/" element={<MainPage/>}/>
          <Route  path="/category/:cat" element={<Category/>}/>
          <Route  path="/:id" element={<Post/>}/>
          <Route  path="/create" element={<CreateNew/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/signUp" element={<SignUp/>}/>
        </Routes>
      </Router>
     
    
    </div>
 
  );
}

export default App;
