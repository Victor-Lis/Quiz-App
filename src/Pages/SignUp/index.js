import React, { useContext, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, } from '../SignIn/styles'

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {

    const { signUp, loadingAuth } = useContext(AuthContext)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignUp(){    

        if(email || password || nome){

            signUp(email, password, nome)

        }

    }

 return (
    <Background>

        <Container
            behavior={Platform.OS == "ios" ? 'padding': ''}
            enabled
        >

            <Logo

                source={require("../../../assets/icon.png")}

            />
            
            <AreaInput>
            
                <Input
            
                    placeholder='Nome'
                    value={nome}
                    onChangeText={(txt) => setNome(txt)}

                />

            </AreaInput>

            <AreaInput>
            
                <Input
                
                    placeholder='Seu email'
                    value={email}
                    onChangeText={(txt) => setEmail(txt)}

                />

            </AreaInput>

            <AreaInput>

                <Input
                
                    placeholder='Sua senha'
                    value={password}
                    onChangeText={(txt) => setPassword(txt)}
                    // secureTextEntry={true}

                />

            </AreaInput>

            <SubmitButton activeOpacity={0.8} onPress={() => handleSignUp()}>

            {
            
                loadingAuth? (

                    <ActivityIndicator size={20} color="#FFF" />
 
                ): (

                    <SubmitText> Cadastrar </SubmitText>

                )
                    
            }

            </SubmitButton>

        </Container>

    </Background>
  );
}