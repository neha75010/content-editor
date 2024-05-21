import { useContext, useState } from "react"
import { AppContext } from "../providers/AppProvider";
import Box from "../comps/Box";
import styled from "styled-components";
import { Button, Input } from "../comps/Input";
import { Link } from "react-router-dom";
import LoginForm from "../comps/LoginForm";

export default function SignUp () {
	const [ username, setUsername ] = useState();
	const [ password, setPassword ] = useState();
	const [ passwordC, setPasswordC ] = useState();
	const { axios, reloadCookies } = useContext(AppContext);

	return <Box style={{ alignItems : "center", justifyContent : "center", color: "white" }}>
		<h1 style={{ margin: 0 }}>Connexion</h1>
		<small>Vous avez un compte ? <Link to={"/signup"}>Connectez-vous !</Link></small>
		<LoginForm onSubmit={e => {
			e.preventDefault();
			axios.emit('user/signup', {username, password, passwordC}, r => {
				reloadCookies(r);
				console.log(r);
			});
		}}>
			<Input type="text" value={username} placeholder="Nom d'utilisateur" onInput={e => setUsername(e.target.value)} />
			<Input type="password" value={password} placeholder="Mot de passe" onInput={e => setPassword(e.target.value)} />
			<Input type="password" value={passwordC} placeholder="Mot de passe (confirmation)" onInput={e => setPasswordC(e.target.value)} />
			<Button>Inscription</Button>
		</LoginForm>
	</Box>
}