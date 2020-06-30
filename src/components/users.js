import React, {Suspense} from 'react';
import MyErrorBoundary from './MyErrorBoundary';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Link } from 'react-router-dom';
const Contact = React.lazy(() => import('./contact'));

const User = ({ match }) => <p>{match.params.id}</p>

class Users extends React.Component {
    render() {
        console.log(this.props)
        const { params } = this.props.match
        return (
            <>
                <h1>Users</h1>
                <strong>select a user</strong>
                <ul>
                    <li>
                        <Link to="/users/1">User 1 </Link>
                    </li>
                    <li>
                        <Link to="/users/2">User 2 </Link>
                    </li>
                    <li>
                        <Link to="/users/3">User 3 </Link>
                    </li>
                </ul>
                <Route path="/users/:id" component={User} />
                <MyErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <section>
                        <Contact />
                    </section>  
                </Suspense>
                </MyErrorBoundary>

            </>
        )
    }
}

export default Users