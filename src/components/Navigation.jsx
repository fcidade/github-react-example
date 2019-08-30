import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
	padding: 0px 16px;	
`

const NavItem = styled.button`
	padding: 8px;
	margin: 8px;
	text-transform: uppercase;
	border: #20232a solid 2px;
	border-radius: 6px;
	background: transparent;
	> * {
		text-decoration: none;
		color: inherit;
	}

	:hover {
		background: #20232a;
		border: transparent solid 2px;
		color: #fefefe;
		cursor: pointer;
	}
`

export default function Navigation(){
	return (
		<NavContainer>
			<Link to='/'><NavItem>Home</NavItem></Link>
			<Link to='/user'><NavItem>User</NavItem></Link>
		</NavContainer>
	)
}
