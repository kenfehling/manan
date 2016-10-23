import { Link } from 'react-router';

export default ({children}) => (
    <div>
        <ul>
            <li><Link to='/page3/detail_1'>One</Link></li>
            <li><Link to='/page3/detail_2'>Two</Link></li>
        </ul>
    </div>
);