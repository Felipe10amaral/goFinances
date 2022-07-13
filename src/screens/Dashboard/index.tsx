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
        Transactions,
        Title, 
        Icon,
        TransactionsList} from './styles';
import { HighLightCard } from '../../components/HighLightCards';
import { TransactionCard } from '../../components/TransactionCard';

export function Dashboard() {
    const data = [{
        type: 'positive',
        title:'Desenvolvimento de site',
        amount:'R$12.000',
        category:{ 
            name:"vendas", 
            icon:"dollar-sign"
        },
        date:"13/05"
    },
    {
        type: 'positive',
        title:'Aplicativo',
        amount:'R$8.000',
        category:{ 
            name:"vendas", 
            icon:"dollar-sign"
        },
        date:"11/05"
    },
    {
        type: 'negative',
        title:'La Brasa Burger',
        amount:'R$70',
        category:{ 
            name:"lanche", 
            icon:"coffee"
        },
        date:"11/05"
    },
    {
        type: 'negative',
        title:'Aluguel',
        amount:'R$600',
        category:{ 
            name:"moradia", 
            icon:"dollar-sign"
        },
        date:"11/05"
    },
    ];
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

            <Transactions>
                <Title>Listagem</Title>
                <TransactionsList 
                    renderItem={({ item }) => <TransactionCard data={item}/>}
                    data={data}
                    showsVerticalScrollIndicator={false}
                />
                
                
            </Transactions>
            
        </Container>
    );    
}