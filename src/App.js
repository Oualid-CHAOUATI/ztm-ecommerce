// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Categories } from "./Components/categories/categories.component";
import { Navigation } from "./routes/navigation/navigation.component";
import { Authentication } from "./routes/authentication/authentication.component.jsx";
import { UserProvider } from "./contexts/user.context";

function App() {
  const categories = [
    {
      id: 1,
      title: "hats",
      imgSrc:
        "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
    {
      id: 2,
      title: "jackets",
      imgSrc:
        "https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
  ];
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route
                index
                path="/home"
                element={<Categories categoryList={categories} />}
              />
              <Route
                path="/"
                element={<Categories categoryList={categories} />}
              />

              <Route index path="/services" element={<h2>Services</h2>} />
              <Route index path="/auth" element={<Authentication />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
