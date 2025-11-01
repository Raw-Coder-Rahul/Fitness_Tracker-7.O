import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './utills/Themes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Authentication from './pages/Authentication';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

function App() {
  const [user, setUser] = useState(true);
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
        {user ? (
          <Container>
            <Navbar />
            <Routes>
              {/* Define your routes here */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/workouts" element={<Workouts />} />
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
