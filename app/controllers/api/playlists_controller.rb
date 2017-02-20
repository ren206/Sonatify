class Api::PlaylistsController < ApplicationController
  def create
    user = User.find_by_username(
      params[:playlist][:username]
    )
    
    @playlist = Playlist.new(
      name: params[:playlist][:name],
      user_id: user.id
      )

    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def index
    @playlists = User.find(params[:user_id]).playlists
    render :index
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
