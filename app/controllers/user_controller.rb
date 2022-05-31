class UserController < ApplicationController
    set :default_content_type, 'application/json'

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

end