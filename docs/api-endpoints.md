# API Endpoints

## HTML API

### Root
- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users`

### User follows
- `POST /api/user_follows`
- `DELETE /api/user_follows/:id`

### Session
- `POST /api/session`
- `DELETE /api/session`

### Artists
- `GET /api/artists/:id`

### Albums
- `GET /api/artists/:id/albums/:id`

### Genres
- `GET /api/genres/:id`

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

### Playlist follows
- `POST /api/playlist_follows`
- `DELETE /api/playlist_follows/:id`
