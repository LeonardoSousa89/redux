import './App.css'

import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'

import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  useEffect(()=>{ toast.success('Seja bem vindo', { position: 'top-left', autoClose:2000})},[])

  function mensagem(){ toast.warn('item adicionado', { autoClose: 1000 }) }
  
  return (

    <div className="App">
      <ToastContainer/>
      <Header contador={0} toast={mensagem.bind(this)} />
      <Main />
      <Footer />
    </div>

  );
}

export default App;
