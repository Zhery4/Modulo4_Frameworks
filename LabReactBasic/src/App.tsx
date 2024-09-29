import "./App.css";
import { RouterComponent } from "./core/router/router.component";
import { HeaderLayout } from "./layouts/header/Header.layout";

function App() {
  return (
    <>
      <HeaderLayout>
        <h1>Header</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/RickAndMorty">Rick & Morty</a>
            </li>
          </ul>
        </nav>
      </HeaderLayout>
      <RouterComponent />
    </>
  );
}

export default App;
