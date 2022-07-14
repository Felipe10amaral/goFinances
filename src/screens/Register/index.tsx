import React, {useState} from 'react';
import { Button } from '../../components/forms/Button';
import { Input } from '../../components/forms/input';
import { TransactionTypeButton } from '../../components/forms/TransactionTypeButton';
import {Container, Header, Title, Form, Fields, TransactionsTypes} from './styles';

export function Register() {
    const [ transactionType, setTransactionType ] = useState('');

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }
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
                    onPress={() => handleTransactionTypeSelect('up')}
                    isActive={transactionType === 'up'}
                />
                <TransactionTypeButton 
                    title='Saída'
                    type='down'
                    onPress={() => handleTransactionTypeSelect('down')}
                    isActive={transactionType === 'down'}
                />
              </TransactionsTypes>    
           </Fields> 
            <Button title='Enviar'/>
           
          </Form>  
        </Container>
    );

}