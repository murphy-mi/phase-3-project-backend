class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/users" do
    users = User.all.order(:name)
    users.to_json
  end

  post "/users" do
    user = User.create(name: params[:name], location: params[:location], image_URL: params[:image])
    user.to_json
  end

  get "/users/:id" do
    user = User.find(params[:id])
    user.to_json
  end

  post "/visits" do
    visit = Visit.create(visited: params[:visited], want_to_visit: params[:want_to_visit], user_id: params[:user_id], location_id: params[:location_id])
    visit.to_json
  end

  get "/locations" do
    locations = Location.all.order(:country)
    locations.to_json
  end

  get "/locations/:id" do
    location = Location.find(params[:id])
    location.to_json
  end

end
