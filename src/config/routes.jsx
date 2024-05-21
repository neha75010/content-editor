import { Navigate } from 'react-router-dom';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import Menu from '../views/Menu';
import Document from '../views/Document';
import SignOut from '../views/SignOut';

const routes = [
	{ logged: false, path: '/', element: <Navigate to="/signin" /> },
	{ logged: false, path: '/signin', element: <SignIn /> },
	{ logged: false, path: '/signup', element: <SignUp /> },
	{ logged: true, path: '/', element: <Menu /> },
	{ logged: true, path: '/signout', element: <SignOut /> },
	{ logged: true, path: '/docs/:id', element: <Document /> },
	{ path: '*', element: <Navigate to="/" /> }
]
export default routes;