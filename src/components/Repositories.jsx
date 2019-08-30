import React from 'react';
import Repo from './Repo';

export default function Repositories({ repos }){
	return (
		<main>
			<h1>Recent repos:</h1>
			{repos.map( repo => (
				<Repo
					key={repo.id}
					name={repo.name}
					link={repo.html_url}
					fullname={repo.full_name}
					descrition={repo.description}
				/>
			))}
		</main>
	)
}
