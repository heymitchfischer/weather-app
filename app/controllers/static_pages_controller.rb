class StaticPagesController < ApplicationController
  def home
  end

  def get_forecast
    response = Unirest.get("https://api.darksky.net/forecast/#{ENV["DARK_SKY_SECRET_KEY"]}/#{params[:latitude]},#{params[:longitude]}")

    render json: {forecast: response}
  end
end
