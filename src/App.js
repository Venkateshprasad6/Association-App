import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";


import Layout from "./pages/Layout";
import PracticeForm from "./pages/practice-form/practiceform";

import AddDistricts from "./pages/practice-form/adddistrict";
import PracticeList from "./pages/practice-form/practicelist";

import Association from "./pages/association/association";
import Events from "./pages/events/events";

import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
        
          <Route path="practice_list" element={<PracticeList />} />
          <Route path="create_practice" element={<PracticeForm />} />
          <Route path="add_district" element={<AddDistricts />} />
          <Route path="association" element={<Association />} />
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
