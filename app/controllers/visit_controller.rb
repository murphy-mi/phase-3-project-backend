class VisitController < ApplicationController
    set :default_content_type, 'application/json'

    post "/visits" do
        visit = Visit.create(user_params)
        serialize(visit)
    end

    private

    def user_params
        allowed_params = %w(visited want_to_visit user_id location_id)
        params.select {|param,value| allowed_params.include?(param)}
    end

    def serialize(visit)
        visit.to_json(
            only: [:id, :visited, :want_to_visit],
            methods: [:user, :location]
        )
    end

end
