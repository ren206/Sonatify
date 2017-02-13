## Component Hierarchy

**AuthFormContainer**
- SignUpForm
  - SignUpErrors
- LoginForm
  - LoginErrors

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
| `/` (without session)                 | SplashContainer       |
| `/signup`                             | AuthFormContainer     |
| `/login`                              | AuthFormContainer     |
| `/browse`                             | BrowseContainer       |
| `/queue`                              | QueueContainer        |
| `/user`                               | UserViewContainer     |
| `/user/:userId/playlists/:playlistId` | PlaylistViewContainer |
| `/artist/:artistId`                   | ArtistViewContainer   |
| `/album/:albumId`                     | AlbumViewContainer    |
