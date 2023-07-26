import './styles/App.scss';
import './styles/mediaQueries.scss'
import {SortProvider} from "./Providers/SortProvider"
import {TasksProvider} from "./Providers/TasksProvider";
import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/elements/Header/Header";
import {routes} from "./router/router";
import {VisibleMenuProvider} from "./Providers/VisibleMenuProvider";
import {VisiblePanelsProvider} from "./Providers/VisiblePanelsProvider";

function App() {
  return (
    <div className="App">
      <TasksProvider>
        <SortProvider>
          <VisibleMenuProvider>
            <VisiblePanelsProvider>
              <BrowserRouter>
                <Header/>
                <Routes>
                  {routes.map(route =>
                    <Route
                      key={route.path}
                      path={route.path}
                      element={route.element}
                    />
                  )}
                  <Route path="/*" element={<Navigate to="/"/>} />
                </Routes>
              </BrowserRouter>
            </VisiblePanelsProvider>
          </VisibleMenuProvider>
        </SortProvider>
      </TasksProvider>
    </div>
  );
}

export default App;
