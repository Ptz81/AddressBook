import { useAuth } from './hooks/useAuth.js';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from './redux/auth/operations.js';
import { Layout } from './Layout.jsx';
import { RestrictedRoute } from './RestrictedRoute.jsx';
import { PrivateRoute } from './PrivateRoute.jsx';
import Loader from './components/Loader/Loader.jsx';


const HomePage = lazy(() => import('./components/pages/Home.jsx'));
const RegisterPage = lazy(() => import('./components/pages/Register.jsx'));
const LoginPage = lazy(() => import('./components/pages/Login.jsx'));
const ContactPage = lazy(() => import('./components/pages/Contacts.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader/>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/table" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/table" component={<LoginPage />} />
          }
        />
        <Route
          path="/table"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

