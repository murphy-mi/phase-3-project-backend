class LocationController < ApplicationController
    set :default_content_type, 'application/json'

    get "/locations" do
        locations = Location.all.order(:country)
        locations.to_json
    end

    post "/locations" do
        location = Location.create(country: params[:country], state: params[:state])
        location.to_json
    end

    get "/locations/:id" do
        location = Location.find(params[:id])
        location.to_json
    end

end