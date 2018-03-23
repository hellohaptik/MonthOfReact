We will be using the MovieDB API
You can register for an API Key from their website
47325ef45a2a765c5fe4a132ed6a4e9a

mkdir imdbApp
cd imdbApp
create-react-app .

Install React-Router

```
yarn add react-router react-router-dom
```

Import from react-router-dom (BrowserRouter, Route, Switch)

```
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
```

Create the TopMovies route in App.js

```
<BrowserRouter>
  <Switch>
    <Route exact path="/" component={TopMovies} />
  </Switch>
</BrowserRouter>
```

Note:
import a directory looks for the index.js file

```
const API_KEY = '47325ef45a2a765c5fe4a132ed6a4e9a';
const BASE_ENDPOINT = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL ='https://image.tmdb.org/t/p/original/';
```

```
fetch(`${BASE_ENDPOINT}/movie/popular?api_key=${API_KEY}`)
  .then(res => res.json())
  .then(json => {
    console.log('SUCCESS', json);
    this.setState({
      movies: json.results
    });
  })
  .catch(e => {
    console.log('ERROR', e);
  });
```
