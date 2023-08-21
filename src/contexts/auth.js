import React, { createContext, useState, useEffect } from 'react'

import api from '../services/api'
import { useNavigation } from '@react-navigation/native'

import AsyncStorage from "@react-native-async-storage/async-storage"

export const AuthContext = createContext({})

export default function AuthProvider({children}){

    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadStorage(){

            const storageUser = await AsyncStorage.getItem("@finToken")        

            if(storageUser){

                const response = await api.get('/me', {

                    headers:{

                        'Authorization': `Bearer ${storageUser}`

                    }

                }).catch((e) => {

                    setUser(null)

                })

                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`
                setUser(response.data)
                setLoading(false)

            }

            setLoading(false)

        }

        loadStorage()

    }, [])

    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)

    async function signUp(email, password, name){
        setLoadingAuth(true)
        try{

            const response = await api.post("/signup", {

                name,
                password,
                email,

            }).then(res => res.data)

            setLoadingAuth(false)
            navigation.goBack()

        }catch(err){

            console.log(`Erro ao cadastrar usuário`, err)
            setLoadingAuth(false)

        }

    }
    async function signIn(email, password){
        setLoadingAuth(true)
        try{

            const response = await api.post(`/signin`, {

                email,
                password,

            }).then(res => {
            
                return res.data.user
            
            }).catch(err => console.log(err))

            console.log(response)

            if (response){
                setUser(response);
                console.log(user)
            }else if(!response){

                alert("Email ou Senha incorretos!");
                return;

            }

            setLoadingAuth(false);

        }catch(err){

            console.log(`Erro ao logar usuário`, err)
            setLoadingAuth(false)

        }

    }    

    return(

        <AuthContext.Provider value={{ signed: !!user, user, signUp, loadingAuth, signIn, loading}}>

            {children}

        </AuthContext.Provider>

    )

}