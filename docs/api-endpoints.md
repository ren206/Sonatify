# API Endpoints

## HTML API

### Root
- `root: GET /` - loads React web app

## JSON API

### Users
- `show: GET /api/users/:userId`
- `create: POST /api/users`
- `show: GET /api/me`
  - own user page
- `update: PATCH /api/user`

### User follows
- `create: POST /api/user_follows`
- `destroy: DELETE /api/user_follows/:id`

### Session
- `create: POST /api/session`
- `destroy: DELETE /api/session`

### Artists
- `show: GET /api/artists/:id`

### Albums
- `show: GET /api/albums/:id`

### Genres
- `show: GET /api/genres/:id`

### Songs
- `index: GET /api/artists/:artistId/albums/:albumId/songs/`
- `GET /api/songs/:id`

### Playlists
- `create: POST /api/playlists`
- `show: GET /api/users/:userId/playlists/:playlistId`
- `index: GET /api/users/:userId/playlists/`
- `index: GET /api/me/playlists/`
  - user's playlists
- `PATCH /api/playlists/:id`
- `DELETE /api/playlists`

### Listings
- `POST /api/playlists/:id/playlist_listings`
- `DELETE /api/playlists/:id/playlist_listings/:id`
- `PATCH /api/playlists/:id/playlist_listings/:id`

### Playlist follows
- `POST /api/playlist_follows`
- `DELETE /api/playlist_follows/:id`
