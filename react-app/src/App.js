import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/home.js';
import { Auth } from './pages/auth.js';
import { RecipesSave } from './pages/recipe-save';
import { RecipeCreate } from './pages/recipe-create';
import { Navbar } from './components/navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/create-recipe" element={<RecipeCreate/>}/>
          <Route path="/saved-recipes" element={<RecipesSave/>}/>
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
