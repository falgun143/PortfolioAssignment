import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "../src/components/Profile/Profile";
import About from "../src/components/About/About";
import Portfolio from "../src/components/Portfolio/portfolio";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <>
      <Container>
        <Grid container >
          <Grid item xs={12} s={12} m={4} lg={3} >
            <Profile></Profile>
          </Grid>

          <Grid item xs  >
            <Router>
              <Routes>
              <Route path="/" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </Router>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
