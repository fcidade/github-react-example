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

const Loading = styled.div`
  text-align: center;
`

/**
 * Draws the user profile with his name, biography and avatar
 * @param {Object} props - Component props
 * @param {string} props.name - User name
 * @param {string} props.bio - User biography
 * @param {string} props.avatar - User avatar url
 */
export default function Profile({ name, bio, avatar }){
  if(!name && !bio && !avatar)
    return <Loading>Loading...</Loading>
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
