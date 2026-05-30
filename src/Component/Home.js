import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-content">

        <h1>Movie Hub</h1>

        <p>
          Watch Trending Movies Anytime, Anywhere
        </p>

        <button
          className="hero-btn"
          onClick={() => navigate("/movies")}
        >
          Explore Movies
        </button>

      </div>
    </div>
  );
}

export default Home;