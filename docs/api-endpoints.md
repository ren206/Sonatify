# API Endpoints

## HTML API

### Root
- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users`

### Session
- `POST /api/session`
- `DELETE /api/session`

### Artists
- `GET /api/artists/:id`

### Albums
- `GET /api/albums/:id`

### Songs
- `GET /api/albums/:id/songs/`
- `GET /api/albums/:id/songs/:id`
- `GET /api/playlists/:id/songs`

### Playlists
- `POST /api/playlists`
- `GET /api/playlists/:id`
- `PATCH /api/playlists/:id`
- `DELETE /api/playlists`

### Playlist listings
- `POST /api/playlists/:id/playlist_listings`
- `DELETE /api/playlists/:id/playlist_listings/:id`
- `PATCH /api/playlists/:id/playlist_listings/:id`

### Follows
- `POST /api/follows`
- `DELETE /api/follows/:id`
