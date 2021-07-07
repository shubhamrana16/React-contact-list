import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList'
function App() {
   const contacts =  [
     {
       id: '1',
       name:'Shubham Rana',
       email:'shubhamrana1606@gmail.com'
     },
     {
       id:'2',
       name:"debdeep G",
       email:"debdeep@gamil.com"
     },
     {
       id:'3',
       name:"nitesh",
       email:"nitish@gmail.com"
     },
     {
       id:'4',
       name:"ram singh",
       email:'ramsingh@gmail.com'
     }
   ]





  return (
    <div className= "App">
    <Header />

    <AddContact  />

    <ContactList contacts = {contacts} />
      
    </div>
  );
}

export default App;
