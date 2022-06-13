import './App.css';
import GoogleLogin from "react-google-login"

const App = () => {

  const responseGoogleFaliure = (result) => {
    alert(result);
    console.log(result)
  }

  const responseGoogleSuccess = (googleData) => {
    console.log(googleData)
  }

  return (
    <div className="App">
     <h1>
       Login with Google
     </h1>

     <div style={{padding:"3rem"}} >
     <GoogleLogin
      clientId="993442806339-d503vbd2suhade34g4m61l911e0n062u.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogleSuccess}
      onFailure={responseGoogleFaliure}
      cookiePolicy={'single_host_origin'}
    />
     </div>
    </div>
  );
}

export default App;
