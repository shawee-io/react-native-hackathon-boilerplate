import styled from 'styled-components/native';
import Icon from "react-native-vector-icons/Ionicons";

import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export const HeaderContainer = styled.View`

    display: flex;
    flex: 1;
    background-color: #FFE700;
    padding: 29px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 1;
    elevation: 3;

`;

export const Title = styled.Text`

    text-align: center;
    font-size: 19px;

`;

export const IconHeaderLeft = styled(Icon)`

`;


export const TextInformation = styled.Text`

    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    color: #DDDDDD;
    line-height: 21px;


`;

export const Error = styled.Text`

    color: #E37A7A;
    text-align: center;
    margin-top: 10px;

`;