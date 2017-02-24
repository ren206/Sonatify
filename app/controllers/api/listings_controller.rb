class Api::ListingsController < ApplicationController
  def create
    playlist = Playlist.find(
      params[:listing][:playlist_id]
    )
    if playlist.user == current_user
      @listing = Listing.new(
        playlist_id: playlist.id,
        song_id: params[:listing][:song_id]
      )
      if @listing.save
        render :show
      else
        render json: @listing.errors.full_messages, status: 422
      end
    else
      render json: ['You cannot make this listing'], status: 403
    end
  end

  def destroy
    @listing = Listing.find(params[:id])
    if @listing.playlist.user == current_user
      @listing.destroy
      render :show
    else
      render json: ['You cannot delete this listing'], status: 403
    end
  end

  private

  def listing_params
    params.require(:listing).permit(
      :playlist_id,
      :song_id
    )
  end
end
