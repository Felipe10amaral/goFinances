import React from 'react';
import {View, Text} from 'react-native';

import {Container, Header, UserInfo, Photo, User, UserGreeting, UserName, UserContainer} from './styles';

export function Dashboard() {
    return(
        <Container>
            <Header>
                <UserContainer>
                    <UserInfo>
                        <Photo source={{uri: "https://github.com/felipe10amaral.png"}}/>
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Felipe</UserName>
                        </User>
                    </UserInfo>
                </UserContainer>    
            </Header>
        </Container>
    );    
}