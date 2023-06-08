/*
import ChatContainer from './components/ChatContainer.js'
function App() {
  return (
    <div style={{backgroundColor: "#FFFFFF", height: "100vh"}}>
     <ChatContainer/>

    </div>
  );
}

export default App;
*/



import React, { useState } from 'react';
import ChatContainer from './components/ChatContainer.js'

const button = {
  width:'10%' ,
  height:50 ,
  fontWeight:'bold', 
  borderRadius:10 ,
  fontSize:18 ,
  backgroundColor:'#000000',
  borderWidth:0,
  color:'#fff',
  margin:10
}

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or API call to verify username and password
    // For simplicity, we'll use hardcoded values here
    if (username === 'singcaneil@gmail.com' && password === 'qqq') {
      handleLogin(username);
    } 
   /* else if (username === 'client' && password === 'client') {
        handleLogin(username);
    }
    */

    else {
      alert('Invalid username or password');
    }
  };

  return (
      
    <form onSubmit={handleSubmit}>
      <div style={{display: 'flex', justifyContent: 'center'}}>

      <input
        style={{margin:10, height:30, width:'25%', borderRadius:10, borderWidth:10, fontSize:20, paddinginLine:5}}
        type="email"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> 
      </div>

      <div style={{display: 'flex', justifyContent: 'center'}}>
      <input
        style={{margin:10, height:30, width:'25%', borderRadius:10, borderWidth:10, fontSize:20, paddinginLine:5}}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>

      <div style={{display: 'flex', justifyContent: 'center'}}>
      <button 
      style={button}
      value="Submit"
      >Log In</button>

      </div>
     
   


      
    </form>
    
  );
};

const Logout = ({ handleLogout, username }) => {
  return (
    <div>
      <div style={{backgroundColor: "#000000", height: "100vh"}}>
     <ChatContainer/>
     </div>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div>
      
      {isLoggedIn ? (
        <Logout handleLogout={handleLogout} username={username} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;

