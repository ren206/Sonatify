json.extract! album, :id, :name, :year
json.cover_url asset_path(album.cover.url)
