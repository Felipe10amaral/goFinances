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
                
            >
                <HighLightCard type='up' amount='R$1.100,00' lastTransaction='10/05' title='Entrada'/>
                <HighLightCard type='down' title='Saída' amount='R$70,00' lastTransaction='10/05'/>
                <HighLightCard type='total' title='Total' amount='R$1.030,00' lastTransaction='11/05'/>
            </HighLightCards>
            
        </Container>
    );    
}