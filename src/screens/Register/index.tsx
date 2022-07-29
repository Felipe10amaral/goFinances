import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-native';
import { TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components/forms/Button';
import { CategorySelect } from '../../components/forms/CategorySelect';
import { InputForm } from '../../components/forms/InputForm';
import { TransactionTypeButton } from '../../components/forms/TransactionTypeButton';
import { CategoryModal } from '../CategoryModal';
import {Container, Header, Title, Form, Fields, TransactionsTypes} from './styles';

interface FormData {
    [name: string]: any;
    
}

const scheme = Yup.object().shape({
    name: Yup
        .string()
        .required('Nome é obrigatório'),
    amount: Yup
        .number()
        .typeError('Informe um valor numérico')
        .positive(' O valor não pode ser negativo')
        .required(' O valor é obrigatório')
})

export function Register() {
    const [ transactionType, setTransactionType ] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    const { control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(scheme)
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

    function handleRegister(form: FormData) {
        if(!transactionType) {
            Alert.alert("Erro", "Selecione um tipo de transação");
        }

        if(category.key === 'category' ){
            Alert.alert("Erro", "Selecione a categoria");
        }
       const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }

        console.log(data); 
    }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>   
          <Container>
           
            <Header>
                <Title> Cadastro </Title>
            </Header>
          <Form>
           <Fields> 
            <InputForm
                placeholder='Nome'
                control={control}
                name="name"
                autoCapitalize="characters"
                autoCorrect={false}
                error={errors.name && errors.name.message}
            />
            <InputForm 
                placeholder='Preço'
                control={control}
                name="amount"
                keyboardType="numeric"
                error={errors.amount && errors.amount.message}
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
        </TouchableWithoutFeedback>  
    );

}