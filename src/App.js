import './App.css';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';
import Counter from "./redux/components/Counter"
import Header from './Header';
import Contact from './Contact';
import TodoForm from './redux/components/TodoForm';
import TodoList from './redux/components/TodoList';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header/>
     <Routes>
      <Route path='/todo' element={[<Counter/>,<TodoForm/>,<TodoList/>]} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
     <Footer/>
    
    </Router>
  );
}

export default App;
