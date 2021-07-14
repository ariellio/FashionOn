# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Item.destroy_all

trial = User.create!(username: 'JakeyJake', password: 'fosterlove')
trial1 = User.create(username: 'YoyoHak360', password: 'letsgetit1')
# s = User.create(username: 'JoeyGordo', password: 'cityboyz')
# q = User.create(username: 'CatnessEverdeen', password: 'actactact')

yeezy = Item.create!({ name: 'Yeezys', description: 'Yeezus has blessed us today with this new pair...', price: 700, category_id: 3, })
noahHoodie = Item.create!({name: 'Noah Hoodie', description: 'Since time immemorial hoodies have been a sacred...', price: 360, category_id: 5, })
jordans = Item.create!({name: 'Air Jordans', description: 'The airline that never was, these stylish...', price: 289, category_id: 3, })
airMax = Item.create!({name: 'Nike Kicks', description: 'Like the snow on a winters day these new...', price: 767, category_id: 3, })
goldHoodie = Item.create!({name: 'Gold Hoodie', description: 'Like the snow on a winters day these new...', price: 767, category_id: 3, })
benandJerryHoodie = Item.create!({name: 'Ben&Jerry Hoodie', description: 'Like the snow on a winters day these new...', price: 767, category_id: 3, })
stussyHoodie = Item.create!({name: 'Stuss Hoodie', description: 'Like the snow on a winters day these new...', price: 767, category_id: 3, })
jeans = Item.create!({name: 'Classically Ripped Jeans', description: 'Like the snow on a winters day these new...', price: 767, category_id: 3, })
jeans1 = Item.create!({name: 'Art Flare Jeans', description: 'Like the snow on a winters day these new...', price: 767, category_id: 3, })
# jeans2 = Item.create!({name: 'Artistaclly Flared Jeans', description: 'Like the snow on a winters day these new...', price: 767, category_id: 3, })



review1 = Review.new({ title: "these yeezys are sooo awesome", body: "Sooooo ive always wanted these and im so happy to have finally gotten them", rating: 4})




yeezyPhoto_file = open('https://fashionon-seed.s3.amazonaws.com/real+yeezy.jpeg')
yeezy.photos.attach( io: yeezyPhoto_file, filename: 'real+yeezy.jpeg')

jordansPhoto_file = open('https://fashionon-seed.s3.amazonaws.com/real+air+jordans.webp')
jordans.photos.attach( io: jordansPhoto_file, filename: 'real+air+jordans.webp')

noahHoodiePhoto_file = open('https://fashionon-seed.s3.amazonaws.com/real+noah+hoodie.png')
noahHoodie.photos.attach( io: noahHoodiePhoto_file, filename: 'real+noah+hoodie.png')

airMaxPhoto_file = open('https://fashionon-seed.s3.amazonaws.com/real+nike+air+max.png')
airMax.photos.attach( io: airMaxPhoto_file, filename: 'real+nike+air+max.png')

goldHoodiePhoto_file = open('https://fashionon-seed.s3.amazonaws.com/hoodie2.jpeg')
goldHoodie.photos.attach( io: goldHoodiePhoto_file, filename: 'hoodie2.jpeg')

benandJerryHoodiePhoto_file = open('https://fashionon-seed.s3.amazonaws.com/hoodie.jpg')
benandJerryHoodie.photos.attach( io: benandJerryHoodiePhoto_file, filename: 'hoodie.jpeg')

stussyHoodieHoodiePhoto_file = open('https://fashionon-seed.s3.amazonaws.com/hoodie1.png')
stussyHoodie.photos.attach( io: stussyHoodieHoodiePhoto_file, filename: 'hoodie1.png')

jeansPhoto_file = open('https://fashionon-seed.s3.amazonaws.com/real+white+jeans.jpeg')
jeans.photos.attach( io: jeansPhoto_file, filename: 'real+white+jeans.jpeg')

jeans1Photo_file = open('https://fashionon-seed.s3.amazonaws.com/jeans1.jpeg')
jeans1.photos.attach( io: jeans1Photo_file, filename: 'jeans1.jpeg')

# jeans2Photo_file = open('https://fashionon-seed.s3.amazonaws.com/jeans2.jpg')
# jeans2.photos.attach( io: jeans2Photo_file, filename: 'jeans2.jpg')






p "Created #{User.count} users"
p "Created #{Item.count} items"
p "Created #{Review.count} reviews"
