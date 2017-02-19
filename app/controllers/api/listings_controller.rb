class Api::ListingsController < ApplicationController
  def create
    @listing = Listing.new(listing_params)
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
