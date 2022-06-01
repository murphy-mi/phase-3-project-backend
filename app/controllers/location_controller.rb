class LocationController < ApplicationController
    set :default_content_type, 'application/json'

    get "/locations" do
        locations = Location.all.order(:country)
        serialize(locations)
    end

    post "/locations" do
        location = Location.create(country: params[:country], state: params[:state])
        serialize(location)
    end

    get "/locations/:id" do
        location = Location.find(params[:id])
        serialize(location)
    end

    private

    def walk_params
        allowed_params = %w(country state)
        params.select {|param,value| allowed_params.include?(param)}
      end
    
    def serialize(location)
        location.to_json(
            only: [:users, :visits]
        )
    end

end