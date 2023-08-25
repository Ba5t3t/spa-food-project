import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';



function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
