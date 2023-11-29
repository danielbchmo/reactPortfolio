import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='container-main'>
        <h1>Esto es lo que se dice de nuestros cursos</h1>
        <Testimonio
          name="React"
          cargo="Curso de React"
          img="react"
          testimonio={<p><b>Lorem ipsum dolor sit amet</b>, consectetur adipisicing elit. Corrupti, vitae ipsam veritatis, architecto unde est officia nihil ipsum aliquam tempora odit in id a labore. Distinctio exercitationem ex dolore mollitia!"</p>}
          alt="react"
        />
        <Testimonio
          name="HTML"
          cargo="Curso de HTML"
          img="html"
          testimonio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, vitae ipsam veritatis, architecto unde est officia nihil ipsum aliquam tempora odit in id a labore. Distinctio exercitationem ex dolore mollitia!"
          alt="html"
        />
        <Testimonio
          name="SQL"
          cargo="Curso de SQL"
          img="sql"
          testimonio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, vitae ipsam veritatis, architecto unde est officia nihil ipsum aliquam tempora odit in id a labore. Distinctio exercitationem ex dolore mollitia!"
          alt="sql"
        />
      </div>
    </div>
  );
}

export default App;
