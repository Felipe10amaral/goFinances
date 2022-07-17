import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-native';

import { Button } from '../../components/forms/Button';
import { CategorySelect } from '../../components/forms/CategorySelect';
import { Input } from '../../components/forms/input';
import { InputForm } from '../../components/forms/InputForm';
import { TransactionTypeButton } from '../../components/forms/TransactionTypeButton';
import { CategoryModal } from '../CategoryModal';
import {Container, Header, Title, Form, Fields, TransactionsTypes} from './styles';

interface FormData {
    [name: string]: any;
    
}

export function Register() {
    const [ transactionType, setTransactionType ] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    const { control, handleSubmit} = useForm();

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }

    function handleRegister(form: FormData) {
       const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }

        console.log(data); 
    }
    return(
        <Container>
            <Header>
                <Title> Cadastro </Title>
            </Header>
          <Form>
           <Fields> 
            <InputForm
                placeholder='Nome'
                control={control}
                name="nome"
            />
            <InputForm 
                placeholder='Preço'
                control={control}
                name="preco"
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
                title='Enviar'
                onPress={ handleSubmit(handleRegister) }            
            />
           
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