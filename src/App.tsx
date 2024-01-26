import "./App.css";
import { ServiceFilter, ServiceForm, ServiceList } from "./components";

function App() {
  return (
    <div className="App">
      <ServiceForm />
      <ServiceFilter />
      <ServiceList />
    </div>
  );
}

export default App;
