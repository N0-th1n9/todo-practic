import './styles/App.scss';
import {SortProvider} from "./Providers/SortProvider"
import {TasksProvider} from "./Providers/TasksProvider";
import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/elements/Header/Header";
import {routes} from "./router/router";
import {VisibleMenuProvider} from "./Providers/VisibleMenu";

function App() {
  return (
    <div className="App">
      <TasksProvider>
        <SortProvider>
          <VisibleMenuProvider>
            <BrowserRouter>
              <Header/>
              <Routes>
                {routes.map(route =>
                  <Route
                    path={route.path}
                    element={route.element}
                  />
                )}
                <Route path="/*" element={<Navigate to="/"/>} />
              </Routes>
            </BrowserRouter>
          </VisibleMenuProvider>
        </SortProvider>
      </TasksProvider>
    </div>
  );
}

export default App;
