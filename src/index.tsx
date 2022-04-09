import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './pages/HomePage';
import { BotPage } from './pages/BotPage';
import { SettingsPage } from './pages/SettingsPage';
import "./styles/scss/main.scss";

declare global {
  interface Window {
    api? : any
  }
}

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bot/:id" element={<BotPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
