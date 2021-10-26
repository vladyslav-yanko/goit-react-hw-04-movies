import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar.jsx';
import { LoaderSpinner } from './Components/LoaderSpinner/LoaderSpinner.jsx';

const HomeView = lazy(() =>
  import('./Views/HomeView/HomeView.jsx'),
);
const MoviesView = lazy(() =>
  import(
    './Views/MovieView/MoviesView'),
);
const MovieDetailsView = lazy(() =>
  import(
    './Views/MovieDetailsView/MovieDetailsView.jsx' ),
);
const NotFoundView = lazy(() =>
  import(
    './Views/NotFoundView/NotFoundView.jsx' ),
);

export default function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
