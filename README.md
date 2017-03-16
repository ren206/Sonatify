# Sonatify

[Sonatify live](http://www.sonatify.com "Live link")

Sonatify is a full-stack web application inspired by the web player app of Spotify. The back end consists of a Ruby on Rails framework with a PostgreSQL database while the front end is built on React.js with Redux.

## Features and Implementation

### Persistent Playback

![alt text](https://raw.githubusercontent.com/ren206/Sonatify/master/docs/screenshots/persistent-playback.jpg "Persistent Playback")

The main attraction of Sonatify is music streaming, and persistent playback is the primary concern to guarantee seamless user experience while performing other tasks. I accomplished this through carefully architecting the [component hierarchy](./docs/component-hierarchy).
The main `WebPlayer` component contains:
  * the `MainNav` component (for intra-site navigation)
  * the `NowPlaying` component (managing the `HTML5 audio element`)
  * `children` (content from subcomponents that render conditionally based on the route)

### Playlist CRUD

![alt text](https://raw.githubusercontent.com/ren206/Sonatify/master/docs/screenshots/playlist-crud.jpg "Playlist CRUD")

### Custom Context Menus

![alt text](https://raw.githubusercontent.com/ren206/Sonatify/master/docs/screenshots/custom-context-menus.jpg "Custom Context Menus)
