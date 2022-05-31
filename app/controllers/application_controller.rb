class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  get "/users" do
    { message: "Good luck with your project!" }.to_json
  end
  get "/users/:id" do
    { message: "Good luck with your project!" }.to_json
  end
  get "/locations" do
    { message: "Good luck with your project!" }.to_json
  end
  get "/locations/:id" do
    { message: "Good luck with your project!" }.to_json
  end

end
