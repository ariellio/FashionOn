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

trial = Item.create!(
    
       [{ name: 'Yeezys', 
        description: 'Yeezus has blessed us today with this new pair...', 
        price: 700, 
        category_id: 3, 
        photo_id: 8}]
    )

c = Item.create!([{name: 'Noah Hoodie', description: 'Since time immemorial hoodies have been a sacred...', price: 360, category_id: 5, photo_id:7}])
s = Item.create!([{name: 'Air Jordans', description: 'The airline that never was, these stylish...', price: 289, category_id: 3, photo_id: 6}])
q = Item.create!([{name: 'Nike Kicks', description: 'Like the snow on a winters day these new...', price: 767, category_id: 3, photo_id:5}])

p "Created #{User.count} users"
p "Created #{Item.count} items"

