import quizData from '../data.json'
import Quesion from './Quesion'
import { useState } from 'react'

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const [score, setScore] = useState<number>(0);
    const [showScore, setShowScore] = useState<boolean>(false)
    function onSelectOption(selectedOption: string) {
      if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {

        setScore(score+1)
      }
      const nextQuestionIndex = currentQuestionIndex + 1 
      if(nextQuestionIndex < quizData.length){
        setCurrentQuestionIndex(nextQuestionIndex); 
      }else{
setShowScore(true)
      }
    }
  return (
    <div>
       {showScore ? 
        <div>
          <h2>your score {score}/{quizData.length}</h2>
        </div>
        :
<Quesion
       question = {quizData[currentQuestionIndex].question} 
       options = {quizData[currentQuestionIndex].options}
       onSelectOption = {onSelectOption}
       
       />
       }
      
    </div>
  )
}
