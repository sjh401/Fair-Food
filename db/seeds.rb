# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Food.destroy_all
# Location.destroy_all
# User.destroy_all

# # cuisine: [
# #     "Snack",
# #     "Entree",
# #     "Appitizer",
# #     "Dessert",
# #     "Beverage",
# #     "Alcohol"
# # ]
# @user = User.create(username: 'test', email: 'test@test.test', password: '123456789')
# puts "#{User.count} users created."
@currentuser = User.find(5)
p @currentuser
# @location = Location.find(21)
# p @location
# Location.create!(name: 'Minnesota State Fair', city: 'St. Paul', img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Fairchild.JPG/2560px-Fairchild.JPG', description: 'The Minnesota State Fair is the state fair of the U.S. state of Minnesota. Also known by its slogan, "The Great Minnesota Get-Together", it is the largest state fair in the United States by average daily attendance.')
# Location.create!(name: 'Target Field', city: 'Minneapolis', img_url: 'https://www.gannett-cdn.com/-mm-/760fdfdecace851ee9099a13434838ed133f7d9c/c=0-140-2000-1268/local/-/media/SiouxFalls/mattzimmer/2014/04/30//1398836646000-TargetField.jpg', description: 'Stuff happens here')
# Location.create!(name: 'Disney Land', city: 'Somewhere in Cali', img_url: 'https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2021/04/p2o8y7gu313-1024x683.jpg', description: 'Stuff happens here')
# Location.create!(name: 'Disney World', city: 'The one in Florida', img_url: 'https://images.indianexpress.com/2021/06/Walt-Disney-World_1200.jpg', description: 'Stuff happens here')
# Location.create!(name: 'Taste of Chicago', city: 'Chicago', img_url: 'https://viewfinder.expedia.com/wp-content/uploads/2020/02/Taste-of-Chicago-Entrance-Sign-Header-Image.jpg', description: 'Stuff happens here')
# Location.create!(name: 'Jurassic Park', city: 'Isla Nublar', img_url: 'https://cdna.artstation.com/p/assets/images/images/010/393/256/large/mat-jolicoeur-12-1920.jpg?1524172062', description: 'Stuff happens here')
# Location.create!(name: 'Hogsmeade', city: 'Secret Location', img_url: 'https://wallpaperaccess.com/full/1894037.jpg', description: 'Stuff happens here')
# Location.create!(name: 'Universial Studios', city: ' Orlando', img_url: 'https://www.travelingmom.com/wp-content/uploads/2019/04/Universal-Ball.jpg', description: 'Stuff happens here')
# Location.create!(name: 'Wrigley Field', city: 'Chicago', img_url: 'https://lede-admin.blockclubchicago.org/wp-content/uploads/sites/5/2021/03/img2528-1460435271.jpeg', description: 'Stuff happens here')

# puts "#{Location.count} locations created."

72.times do
    Food.create!(name: Faker::Food.dish, cuisine: Faker::Restaurant.type, description: Faker::Food.description, food_stall: Faker::Movies::HarryPotter.location, img_url: Faker::Placeholdit.image , rating: rand(1..10), location_id: rand(21..28), user_id: @currentuser.id)
end

puts "#{Food.count} foods created."