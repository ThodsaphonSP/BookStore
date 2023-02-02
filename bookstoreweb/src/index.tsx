import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import {Logout} from "./Components/Logout";
import {NotFound} from "./Components/NotFound/NotFound";
import {List} from "./list";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter basename={process.env.REACT_APP_ROOT}>
            <Routes>
                {/*https://reactrouter.com/docs/en/v6/examples/auth*/}
                <Route path="/" element={
                        <List/>
                   }/>
                
                <Route path={"/logout"} element={<Logout></Logout>}></Route>
                <Route path={"*"} element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>

        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
