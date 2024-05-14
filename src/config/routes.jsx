import { Redirect } from 'react-router-dom';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import Menu from '../views/Menu';
import Document from '../views/Document';

const routes = [
	{ logged: false, path: '/', element: <Redirect to="/signin" /> }
	{ logged: false, path: '/signin', element: <SignIn /> },
	{ logged: false, path: '/signup', element: <SignUp /> },
	{ logged: true, path: '/', element: <Menu /> },
	{ logged: true, path: '/document', element: <Document /> }
]
export default routes;