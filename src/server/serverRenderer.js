import React from 'react';
import {StaticRouter} from 'react-router-dom';
import {renderToString} from 'react-dom/server';
import {matchRoutes} from 'react-router-config';

import App from './../client';
import {routes} from '../client/routes';
import configureStore from '../client/store';

function renderHTML(html, initialState) {
    return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>Movies</title>
          <link rel="stylesheet" href="/main.css">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.INIT_STATE = ${JSON.stringify(initialState).replace(/</g, '\\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
    return (req, res) => {
        const store = configureStore();
        const branch = matchRoutes(routes, req.url);

        const promises = branch.map(({route}) => {
            let fetchData = route.component.fetchData;
            return fetchData instanceof Function ? fetchData(store, req) : Promise.resolve(null);
        });

        return Promise.all(promises).then(() => {
            let context = {};
            const content = renderToString(
                <App
                    context={context}
                    location={req.url}
                    Router={StaticRouter}
                    store={store}
                />
            );
            if (context.status === 404) {
                res.status(404);
            }
            if (context.status === 302) {
                return res.redirect(302, context.url);
            }

            const initialState = store.getState();
            res.send(renderHTML(content, initialState));
        });
    };
}
