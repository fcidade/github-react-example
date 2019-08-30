import React from 'react';
import hey from 'hey-quest';

import DefaultLayout from '../layouts/Default';
import Profile from '../components/Profile';
import Repositories from '../components/Repositories';

function UserDetails(){

	const [user, setUser] = React.useState({});
	const [repos, setRepos] = React.useState([]);

	async function getUserDetails(){
		const res = await hey('https://api.github.com/users/franckcid').do();
		if(res.ok){
			const userJson = await res.json();
			setUser(userJson);
		}
	}

	async function getUserRepos(){
		const res = await hey('https://api.github.com/users/franckcid/repos?sort=updated').do();
		if(res.ok){
			const reposJson = await res.json();
			setRepos(reposJson.slice(0,3));
		}
	}

	React.useEffect(() => {
		getUserDetails();
		getUserRepos();
	}, []);

	return (
		<DefaultLayout
			title="User Details"
			description="Basic info 'bout your account."
		>
			<Profile
				name={user.name}
				bio={user.bio}
				avatar={user.avatar_url}
			/>
			<Repositories
				repos={repos}
			/>
		</DefaultLayout>
	)
}

export default UserDetails;
