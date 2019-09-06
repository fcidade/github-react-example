import React from 'react';
import styled from 'styled-components';
import Repo from './Repo';

const Loading = styled.div`
  text-align: center;
`

export default function Repositories({ repos }){
	return (
		<main>
			<h1>Recent repos:</h1>
      {repos.length <= 0 && <Loading>Loading...</Loading>}
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
