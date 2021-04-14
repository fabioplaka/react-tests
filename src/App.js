import Header from "./components/header";
import "./app.scss";
import Headline from "./components/headline";

function App() {
  const tempArr = [
    {
      fName: "Joe",
      lName: "Bloggs",
      email: "joebloggs@gmail.com",
      age: 24,
      onlineStatus: true,
    },
  ];

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
