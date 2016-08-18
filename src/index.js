import { render }  from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="page1" component={Page1} />
            <Route path="page2" component={Page2} />
        </Route>
    </Router>
),document.getElementById('root'));