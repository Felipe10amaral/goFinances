import React, {useState} from 'react';
import { Modal } from 'react-native';

import { Button } from '../../components/forms/Button';
import { CategorySelect } from '../../components/forms/CategorySelect';
import { Input } from '../../components/forms/input';
import { TransactionTypeButton } from '../../components/forms/TransactionTypeButton';
import { CategoryModal } from '../CategoryModal';
import {Container, Header, Title, Form, Fields, TransactionsTypes} from './styles';

export function Register() {
    const [ transactionType, setTransactionType ] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
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

              <CategorySelect 
                onPress={handleOpenSelectCategoryModal}
                title={category.name} 
              />  
           </Fields> 
            <Button 
            title='Enviar'/>
           
          </Form>  

          <Modal visible={categoryModalOpen}>
            <CategoryModal 
                category={category}
                setCategory={setCategory}
                closeSelectCategory={handleCloseSelectCategoryModal}
            />
          </Modal>
        </Container>
    );

}