import './register.css';
function App() {
    return (
      <div className="App">
<h1>REGISTER</h1>
    <h3>Please complete to create your account </h3>
    <div class="container">
        <div className="content">
            <label for="name">Name</label>
            <input type="text" placeholder="Enter your name" required/>
            <label for="name">Username</label>
            <input type="text" placeholder="Enter your username" required/>
            <label for="email">Email address</label>
            <input type="email" placeholder="Enter your email" required/>
            <label for="password">Password</label>
            <input type="password" placeholder="Enter your password" required/>
            <label for="password">Confirm Password</label>
            <input type="password" placeholder="Confirm your password" required/>
            <div class="box">
                <input type="checkbox" required/>
                <label for="terms">I agree to the Terms and Policy</label>
            </div>
        </div>
    </div>
    <div class="item">
        <button class="login_button">REGISTER</button>
    </div>
    </div>
    );
}
export default App;