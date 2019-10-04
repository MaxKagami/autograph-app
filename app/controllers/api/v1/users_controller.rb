module Api
  module V1
    class UsersController < ApplicationController
      before_action :authorize_access_request!

      # GET /users
      def index
        @users = User.all
        render json: @users
      end

      #GET  /users/1
      def show
        render json: @user
      end

    end
  end
end

