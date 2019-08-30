import React from 'react';
import styled from 'styled-components';

const RepoItem = styled.div`
	
	padding: 8px 0;

	border-bottom: solid 1px #333;

	h1 {
		font-size: 18px;
		line-height: 1.5;
		margin: 0;

		a {
			color: inherit;
			text-decoration: none;
		}

		a:hover {
			background: #000;
			color: #fff
		}
	}
	
	span, footer{
		font-size: 16px;
		line-height: 1;
		color: #333;
	}
`

export default function Repo({ name, link, fullname, description }){
	return (
		<RepoItem>
			<h1><a href={link}>{name}</a></h1>
			<span>{fullname}</span>
			<footer>{description}</footer>
		</RepoItem>
	)
}
