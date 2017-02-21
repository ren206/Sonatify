json.extract! user, :username, :f_name, :l_name

json.playlists do
  user.playlists.each do |playlist|
    json.set! playlist.id do
      json.extract! playlist, :name, :id
    end
  end
end
