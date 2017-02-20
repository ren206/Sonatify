class Api::ListingsController < ApplicationController
  def create
    playlist = Playlist.find_by(
      id: params[:listing][:playlist_id]
    )
    @listing = Listing.new(
      playlist_id: playlist.id,
      song_id: params[:listing][:song_id],
      ord: playlist.songs.length + 1
    )

    if @listing.save
      render :show
    else
      render json: @listing.errors.full_messages
    end
  end

  def update
    @listing = Listing.find(params[:id])
    if @listing.update(listing_params)
      render json: @listing
    else
      render json: @listing.errors.full_messages
    end
  end

  def destroy
    @listing = Listing.find(params[:id])
    @listing.destroy
    render :show
  end

  private

  def listing_params
    params.require(:listing).permit(
      :playlist_id,
      :song_id,
      :ord
    )
  end
end
