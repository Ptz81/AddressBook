import { LoginForm } from '../LoginForm/LoginForm.jsx';
import { Helmet } from 'react-helmet';


export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}