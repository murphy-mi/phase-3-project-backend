puts "🌱 Seeding spices..."

User.destroy_all
Location.destroy_all
Visit.destroy_all

rng = Random.new

# Seed your database here
u1 = User.create(name: 'Max', location: 'Flint, MI, US', image_URL: 'https://m.media-amazon.com/images/M/MV5BNjRlYjgwMWMtNDFmMy00OWQ0LWFhMTMtNWE3MTU4ZjQ3MjgyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg')
u2 = User.create(name: 'Sam', location: 'Silver Spring, MD, US', image_URL: 'https://images.beastsofwar.com/2016/08/Thomas-the-Tank-295x394.jpg')
u3 = User.create(name: 'Brody', location: 'Columbus, OH, US', image_URL: 'https://m.media-amazon.com/images/M/MV5BNjRlYjgwMWMtNDFmMy00OWQ0LWFhMTMtNWE3MTU4ZjQ3MjgyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg')

l1 = Location.create(state: 'NY', country: 'United States')
l2 = Location.create(state: 'CA', country: 'Canada')
l3 = Location.create(state: 'ND', country: 'Mexico')
l4 = Location.create(country: "France")
l5 = Location.create(country: "Spain")
l6 = Location.create(country: "Ireland")



Visit.create(visited: true, want_to_visit: false, user_id: u1.id, location_id: l1.id)
Visit.create(visited: true, want_to_visit: false, user_id: u2.id, location_id: l1.id)
Visit.create(visited: true, want_to_visit: false, user_id: u3.id, location_id: l1.id)
Visit.create(visited: true, want_to_visit: false, user_id: u1.id, location_id: l2.id)
Visit.create(visited: false, want_to_visit: true, user_id: u2.id, location_id: l2.id)
Visit.create(visited: true, want_to_visit: false, user_id: u3.id, location_id: l2.id)
Visit.create(visited: false, want_to_visit: true, user_id: u1.id, location_id: l3.id)

users = RestClient.get("https://randomuser.me/api/?results=10")
users_array = JSON.parse(users)["results"]

users_array.map do |user|
    User.create(name: user["name"]["first"], location: user["location"]["city"], image_URL: user["picture"]["large"])
end

user_ids = User.pluck(:id)
location_ids = Location.pluck(:id)

(0..100).each do
    random_user_id = user_ids.sample
    random_location_id = location_ids.sample

    if !Visit.find_by(user_id: random_user_id, location_id: random_location_id)
        Visit.create(user_id: random_user_id, location_id: random_location_id, want_to_visit: rng.rand(1.0) > 0.5, visited: rng.rand(1.0) > 0.5)
    end
end

puts "✅ Done seeding!"
