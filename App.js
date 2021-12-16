import Category from "./components/Category";

function App() {
  const data = [
    {
      url:
        "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      title: "Top Offers"
    },
    {
      url:
        "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
      title: "Groceries"
    }
  ];
  return (
    <div>
      {data.map((el) => (
        <Category imageUrl={el.url} title={el.title} />
      ))}
    </div>
  );
}

export default App;
