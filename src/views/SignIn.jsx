import { useContext, useState } from "react"
import { AppContext } from "../providers/AppProvider";

export default function SignIn () {
	const [ username, setUsername ] = useState();
	const [ password, setPassword ] = useState();
	const { axios, reloadCookies } = useContext(AppContext);

	return <div>
		<form onSubmit={e => {
			e.preventDefault();
			axios.emit('user/signin', {username, password}, r => {
				reloadCookies(r);
				console.log(r);
			});
		}}>
			<input type="text" value={username} onInput={e => setUsername(e.target.value)} />
			<input type="password" value={password} onInput={e => setPassword(e.target.value)} />
			<button>Sign In</button>
		</form>
	</div>
}