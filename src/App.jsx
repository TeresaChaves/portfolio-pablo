import './App.css';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ fontFamily: "Lato, sans-serif" }}>
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
