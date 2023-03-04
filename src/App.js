import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/routes/router";
import Container from 'react-bootstrap/Container';

function App() {
	return (
		<div>
      <Container>
      <RouterProvider router={router}></RouterProvider>
      </Container>
			
		</div>
	);
}

export default App;
