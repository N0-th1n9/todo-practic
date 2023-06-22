import './App.scss';
import Header from "./components/elements/Header/Header";
import Main from "./components/elements/Main/Main";
import {SortProvider} from "./Providers/SortProvider"
import {TasksProvider} from "./Providers/TasksProvider";

function App() {

  return (
    <div className="App">
      <Header/>
      <TasksProvider>
        <SortProvider>
          <Main/>
        </SortProvider>
      </TasksProvider>
    </div>
  );
}

export default App;
