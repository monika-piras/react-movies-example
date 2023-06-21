# REACT MOVIES APP

Online demo here: https://monika-piras.github.io/react-movies-example

This project is an example about how to build a responsive and mobile friendly app with [ReactJS] using the TvMaze REST API (https://static.tvmaze.com/apidoc/).

It consists of a main movies page, an interactive global search, and detail pages.

After the main component of the app is mounted, it automatically makes a call fetch to retrieve the main movies list.

The global input search (SearchBox) does real time API calls for filtering the movies based on the input field.
The SearchBox uses the Debouce Input Component to delay the user input, in order to trigger the API fetch by 500 milliseconds.

The movie detail page shows title, poster card, description, language, categories and the complete cast for each movie.
This component updates his state (via Hooks) making a GET request to the TvMaze APis in order to retrieve the movie details.

The navigation of the pages is configured with HashRouter in two routes, Home page and Moviedetail page, using ID path parameter.

It's also present an example of error catching component (ErrorBoundary) for the CardList Component on the Home Page.
In case of errors, a message will be prompt to the user as fallback UI.

The UI layout it is creted by using the fast and lightweight CSS library Tachyons.

## Install
```
npm install
```

### Run locally
```
npm start
```
### Deploy 
```
npm run build
```
If you want to change the address for a custom deployment, change it to package.json:

"homepage": "/react-movies-example"


## License


MIT

## Version

0.1.0



[ReactJS]: <https://legacy.reactjs.org/>
