const Home = () => {
  let name = "mario";

  const handleClick = (e) => {
    name = "luigi";
    console.log(name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Home;
