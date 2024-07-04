import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import { DarkModeProvider, useDarkMode } from './Components/Dark/DarkModeContext';

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <DarkModeProvider>
      <AppContainer>
        <AppStyled bg={bg} className="App">
          {orbMemo}
          <MainLayout>
            <Navigation active={active} setActive={setActive} />
            <main>
              {displayData()}
            </main>
          </MainLayout>
        </AppStyled>
      </AppContainer>
    </DarkModeProvider>
  );
}

const AppContainer = ({ children }) => {
  const { darkMode } = useDarkMode();
  return (
    <div style={{ height: '100vh', background: darkMode ? '#121212' : '#f0f0f0' }}>
      {children}
    </div>
  );
};

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main {
    flex: 1;
    background: ${({ darkMode }) => (darkMode ? '#333' : 'rgba(252, 246, 249, 0.78)')};
    border: 3px solid ${({ darkMode }) => (darkMode ? '#444' : '#FFFFFF')};
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
