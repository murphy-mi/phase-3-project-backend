class LocationController < ApplicationController
    set :default_content_type, 'application/json'

    get "/locations" do
        locations = Location.all.order(:country)
        serialize(locations)
    end

    post "/locations" do
        location = Location.create(location_params)
        serialize(location)
    end

    get "/locations/:id" do
        location = Location.find(params[:id])
        serialize(location)
    end

    private

    def location_params
        allowed_params = %w(country state)
        params.select {|param,value| allowed_params.include?(param)}
    end
    
    def serialize(location)
        location.to_json(
            only: [:id, :country, :state],
            :include => { visits: {
                only: [:id, :visited, :want_to_visit],
                :include => {
                    user: {
                        only: [:id, :name, :location, :image_URL]
                    }
                }
            }}
        )
    end

end