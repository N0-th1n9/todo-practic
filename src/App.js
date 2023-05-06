import './App.scss';
import Header from "./components/elements/Header/Header";
import Main from "./components/elements/Main/Main";
import {SortContext, SortProvider} from "./Providers/SortProvider"
import {useContext} from "react";
import {useSortTasks} from "./hooks/useSortTasks";
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
