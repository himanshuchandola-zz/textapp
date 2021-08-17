import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
  <>
<Navbar title="TextApp" aboutText="About"/>
<div className="container my-3">
<TextForm heading="Enter The Text to analyze"/>
</div>

  </>
  );
}

export default App;
