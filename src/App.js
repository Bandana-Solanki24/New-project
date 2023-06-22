import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Counter from './components/Counter';
import ConditionalRendering from './components/ConditionalRendering';
import SimpleTodo from './components/List/SimpleTodo';
import FetchItem from './components/FetchItem';
// import RegistrationForm from './components/RegistrationForm';
// import DenominationItem from
// './components/DenominationItem/CashWithdrawal';
import TodoApp from './components/TodosApp'
import NewTodo from './components/NewTodo'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/conditionalRendering" element={<ConditionalRendering />} />
        <Route path="/simpleTodo" element={<SimpleTodo/>}/>
        <Route path="/fetchItem" element={<FetchItem/>}/>
        {/* <Route path="/registrationForm" 
        element={<RegistrationForm/>}/> */}
        {/* <Route path="/denominationItem" 
        element=
        {<DenominationItem/>}/> */}
        <Route path="/todosApp" 
        element={<TodoApp/>}/>
        <Route path="/newTodo" 
        element={<NewTodo/>}/>
        

      </Routes>
    </Router>
    
  );
}

export default App;
