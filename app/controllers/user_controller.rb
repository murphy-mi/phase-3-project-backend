class UserController < ApplicationController
    set :default_content_type, 'application/json'

    get "/users" do
        users = User.all.order(:name)
        serialize(users)
    end

    post "/users" do
        user = User.create(user_params)
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
        user.to_json(
            only: [:id, :name, :location, :image_URL]
            #methods: [:visits]
        )
    end

end