import logo from './logo.svg';
import './App.css';
import {Routes,Route } from "react-router-dom";
import Welcome from './components/pages/Welcome';
import AuthForm from './components/AuthForm';
import Nbar from './components/pages/Nbar';
import ContactUpdate from './components/contact/ContactUpdate';
import EmailVerification from './components/EmailVerification/EmailVerification';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ExpenseTracker from "./components/Expense/ExpenseTracker"
import GetExpenseTracker from './components/Expense/GetExpenseTracker';
import EditExpenseTracker from './components/Expense/EditExpenseTracker';
import Premium from './components/Expense/Premium';
import Greeting from './components/Greeting';
import Async from './components/Async';
function App() {
  return (
    <>
   
     <Nbar/>
    <Routes>
      <Route  exact path="/welcome" element={<Welcome/>}/>
      <Route  exact path="/auth" element={<AuthForm/>}/>
      <Route  exact path="/contactupdate" element={<ContactUpdate/>}/>
      <Route  exact path="/emailverification" element={<EmailVerification/>}/>
      <Route  exact path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route  exact path="/expenseTracker" element={<ExpenseTracker/>}/>
      <Route  exact path="/getExpenseTracker" element={<GetExpenseTracker/>}/>
      <Route  exact path="/editExpenseTracker" element={<EditExpenseTracker/>}/>
      <Route path="/premium" element={<Premium/>}/>
    </Routes>
    
    
 <Greeting/>
 <Async/>

   </>
  );
}

export default App;