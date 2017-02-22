class Api::PlaylistsController < ApplicationController
  def create
    @playlist = Playlist.new(
      name: params[:playlist][:name],
      user_id: current_user.id
      )

    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def index
    @playlists = Playlist.get_by_username(params[:user_id])
  end

  def show
    @playlist = Playlist.find(params[:id])
    @songs = @playlist.songs
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render json: @playlist
  end

  private

  def playlist_params
    params.require(:playlist).permit(
      :name,
      :username
    )
  end
end
