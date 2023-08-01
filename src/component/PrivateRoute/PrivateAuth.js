import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';


const PrivateAuth = ({ children, ...rest }) => {
    const [loggedInUser]=useContext(UserContext);
    // console.log(children);
    
   return (
        <Route
      {...rest}
      render={({ location } ) =>
    {
       
        
        return   !loggedInUser?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: location?.state?.from?.pathname,
                state: { from: location }
              }}
            />
          )
    }
      }
    />
    ); 
   
};

export default PrivateAuth;