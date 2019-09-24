class DashboardController < ApplicationController
  def index
    @articles = Article.all
    render json: @articles
  end
end