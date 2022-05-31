class VisitController < ApplicationController
    set :default_content_type, 'application/json'

    post "/visits" do
        visit = Visit.create(visited: params[:visited], want_to_visit: params[:want_to_visit], user_id: params[:user_id], location_id: params[:location_id])
        visit.to_json
    end

end
