class UserController < ApplicationController
    set :default_content_type, 'application/json'

    get "/users" do
        users = User.all.order(:name)
        serialize(users)
    end

    post "/users" do
        pp params
        user = User.create(name: params[:name], location: params[:location], image_URL: params[:image_URL])
        params[:visits].each do |visit|
            pp visit
            visit_location = Location.find_by(country: visit[:country] )
            if !visit_location
                visit_location = Location.create(country: visit[:country] )
            end

            new_visit = Visit.create(user_id: user.id, location_id: visit_location.id, want_to_visit: visit[:wantToVisit], visited: visit[:haveVisited])
        end
        serialize(user)
    end

    patch "/users/:id" do
        pp params[:id]
        # pp params[:id][:id]
        user = User.find(params[:id])
        user.update(name: params[:name], location: params[:location], image_URL: params[:image_URL])
        params[:visits].each do |visit|
            pp visit
            visit_location = Location.find_by(country: visit[:country] )
            if !visit_location
                visit_location = Location.create(country: visit[:country] )
            end

            visited = Visit.find_by(user_id: params[:id], location_id: visit_location.id)
            if !visited
                visited = Visit.create(user_id: params[:id], location_id: visit_location.id, want_to_visit: visit[:wantToVisit], visited: visit[:haveVisited])
            else
                visited = Visit.update(want_to_visit: visit[:wantToVisit], visited: visit[:haveVisited])
            end
        end
        serialize(user)
    end

    get "/users/:id" do
        user = User.find(params[:id])
        serialize(user)
    end

    private

    def user_params
        allowed_params = %w(name location image_URL)
        params.select {|param,value| allowed_params.include?(param)}
    end

    def serialize(user)
        # user.left_joins(:visits).to_json(
        #     only: [:id, :name, :location, :image_URL],
        #     :include => { visits: {
        #         only: [:id, :visited, :want_to_visit]
        #     }}            
        # )
        user.to_json(
            only: [:id, :name, :location, :image_URL],
            :include => { visits: {
                only: [:id, :visited, :want_to_visit],
                :include => {
                    location: {
                        only: [:id, :country, :state]
                    }
                }
            }}
        )
    end

end