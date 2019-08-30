import React from 'react';
import Navigation from '../components/Navigation';
import styled from 'styled-components';

const FullPageCentered = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;	
	justify-content: center;
	align-items: center;
`

const Title = styled.div`
	font-size: 36px;
	font-weight: bold;
`

const Description = styled.div`
	font-size: 16px;
	font-weight: normal;
`


const Content = styled.div`
	margin: ${props => props.children ? '16px' : '0'};
`


function Default({title, description, children}){
	return (
		<FullPageCentered>
			<Title>{title}</Title>
			<Description>{description}</Description>
			<Content>
					{children}
			</Content>
			<Navigation/>
		</FullPageCentered>
	)
}

export default Default;
