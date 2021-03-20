import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import { Context } from './context/index.jsx';
import { Navbar } from './components';
import { Home, Login } from './pages';

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
              <Route exact path="/profile" render={() => <p>profile</p>} />
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
