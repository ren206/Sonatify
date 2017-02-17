class Api::PlaylistsController < ApplicationController
  def create
    @playlist = Playlist.create!(playlist_params)
    render :show
  end

  def index
    @playlists = Playlist.find_by_owner_id(current_user.id)
    render :index
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def update
    @playlist = Playlist.find(params[:id])
    @playlist.update!(playlist_params)
    render :show
  end

  private

  def playlist_params
    params.require(:playlist).permit(
      :name,
      :owner_id
    )
  end
end
