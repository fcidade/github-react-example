import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`

const Avatar = styled.div`
	width: 64px;

	> * {
		max-width: 100%;
		max-height: 100%;
	}
`

const Details = styled.div`

	padding: 8px;
	padding-top: 0;

	h1 {
		font-size: 18px;
		line-height: 1;
	}

	footer {
		font-size: 12;
		line-height: 1;
	}
`

export default function Profile({ name, bio, avatar }){
	return (
		<ProfileContainer>
			<Avatar>
				<img src={avatar} alt={name}/>
			</Avatar>
			<Details>
				<h1>{name}</h1>
				<footer>{bio}</footer>
			</Details>
		</ProfileContainer>
	)
}
