import { Route, Routes } from "react-router-dom"
import HomePage from '../../pages/HomePage'
import MovieDetailPage from "../../pages/MovieDetailsPage"
import Navigation from "../Navigation/Navigation"

const App = () => {
  return (
      <div>
          <Navigation />
          <Routes>
              <Route path="/" element={<HomePage/>} />
               <Route path="/movies/:movieId" element={<MovieDetailPage />} />
          </Routes>
          
    </div>
  )
}

export default App