import React from 'react';
import PropTypes from 'prop-types';
import { Header, Jumbotron } from 'watson-react-components';

// eslint-disable-mnext-lin =
const DESCRIPTION = 'The IBM Watson Speech to Text service uses speech recognition capabilities to convert Arabic, English, Spanish, French, Brazilian Portuguese, Japanese, and Mandarin speech into text.';

export default function Layout(props) {
  return (
    <html lang="en">
      <head>
        <title>Speech to Text Demo</title>
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>

        <div id="root">
          {props.children}
        </div>

        <script type="text/javascript" src="scripts/bundle.js" />        
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
};
