import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from '@emotion/styled';

const Text = styled.p`
  color: turquoise;
`;

function App() {
  return (
    <>
      <Text>Click on the Vite and React logos to learn more</Text>
    </>
  );
}

export default App;
