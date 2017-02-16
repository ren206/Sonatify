## Component Hierarchy

**Splash**
- SplashNav
  - AuthNav
  - LoginForm
  - SignupForm
    - SignupErrors

**NavigationContainer**
- Navigation
- Logout

**NowPlayingContainer**
- NowPlaying
- RelatedMusic
  - SongContextMenu

**BrowseContainer**
- BrowseNavigation
- Recommendations
- PlaylistContextMenu
- Genres **bonus**

**QueueContainer**
- CurrentTrack
- QueuedTracks
- PlaylistQueue

**PlaylistViewContainer**
- PlaylistView
- PlaylistEditForm
- PlaylistContextMenu
- SongDetail
  - SongContextMenu

**ArtistViewContainer**
- ArtistView
  - AlbumDetail
  - SongDetail
    - SongContextMenu

**AlbumViewContainer**
- AlbumView
- SongDetail
  - SongContextMenu

**UserViewContainer**
- UserView
- PublicPlaylists
- Following
- Followers

**ContextMenuContainer**
- SongContextMenu
- PlaylistContextMenu

## Routes

| Path                                  | Component             |
|---------------------------------------|-----------------------|
| `/` (without session)                 | Splash                |
| `/browse`                             | BrowseContainer       |
| `/queue`                              | QueueContainer        |
| `/user`                               | UserViewContainer     |
| `/user/:userId/playlists/:playlistId` | PlaylistViewContainer |
| `/artist/:artistId`                   | ArtistViewContainer   |
| `/album/:albumId`                     | AlbumViewContainer    |
