# Sonatify

[Heroku link][heroku] **Note:** This link will be added later

[Trello link][trello] **Note:** This link will be added later

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com

## Minimum Viable Product

Sonatify is a full-stack web application inspired by the web app of Spotify.  By the end of Week 9, this app will, 
at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] CRUD songs and playlists
- [ ] Maintain a queue of songs
- [ ] Song playback during navigation
- [ ] Following friends and their playlists
- [ ] [Production README] (../README.md) **Note:** This will be added later

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implentation Timeline **Note:** This is still wrong; it will be fixed later

### Phase 1: Backend setup and front end user authentication (1 day)

**Objective:** Functioning rails project with front-end authentication

### Phase 2: Song model, API, and components (2 days)

**Objective:** Songs can be played during navigation of site

### Phase 3: CRUD songs and playlists (2 days)

**Objective:** Users can create, update, and delete songs and CRUD playlists through context menus from songs

### Phase 4: Persistent play queue (2 day)

**Objective:** Songs can be added to a play queue that will persist during user's session

### Phase 5: Playlist following (1 day, W2 Thursday)

**Objective:** Playlists can have followers who can access followed playlists through a personal menu

### Bonus Features (TBD)
- [ ] Database search of users, playlists, artists, albums, and songs
- [ ] Explore Page that allows users to find music by genre or mood
- [ ] Site can show related artists through genres
- [ ] Create radio that utilizes related artists to generate random play queue
