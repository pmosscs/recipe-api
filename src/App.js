import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/newrecipescreen" element={<NewRecipeScreen />} />
        <Route path="/recipe/:id" element={<DetailScreen />} />
      </Routes>
      <Footer />
      <h1>working</h1>
    </div>
  );
}

export default App;
