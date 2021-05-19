import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="https://jans-ui.jans.io/jans-auth/restv1/authorize" method="POST">
        <label>
          acr_values:
        <input type="text" name="acr_values" value="simple_password_auth" />
        </label>
        <hr/>
        <label>
          response_type:
        <input type="text" name="response_type" value="code" />
        </label>
        <hr/>
        <label>
          redirect_uri:
        <input type="text" name="redirect_uri" value="http://localhost:4100" />
        </label>
        <hr/>
        <label>
          client_id:
        <input type="text" name="client_id" value="d83886e5-3116-4ca8-97ce-a0028da5202a" />
        </label>
        <hr/>
        <label>
          scope:
        <input type="text" name="scope" value="openid+profile+email+user_name" />
        </label>
        <hr/>
        <label>
          state:
        <input type="text" name="state" value="4fffdaa7-03da-4d87-903f-8d7c25c011f0" />
        </label>
        <hr/>
        <label>
          nonce:
        <input type="text" name="nonce" value="4fffdaa7-03da-4d87-903f-8d7c25c011f0" />
        </label><hr/>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
