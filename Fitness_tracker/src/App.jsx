import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './utills/Themes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Authentication from './pages/Authentication';

function App() {

  const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes> */}
          <Container>
            {/* <h2>Your Fitness Data</h2>
            <p>Track your workouts, nutrition, and progress.</p> */}
            <Authentication />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
