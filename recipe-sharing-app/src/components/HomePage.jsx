import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="main-content center">
      <h1>Welcome to Recipe Haven</h1>
      <img src="/images/bgImg.jpeg" alt="" style={{width:'400px', marginTop:'1rem'}}/>
      <p className="description">
        Discover, share, and create delicious recipes with food lovers around
        the world. Join our community and spice up your kitchen!
      </p>


      <Link to="/list">
        <button className="primary-btn">Explore Recipes</button>
      </Link>
    </div>
  );
}

export default HomePage;
