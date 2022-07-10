import React from 'react';


import {Container, 
        Header, 
        UserInfo, 
        Photo, 
        User, 
        UserGreeting, 
        UserName, 
        UserContainer,
        HighLightCards, 
        Icon} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { HighLightCard } from '../../components/HighLightCards';

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
                    <Icon name="power-off"/>
                </UserContainer>    
            </Header>
            <HighLightCards
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 24 }}
            >
                <HighLightCard />
                <HighLightCard />
                <HighLightCard />
            </HighLightCards>
            
        </Container>
    );    
}