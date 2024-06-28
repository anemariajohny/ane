//import './App.css';
import './login.css';

function App() {
  return (
    <div className="App">
      <h1>Get Started Now</h1>
    <h3>Enter your credentials to access your account</h3>
    <div className="login-section">
        <button className="login_method">Login with Google</button>
        <button className="login_method">Login with Apple</button>
    </div>
    <div className="container">
        <div className="content">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required/>
            <label for="email">Email address</label>
            <input type="email" id="email" placeholder="Enter your email" required/>
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required/>
            <div className="box">
                <input type="checkbox" id="terms" required/>
                <label for="terms">I agree to the Terms and Policy</label>
            </div>
      </div>
    </div>
    <div className="item">
        <button className="login_button">LOGIN</button>
    </div>
    </div>
    
  );
}
export default App;
