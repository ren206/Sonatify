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
    if @playlist.user_id == current_user.id
      if @playlist.update(playlist_params)
        render :show
      else
        render json: @playlist.errors.full_messages, status: 422
      end
    else
      render json: ['You cannot edit this'], status: 403
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    if @playlist.user_id == current_user.id
      @playlist.destroy
      render json: @playlist
    else
      render json: ['You cannot delete this'], status: 403
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(
      :name,
      :username
    )
  end
end
