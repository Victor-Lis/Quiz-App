import React, { createContext, useState, useEffect } from 'react'

import api from '../services/api'
import { useNavigation } from '@react-navigation/native'

import AsyncStorage from "@react-native-async-storage/async-storage"

export const QuestsContext = createContext({})

export default function QuestsProvider({children}){
    
    const navigation = useNavigation()

    const [length, setLength] = useState(null)
    const [quests, setQuests] = useState(null)
    
    async function getQuests(){
        try{

            const response = await api.get(`/quests`).then(res => {
            
                setQuests(res.data)
                setLength(res.data.length)

            })

        }catch(err){

            console.log(`Erro ao logar usuário`, err)

        }

    }

    useEffect(() => {

        getQuests()

    }, [])

    return(

        <QuestsContext.Provider value={{ quests: quests, length: length }}>

            {children}

        </QuestsContext.Provider>

    )

}