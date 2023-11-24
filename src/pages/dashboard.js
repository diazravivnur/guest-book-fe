import logo from '../logo.svg';
import '../App.css';
import Table from '../components/table'
import Logo from '../TJLogo.svg'
import Modal from '../components/modal'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={Logo} className="App-logo" alt="logo" />
                <Table />
                <Modal />
            </header>
        </div>
    );
}

export default App;
