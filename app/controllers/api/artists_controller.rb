class Api::ArtistsController < ApplicationController
  def show
    @artist = Artist.find(params[:id])
  end

  def index
    @artists = Artist.order(:name)
  end

end
