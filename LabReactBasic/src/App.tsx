import "./App.css";
import { RouterComponent } from "./core/router/router.component";
import { HeaderLayout } from "./layouts/header/Header.layout";
import { HeaderComponent } from "./pods/header";

function App() {
  return (
    <>
      <HeaderLayout>
        <HeaderComponent />
      </HeaderLayout>
      <RouterComponent />
    </>
  );
}

export default App;
