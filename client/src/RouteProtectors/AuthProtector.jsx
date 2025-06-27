import { useEffect } from 'react';

const AuthProtector =  ({ children }) => {

  useEffect(() => {

    if (!localStorage.getItem('userType')) {
      window.location.href = '/';
    }
  }, []);


  return children;
};

export default AuthProtector;
