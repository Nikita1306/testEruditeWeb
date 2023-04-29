import './App.css';
import axios from "axios"
import { useState } from 'react';
function App() {
    const [ parText, setParText ] = useState("");
    async function getAgeByName(name) {
        const str = await axios.get("http://localhost:8080/getAgeByName?name=" + document.getElementById("inputId").value).then(response => {
            setParText("Возраст данного человека: " + response.data);
            console.log(parText)
        });
    }
    async function getRequestsNumber(name) {
        const str = await axios.get("http://localhost:8080/getRequestsNumber?name=" + document.getElementById("inputId").value).then(response => {
            setParText("Количество запросов по данному имени: " + response.data);
            console.log(parText)
        });

    }
    async function getMaxAge() {
        const str = await axios.get("http://localhost:8080/getMaxAge").then(response => {
            setParText("Максимальный возраст среди всех: " + response.data);
            console.log(parText)
        });

    }

    const button = {
        padding: '10px 20px',
        marginLeft: "24px",
        marginTop: "8px",
        border: 'none',
        borderRadius: '4px',
        background: '#1890ff',
        color: '#fff',
        fontSize: '14px',
        cursor: 'pointer',
        transition: '.3s background',
        '&:hover': {
            background: '#40a9ff'
        }
    };
  return (
    <div className="App">
      <div className="table-responsive">
        <table className="table">
          <thead>
          <tr>
              <th>Введите имя:</th>
          </tr>

          </thead>
            <tbody>
            <tr>
                <td>
                    <input className="center-block" id="inputId" type="text"/>
                </td>
            </tr>
            <tr>
                <td>
                    <button style={button} type="button" onClick={getAgeByName}>Получить возраст</button>
                    <button style={button} type="button" onClick={getRequestsNumber}>Статистика по имени</button>
                    <button style={button} type="button" onClick={getMaxAge}>Наибольший возраст</button>
                </td>
            </tr>
            <tr>
                <td>
                    <p className="p-center">{parText}</p>
                </td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
