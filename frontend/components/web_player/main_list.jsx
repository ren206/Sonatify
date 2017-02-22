import React from 'react';
import { Link, withRouter } from 'react-router';

export default withRouter(({ itemsObj }) => {
  const itemKeys = Object.keys(itemsObj);

  const items = itemKeys.map( key => {
    const item = itemsObj[key];
    item.id = key;
    return item;
  });
// TODO: maybe add conditional logic for the link url
  const itemsAsArray = items.map( (item, index) => {
    return (
      <li key={index}>
        <Link to={ `playlists/${ item.id }` }>
          <img className="artwork"
            src={item.image_url}/>
          
            <h4>{ item.name }</h4>
        </Link>
      </li>
    );
  });

  return (
      <ul className="main-list">
        { itemsAsArray }
      </ul>
  )
})
