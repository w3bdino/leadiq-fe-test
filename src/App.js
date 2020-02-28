import React from 'react';
import { useRoutes } from 'hookrouter';
import SearchPage from './container/search.container'
import UserRepoPage from './container/user.repos.container'
import UserRepoDetailPage from './container/user.repo.detail.container';
import NotFoundPage from './components/pagenotfound/page.not.found';
import './App.scss';

const routes = {
  '/': () => <SearchPage />,
  '/repos/:userid': ({userid}) => <UserRepoPage userid={userid} />,
  '/repos/:userid/:repoid': ({userid, repoid}) => <UserRepoDetailPage userid={userid} repoid={repoid} />   
};

function App() {
  const routeResult = useRoutes(routes);
  return routeResult  || <NotFoundPage />;
}

export default App;
