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

**UserViewContainer**
- UserView
- PublicPlaylists

**ContextMenuContainer**
- SongContextMenu
- PlaylistContextMenu

## Routes

| Path                                  | Component             |
|---------------------------------------|-----------------------|
| `/signup`                             | AuthFormContainer     |
| `/login`                              | AuthFormContainer     |
| `/browse`                             | BrowseContainer       |
| `/queue`                              | QueueContainer        |
| `/user`                               | UserViewContainer     |
| `/user/:userId/playlists/:playlistId` | PlaylistViewContainer |
