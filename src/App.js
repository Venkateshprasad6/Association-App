import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import PracticeForm from "./pages/practice-form/practiceform";

import AddDistricts from "./pages/practice-form/adddistrict";
import PracticeList from "./pages/practice-form/practicelist";

import Expenses from "./pages/expenses/expenses";
import Events from "./pages/events/events";

import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="practice_list" element={<PracticeList />} />
          <Route path="create_practice" element={<PracticeForm />} />
          <Route path="add_district" element={<AddDistricts />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
