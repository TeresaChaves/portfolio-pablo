import './App.css';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar';

function App() {
  return (
    <div style={{ fontFamily: 'Lato, sans-serif' }}>
      <NavBar />
   <AppRoutes />
    </div>
  );
}

export default App;
