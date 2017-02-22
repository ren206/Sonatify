# Schema Information

## users

|column name     |data type|details                   |
|----------------|---------|--------------------------|
|id              |integer  |not null, primary key     |
|username        |string   |not null, indexed, unique |
|email           |string   |not null, indexed, unique |
|f_name          |string   |not null, indexed         |
|l_name          |string   |not null, indexed         |
|image_url       |string   |not null, default given   |
|password_digest |string   |not null                  |
|session_token   |string   |not null, indexed, unique |

## user followings

|column name |data type|details                        |
|------------|---------|-------------------------------|
|follower_id |integer  |not null, foreign key, indexed |
|followed_id |integer  |not null, foreign key, indexed |

## songs

|column name    |data type|details               |
|---------------|---------|----------------------|
|id             |integer  |not null, primary key |
|title          |string   |not null, indexed     |
|album_id       |integer  |not null, indexed     |
|ord            |integer  |not null              |
|duration       |integer  |not null              |
|media_url      |string   |not null              |

## albums

|column name|data type|details                        |
|-----------|---------|-------------------------------|
|id         |integer  |not null, primary key          |
|title      |string   |not null, primary key          |
|artist_id  |integer  |not null, foreign key, indexed |
|added_year |date     |not null                       |
|image_url  |string   |not null                       |
|genre      |string   |                               |

## artists

|column name |data type|details               |
|------------|---------|----------------------|
|id          |integer  |not null, primary key |
|name        |string   |not null, indexed     |
|image_url   |string   |not null              |
|description |text     |not null              |

## playlists

|column name|data type|details                                           |
|-----------|---------|--------------------------------------------------|
|id         |integer  |not null, primary key                             |
|name       |string   |not null, indexed, unique                         |
|owner_id   |integer  |not null, foreign key (references users), indexed |
|mood       |string   |(bonus)                                           |

## listings

|column name |data type|details                         |
|------------|---------|--------------------------------|
|id          |integer  |not null, primary key           |
|playlist_id |integer  |not null, foreign key, indexed  |
|song_id     |integer  |not null, foreign key, indexed  |
|added_date  |date     |not null (later)                |

## playlist followings

|column name  |data type|details                                           |
|-------------|---------|--------------------------------------------------|
|id           |integer  |not null, primary key                             |
|follower_id  |integer  |not null, foreign key (references users), indexed |
|playlist_id  |integer  |not null, foreign key, indexed                    |
