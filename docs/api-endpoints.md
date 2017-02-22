# API Endpoints

## HTML API

### Root
- `root: GET /` - loads React web app

## JSON API

### Users
- `create: POST /api/users`

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

### Songs
- `GET /api/playlists/:id/songs`
- `GET /api/albums/:id/songs`

### Playlists
- `create: POST /api/playlists`
- `show: GET /api/playlists/:playlist_id`
- `index: GET /api/users/:user_id/playlists`
- `index: GET /api/me/playlists/`
  - user's playlists
- `update: PUT /api/playlists/:playlist_id`
- `destroy: DELETE /api/playlists/:playlist_id`

### Listings
- `create: POST /api/listings`
- `update: PUT /api/listings/:listing_id`
- `destroy: DELETE /api/listings/:listing_id`

### Playlist follows
- `POST /api/playlist_follows`
- `DELETE /api/playlist_follows/:id`
