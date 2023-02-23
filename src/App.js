import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import PracticeForm from './pages/practice-form/practiceform';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="practice_form" element={<PracticeForm />} />
        </Route>
      </Routes>

    </ChakraProvider>
  )
}

export default App;
