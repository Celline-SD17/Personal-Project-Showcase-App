import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to SneakerHub</h1>
        <h4> Sneak it away — Keep your sneaker game organized. </h4>
        <p>Talking about all things sneaker? SneakerHub is the place to be!. Here you'll find the latest releases, trending drops, and so much more!</p>
        <p>You are a button click away from discovering and owning your next favorite pair!</p>
      </div>
      <div className="features">
        <div className="feature-card">
          <h3>Search</h3>
          <p>Find your favourite sneakers in different colors and sizes instantly.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;