import { render }  from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page3Master from './components/Page3Master';
import Page3Detail1 from './components/Page3Detail1';
import Page3Detail2 from './components/Page3Detail2';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="page1" component={Page1} />
            <Route path="page2" component={Page2} />
            <Route path="page3" component={Page3}>
                <IndexRoute component={Page3Master} />
                <Route path="detail_1" component={Page3Detail1} />
                <Route path="detail_2" component={Page3Detail2} />
            </Route>
        </Route>
    </Router>
),document.getElementById('root'));