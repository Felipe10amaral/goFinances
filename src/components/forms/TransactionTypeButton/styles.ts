import styled, {css} from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
    type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1.5px solid ${({theme}) => theme.colors.text};
    border-radius: 5px;
    padding: 16px 59px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    ${(props) => props.type === 'up' && css`
        color: ${({theme}) => theme.colors.success_light};
    `};

    ${(props) => props.type === 'down' && css`
        color: ${({theme}) => theme.colors.attention};
    `};
`;