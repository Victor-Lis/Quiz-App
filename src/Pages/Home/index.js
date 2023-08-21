import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../contexts/auth'
import { QuestsContext } from '../../contexts/quest';

import { Background, Container, Title, Answer, AnswerText, Button } from './styles'

export default function Home(){

  const { user } = useContext(AuthContext)
  const { quests, length } = useContext(QuestsContext)
  const [index, setIndex] = useState(0)
  const [quest, setQuest] = useState(quests[index].quest)
  const [chute, setChute] = useState()
  const [anwser1, setAnwser1] = useState(quests[index].answer1)
  const [anwser2, setAnwser2] = useState(quests[index].answer2)
  const [anwser3, setAnwser3] = useState(quests[index].answer3)
  const [anwser4, setAnwser4] = useState(quests[index].answer4)
  const [answer1isSelected, setAnswer1isSelected] = useState(false)
  const [answer2isSelected, setAnswer2isSelected] = useState(false)
  const [answer3isSelected, setAnswer3isSelected] = useState(false)
  const [answer4isSelected, setAnswer4isSelected] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState(quests[index].correctAnswer)
  const [pontos, setPontos] = useState(0)

  function chutar(){

    if(!answer1isSelected && !answer2isSelected && !answer3isSelected && !answer4isSelected){

      return

    }else{

      if(answer1isSelected){

        setChute(1)
        if(correctAnswer == 1){

          setPontos(pontos + 100)

        }else{

          setPontos(pontos - 50)

        }

      }else if(answer2isSelected){

        setChute(2)
        if(correctAnswer == 2){

          setPontos(pontos + 100)

        }else{

          setPontos(pontos - 50)

        }


      }else if(answer3isSelected){

        setChute(3)
        if(correctAnswer == 3){

          setPontos(pontos + 100)

        }else{

          setPontos(pontos - 50)

        }


      }else if(answer4isSelected){

        setChute(4)        
        if(correctAnswer == 4){

          setPontos(pontos + 100)

        }else{

          setPontos(pontos - 50)

        }


      }
    }

  }

  function nextQuestion(){

    if(length-1 > index){

      setChute()
      setAnswer1isSelected(false)
      setAnswer2isSelected(false)
      setAnswer3isSelected(false)
      setAnswer4isSelected(false)

      setQuest(quests[index+1].quest)
      setAnwser1(quests[index+1].answer1)
      setAnwser2(quests[index+1].answer2)
      setAnwser3(quests[index+1].answer3)
      setAnwser4(quests[index+1].answer4)
      setCorrectAnswer(quests[index+1].correctAnswer)
      setIndex(index+1)

    }else if(length-1 == index){

      setChute("Fim")

    }
  }

  function selectAnswer(index){

    if(chute){

      return

    }

    setAnswer1isSelected(false)
    setAnswer2isSelected(false)
    setAnswer3isSelected(false)
    setAnswer4isSelected(false)

    if(index == 1){

      setAnswer1isSelected(true)

    }else if(index == 2){

      setAnswer2isSelected(true)

    }else if(index == 3){

      setAnswer3isSelected(true)

    }else if(index == 4){

      setAnswer4isSelected(true)

    }

  }

  return(
    <Background>
      {quests && chute != "Fim" || !chute?(
      
        <Container>
      
          <Title> {quest} </Title>
          <Answer onPress={() => selectAnswer(1)} background={answer1isSelected && chute == 1 && correctAnswer == 1? "green": 
          answer1isSelected && chute == 1 && correctAnswer != 1 ? "red": answer1isSelected? "#000a": "rgba(0,0,0,0)"}> 
            <AnswerText> {anwser1} </AnswerText>
          </Answer>
          <Answer onPress={() => selectAnswer(2)} background={answer2isSelected && chute == 2 && correctAnswer == 2? "green": 
          answer2isSelected && chute == 2 && correctAnswer != 2 ? "red": answer2isSelected? "#000a": "rgba(0,0,0,0)"}> 
            <AnswerText> {anwser2} </AnswerText>
          </Answer>
          <Answer onPress={() => selectAnswer(3)} background={answer3isSelected && chute == 3 && correctAnswer == 3? "green": 
          answer3isSelected && chute == 3 && correctAnswer != 3 ? "red": answer3isSelected? "#000a": "rgba(0,0,0,0)"}> 
            <AnswerText> {anwser3} </AnswerText>
          </Answer>
          <Answer onPress={() => selectAnswer(4)} background={answer4isSelected && chute == 4 && correctAnswer == 4? "green": 
          answer4isSelected && chute == 4 && correctAnswer != 4 ? "red": answer4isSelected? "#000a": "rgba(0,0,0,0)"}> 
            <AnswerText> {anwser4} </AnswerText>
          </Answer>
          {!chute && 

            <Button onPress={() => chutar()} style={{backgroundColor: "#fff"}}> 
            
              <Text style={{color: "green", fontSize: 20}}> Chutar </Text> 
          
            </Button>

          }
          {chute && 
          
            <Button onPress={() => nextQuestion()}> 
            
              <Text> Próxima </Text> 
          
            </Button>
          
          }

        </Container>

      ):(

        <Container>

          <Title> Pontuação <Text> {pontos} </Text></Title>

          <AnswerText> Pontuação ganha pra cada acerto: 100 </AnswerText>
          <AnswerText> Pontuação perdida pra cada erro: 50 </AnswerText>

          <AnswerText style={{fontSize: 20}}> Obrigado por jogar! </AnswerText>

        </Container>

      )}
    </Background>
  )
}