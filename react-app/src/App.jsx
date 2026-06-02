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
import Mouse from './Mouse/Mouse'
import RegistrationForm1 from './RegistrationForm1/RegistrationForm1'
import Notes from './Notes/Notes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Массивы в состоянии</h2>
      <p>Список заметок</p>
      <Notes/>
      <br /><br />

      <h2>Объекты в состоянии</h2>
      <p>Координаты</p>
      <Mouse/>
      <br /><br />
      Форма регистрации с общей функцией обработчиком
      <RegistrationForm1/>

      <br /><br />
      <h2>Обработка форм</h2>
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
