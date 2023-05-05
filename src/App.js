// import logo from "./logo.svg";
import "./App.scss";

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
      <div className="categories-wrapper">
        {categories.map((category) => (
          <div
            className="category"
            style={{ backgroundImage: `url(${category.imgSrc})` }}
          >
            <h2 className="category__name">{category.title}</h2>
            <button>Shop now!</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
