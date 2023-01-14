import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom";


import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Layout from './pages/Layout';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="members" element={<Members />} />
        </Route>
      </Routes>

    </ChakraProvider>
  )
}

export default App;
