import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NameForm from './NameForm/NameForm'
import InputForm from './InputForm/InputForm'
import ChooseColor from './ChooseColor/ChooseColor'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import Post from './Post/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Post/>
      <br /><br />
      Форма имени
      <NameForm/>
      <br /><br />
      Форма входа
      <InputForm/>
      <br /><br />
      Выбор любимого цвета
      <ChooseColor/>
      <br /><br />
      Форма регистрации
      <RegistrationForm/>
      
      
    </>
  )
}

export default App
