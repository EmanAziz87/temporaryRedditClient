import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
