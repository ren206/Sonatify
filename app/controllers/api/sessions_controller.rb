class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)
    if @user
      log_in!(@user)
      render 'api/users/show'
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  def destroy
    if current_user
      log_out!
      render json: {}
    else
      render json: ['No one is signed in'], status: 404
    end
  end
end
