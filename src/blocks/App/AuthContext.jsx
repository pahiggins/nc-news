import React from 'react';

const AuthContext = React.createContext({
  username: '',
  toggleUsername: () => {},
});

export default AuthContext;
