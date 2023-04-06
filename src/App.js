import './App.css';
import { User } from './User';
import { Button, Card, CircularProgress, Typography } from '@material-ui/core';
import Tarjeta from './Card'
import LineChartComponent from './Grafico';
import CustomCard from './CardAdmin'
import LoginForm from './Chatgpt'
import Example from './Grafico';


const Datos = {
  titulo: "algun titulo",
  datos1: "maquiba 1",
  datos2: "maquina 2",
  datos3: "maquina 3"

}


function App() {

  console.log('hola')

  return (
    <>
      <div className="card">
        <h2>Tarjeta 1</h2>
        <p>Contenido de la Tarjeta 1</p>
      </div>

      <div className="card card-group">
        <div className="card-inner-group">
          <div className="card">
            <h2>Tarjeta 2.1</h2>
            <p>Contenido de la Tarjeta 2.1</p>
          </div>

          <div className="card">
            <h2>Tarjeta 2.2</h2>
            <p>Contenido de la Tarjeta 2.2</p>
          </div>
          
          <div className="card">
            <h2>Tarjeta 2.2</h2>
            <p>Contenido de la Tarjeta 2.2</p>
          </div>
          
          <div className="card">
            <h2>Tarjeta 2.2</h2>
            <p>Contenido de la Tarjeta 2.2</p>
          </div>
          
          <div className="card">
            <h2>Tarjeta 2.2</h2>
            <p>Contenido de la Tarjeta 2.2</p>
          </div>
        </div>
      </div>
      <Example/>

    </>
   

  );
}

export default App;
