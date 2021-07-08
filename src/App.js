import logo from './logo.svg';
import './App.css';
import CoursesPage from '../../puralsight/09/demos/after/src/components/courses/CoursesPage';

function App() {
  return (
    <div className="conainer-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
