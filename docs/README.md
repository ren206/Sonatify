# Sonatify
**Note:** This is the development README.

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://sonatify.herokuapp.com/
[trello]: https://trello.com/b/PHWCrnkL/sonatify

## Minimum Viable Product

Sonatify is a full-stack web application inspired by the web player app of
Spotify. By the end of Week 9, this app will, at a minimum, satisfy the following
criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] CRUD playlists
- [ ] Maintain a queue of songs
- [ ] Song playback during navigation
- [ ] Following friends and their playlists
- [ ] [Production README] (../README.md) **Note:** This will be added

## Design Docs
- [View Wireframes][wireframes]
- [React Components][components]
- [API endpoints][api-endpoints]
- [DB schema][schema]
- [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and front end user authentication (2 days)

**Objective:** Functioning rails project with front-end authentication

### Phase 2: CRUD playlists (2 days)

**Objective:** Users can create, update, and delete playlists

### Phase 3: Song model, API, and components (2 days)

**Objective:** Songs can be played continuously while navigating through site

### Phase 4: Persistent play queue (1 day)

**Objective:** Songs can be added to a play queue that will persist during a user's session

### Phase 5: Playlist following (1 day, W2 Thursday)

**Objective:** Playlists can have followers who can access followed playlists through a personal menu

### Bonus Features (TBD)
- [ ] Database search of users, playlists, artists, albums, and songs
- [ ] Explore Page that allows users to find music by genre or mood
- [ ] Site can show related artists through genres
- [ ] Create radio that utilizes related artists to generate random play queue
