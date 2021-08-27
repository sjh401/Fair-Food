# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# cuisine = [
#     "Snack",
#     "Entree",
#     "Appitizer",
#     "Dessert",
#     "Beverage",
#     "Alcohol"
# ]

# images = [
#     "https://media.timeout.com/images/105787450/image.jpg",
#     "https://cdn.choosechicago.com/uploads/2019/06/firsttime-pizza.jpg",
#     "https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg",
#     "https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg",
#     "https://www.washingtonian.com/wp-content/uploads/2021/07/2Fiftys-1500x1000.jpg",
#     "https://www.westcentralfoodservice.com/wp-content/uploads/2019/04/5-food-trends-2019-no-title.jpg",
#     "https://img.taste.com.au/x7k1EA4i/taste/2020/05/jun20_crispy-layered-potato-bake-161708-1.jpg",
#     "https://static.independent.co.uk/2021/07/26/11/food-tacos-b0524fca-ea38-11eb-ba5d-55d3b5ffcaf1.jpg?width=640&auto=webp&quality=75",
#     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIKAjXx4dTwVPjwP1ca_SpBKQyDYJR25-dQ&usqp=CAU",
#     "https://www.bajafresh.com/assets/webp/img/taco-value.webp",
#     "https://images.theconversation.com/files/399846/original/file-20210510-5469-t4qora.jpg?ixlib=rb-1.1.0&rect=0%2C894%2C5386%2C2693&q=45&auto=format&w=668&h=324&fit=crop",
#     "https://assets.dmagstatic.com/wp-content/uploads/2019/09/lolos-chicken-and-waffles-horizontal.jpg",
#     "https://www.2foodtrippers.com/wp-content/uploads/2020/01/Croissant-at-Hugo-_-Victor-in-Paris.jpg",
#     "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2017/12/06/why-sugar-and-why-so-much-who-investigates-the-food-industry-s-sweet-tooth/7624387-1-eng-GB/Why-sugar-and-why-so-much-WHO-investigates-the-food-industry-s-sweet-tooth_wrbm_large.jpg",
#     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpE_KlKZyFtqpRMHPCTz0OWsoTUwePoJq95A&usqp=CAU",
#     "https://localfoodwalkingtours.com/wp-content/uploads/2020/07/salt-lake-city-food-tour-flavors.png"
# ]


@user1 = User.create(username: 'nicolas', email: 'angle@police.officer', password: 'Y0urmonkey!')
@user2 = User.create(username: 'frank', email: 'wild@west.nut', password: 'Hesnotfromher3!')
@user3 = User.create(username: 'theandys', email: 'up@hill.battle', password: 'W@nk3r!!!')
@user4 = User.create(username: 'janine', email: 'you@never.switchoff', password: 'N0td@tingbob')

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

# 72.times do
#     Food.create!(name: Faker::Food.dish, cuisine: cuisine.sample, description: Faker::Food.description, food_stall: Faker::Movies::HarryPotter.location, img_url: image.sample , rating: rand(1..10), location_id: rand(1..8), user_id: rand(0..4))
# end

# puts "#{Food.count} foods created."

# 300.times do
#     Comment.create!(message: Faker::Movies::HarryPotter.quote, user_id: rand(0..4), food_id: rand(0..71))
# end