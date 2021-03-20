import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Context } from './context';
import Navbar from './components';
import { Home, Login, Profile } from './pages';

import { PageWrapper, ContentWrapper } from './style';

const App = () => {
  const { isLogged } = useContext(Context);

  useEffect(() => {
    console.log('placeholder');
  }, []);

  return (
    <PageWrapper>
      {!isLogged ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <ContentWrapper>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/home" render={() => <Home />} />
              <Route exact path="/profile" render={() => <Profile />} />
              <Route
                exact
                path="/my_application"
                render={() => <p>my application</p>}
              />
              <Route path="/tech" render={() => <p>tech</p>} />
            </Switch>
          </ContentWrapper>
        </>
      )}
    </PageWrapper>
  );
};

export default App;
