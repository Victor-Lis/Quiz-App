import styled from 'styled-components/native'

export const Background = styled.View`

    flex: 1;
    background-color: #F0F0FF;
    justify-content: center;
    align-items: center;

`

export const Container = styled.View`

    height: 90%;
    width: 90%;
    padding: 15% 2.5%;
    justify-content: space-between;
    align-items: center;
    background-color: #3b3dbf;
    border-radius: 20px;

`

export const Title = styled.Text`

    color: #000;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    padding: 5.5% 9%;
    background: #F0F0FF;
    border-radius: 10px;

`

export const Answer = styled.TouchableOpacity`

    color: #F0F0FF;
    font-size: 15px;
    text-align: center;
    padding: 4% 10%;
    border-radius: 20px;
    background-color: ${props => props.background};

`

export const AnswerText = styled.Text`

    color: #F0F0FF;

`

export const Button = styled.TouchableOpacity`

    font-size: 15px;
    text-align: center;
    padding: 2% 5%;
    border-radius: 10px;
    background-color: ${props => props.background || "#F0F0FF"};

`