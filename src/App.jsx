import { useState } from 'react'
import { Button, Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import UserPage from './components/UserPage'
import PostPage from './components/PostPage'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxW={'620px'} >
      <Header />
      <Routes>
        <Route path='/:username' element={<UserPage /> } />
        <Route path='/:username/post/:pid' element={<PostPage /> } />
      </Routes>
    </Container>
  )
}

export default App
