puts "🌱 Seeding spices..."

# Seed your database here
u1 = User.create(name: 'Max', location: 'Flint, MI, US', image_URL: 'https://m.media-amazon.com/images/M/MV5BNjRlYjgwMWMtNDFmMy00OWQ0LWFhMTMtNWE3MTU4ZjQ3MjgyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg')
u2 = User.create(name: 'Sam', location: 'Silver Spring, MD, US', image_URL: 'https://images.beastsofwar.com/2016/08/Thomas-the-Tank-295x394.jpg')
u3 = User.create(name: 'Brody', location: 'Columbus, OH, US', image_URL: 'https://m.media-amazon.com/images/M/MV5BNjRlYjgwMWMtNDFmMy00OWQ0LWFhMTMtNWE3MTU4ZjQ3MjgyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg')

l1 = Location.create(state: 'NY', country: 'US')
l2 = Location.create(state: 'CA', country: 'US')
l3 = Location.create(state: 'ND', country: 'US')

Visit.create(visited: true, want_to_visit: false, user_id: u1.id, location_id: l1.id)
Visit.create(visited: true, want_to_visit: false, user_id: u2.id, location_id: l1.id)
Visit.create(visited: true, want_to_visit: false, user_id: u3.id, location_id: l1.id)
Visit.create(visited: true, want_to_visit: false, user_id: u1.id, location_id: l2.id)
Visit.create(visited: false, want_to_visit: true, user_id: u2.id, location_id: l2.id)
Visit.create(visited: true, want_to_visit: false, user_id: u3.id, location_id: l2.id)
Visit.create(visited: false, want_to_visit: true, user_id: u1.id, location_id: l3.id)

puts "✅ Done seeding!"
