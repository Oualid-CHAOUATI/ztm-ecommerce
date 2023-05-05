// import logo from "./logo.svg";
import "./App.scss";
import { Categories } from "./Components/categories/categories.component";

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
      <Categories categoryList={categories} />
    </>
  );
}

export default App;
