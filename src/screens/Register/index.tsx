import React from 'react';
import { Button } from '../../components/forms/Button';
import { Input } from '../../components/forms/input';
import { TransactionTypeButton } from '../../components/forms/TransactionTypeButton';
import {Container, Header, Title, Form, Fields, TransactionsTypes} from './styles';

export function Register() {
    return(
        <Container>
            <Header>
                <Title> Cadastro </Title>
            </Header>
          <Form>
           <Fields> 
            <Input 
                placeholder='Nome'
            />
            <Input 
                placeholder='Preço'
            />

              <TransactionsTypes>
                <TransactionTypeButton 
                    title='Entrada'
                    type='up'
                />
                <TransactionTypeButton 
                    title='Saída'
                    type='down'
                />
              </TransactionsTypes>    
           </Fields> 
            <Button title='Enviar'/>
           
          </Form>  
        </Container>
    );

}