import React, { useState, useContext } from 'react';
import { View, Text, Platform, ActivityIndicator } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles'

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function SignIn() {

    const { signIn, loadingAuth } = useContext(AuthContext)
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignIn() {

        if (email || password) {

            signIn(email, password)

        }

    }

    return (
        <Background>

            <Container
                behavior={Platform.OS == "ios" ? 'padding' : ''}
                enabled
            >

                <Logo

                    source={require("../../../assets/icon.png")}

                />

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

                    />

                </AreaInput>

                <SubmitButton activeOpacity={0.8} onPress={() => handleSignIn()}>

                    {

                        loadingAuth ? (

                            <ActivityIndicator size={20} color="#FFF" />

                        ) : (

                            <SubmitText> Acessar </SubmitText>

                        )
                    }

                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp')}>

                    <LinkText> Crie sua conta! </LinkText>

                </Link>

            </Container>

        </Background>
    );
}