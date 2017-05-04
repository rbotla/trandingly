import React from 'react';
import { Route } from 'react-router';
import App from './App';
import PortfoliosHome from './components/portfolios/portfolios-home';
import PortfoliosAnalysis from './components/portfolios/portfolios-analysis';
import CreatePortfolio from './components/portfolios/create-portfolio';
import LaunchPage from './components/launch/launch-page';
import ChatHome from './components/chat/chat-home';
import PageNotFound from './components/page-not-found';

export default (
  <Route component={App}>
    <Route path="/" component={LaunchPage} />
    <Route path="/portfolios" component={PortfoliosHome} />
    <Route path="/portfolio-anlaysis" component={PortfoliosAnalysis} />
    <Route path="/portfolios/create" component={CreatePortfolio} />
    <Route path="/chat" component={ChatHome} />
    <Route path="*" component={PageNotFound} />
  </Route>
);