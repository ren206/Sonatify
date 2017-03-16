# Sonatify

[Sonatify live](http://www.sonatify.com "Live link")

Sonatify is a full-stack web application inspired by the web player app of Spotify. The back end consists of a Ruby on Rails framework with a PostgreSQL database while the front end is built on React.js with Redux.

## Features and Implementation

### Persistent Playback

![alt text](https://raw.githubusercontent.com/ren206/Sonatify/master/docs/screenshots/persistent-playback.gif "Persistent Playback")

The main attraction of Sonatify is music streaming, and persistent playback is the primary concern to guarantee seamless user experience while performing other tasks. I accomplished this through carefully architecting the [component hierarchy](./docs/component-hierarchy).
The main `WebPlayer` component contains:
  * the `MainNav` component (for intra-site navigation)
  * the `NowPlaying` component (managing the `HTML5 audio element`)
  * `children` (content from subcomponents that render conditionally based on the route)

### Playlist CRUD

![alt text](https://raw.githubusercontent.com/ren206/Sonatify/master/docs/screenshots/playlist-crud.gif "Playlist CRUD")

User interaction with Sonatify primarily entails creating and editing their playlists. This functionality is held on the "Your Music" page, managed by React with Redux on the front end for seamless transitions when adding playlists, removing playlists, or updating their names. On the back end, a RESTful API interacts with the AJAX requests by passing data in the form of JSON for easy manipulation on the front end. I implemented analogous data flows elsewhere when necessary.

### Custom Context Menus

![alt text](https://raw.githubusercontent.com/ren206/Sonatify/master/docs/screenshots/custom-context-menus.gif "Custom Context Menus")

I integrated custom (right-click) context menus into Sonatify using a `React Context-Menu` library, which allowed for flexibility in designing intuitive user interactions with songs on right-click. The functionality includes but is not limited to playing a song, adding a song to queue, adding and removing a song from a playlist.

The application of this library involves attaching a `ContextMenuTrigger` onto an HTML element and setting an event on this trigger, similarly to other React components.
