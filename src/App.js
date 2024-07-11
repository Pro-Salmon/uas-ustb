import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './Page/Component/Footer';
import Navbar from './Page/Component/Navbar';
import Dashboard from './Page/Dashboard';
import Profil from './Page/Profil';
import Mitra from './Page/Mitra';
import Contact from './Page/Contact';
import Jurusan from './Page/Jurusan';
import NotFound from './Page/NotFound';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/uas-ustb">
              <Dashboard />
            </Route>
            <Route exact path="/profil">
              <Profil />
            </Route>
            <Route exact path="/jurusan">
              <Jurusan />
            </Route>
            <Route exact path="/mitra">
              <Mitra />
            </Route>
            <Route exact path="/kontak">
              <Contact />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
