import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import PracticeForm from './pages/practice-form/practiceform';

import AddDistricts from './pages/practice-form/adddistrict';


function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="practice_form" element={<PracticeForm />} />

          <Route path="add_district" element={<AddDistricts />} />

        </Route>
      </Routes>

    </ChakraProvider>
  )
}

export default App;
