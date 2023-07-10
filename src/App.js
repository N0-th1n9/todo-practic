import './styles/App.scss';
import Header from "./components/elements/Header/Header";
import Main from "./components/elements/Main/Main";
import {SortProvider} from "./Providers/SortProvider"
import {TasksProvider} from "./Providers/TasksProvider";
import {useState} from "react";

function App() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="App">
      <Header visible={visible} setVisible={setVisible}/>
      <TasksProvider>
        <SortProvider>
          <Main visibleMenu={visible}/>
        </SortProvider>
      </TasksProvider>
    </div>
  );
}

export default App;
