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

yeezy = Item.create!({ name: 'Yeezys', 
description: "<ul>
    <li> Minimalist construction.  </li>
    <li> The shoe's upper is built with Primeknit, finished in black and highlighted by the SPLY-350 branding on the side wall</li>
    <li> Underfoot, a full-length Boost midsole wrapped in a black rubber cage provides cushioning </li>
    <li>  A rubber outsole with cutouts provides traction. </li>
</ul>", price: '700.25', category_id: 3, })

noahHoodie = Item.create!({name: 'Noah Hoodie', 
description: "<ul>
<li> Made in Canada.  </li>
<li> 100% cotton, 9 oz. brushed-back fleece.</li>
<li> Embroidered appliqué logo on front. </li>
<li>  A rubber outsole with cutouts provides traction. </li>
</ul>",
price: 360.43, category_id: 5, })

jordans = Item.create!({name: 'Air Jordans', 
description: "<ul>
<li> Inspired by the original Air Jordan</li>
<li> Combines the iconic look of the original with a fit and feel that's been retooled for lightweight, all-day comfort  </li>
<li> Tuned for comfort and built to keep up with their fast-paced play. </li>
</ul>", 
price: 289.75, category_id: 3, })

airMax = Item.create!({name: 'Nike Kicks', 
description: "<ul>
<li> Inspired by the early 2000s look, the Air Max Genome adds a fresh face to the Air Max house.</li>
<li> Adds comfort to match its sleek design that's sure to become your new favorite Air Max. </li>
<li> This product is made with at least 20% recycled materials by weight. </li>
</ul>",  
price: 235.43, category_id: 3, })

goldHoodie = Item.create!({name: 'Gold Hoodie', 
description: "<ul>
<li> Fresh material made fresh for you</li>
<li> Made out of corinthian silks </li>
<li> 100% organic </li>
</ul>", 
price: 834.45, category_id: 3, })

benandJerryHoodie = Item.create!({name: 'Ben&Jerry Hoodie', 
description:  "<ul>
<li> Your favorite cartoon characters are here</li>
<li> Finest comfy fabric </li>
<li> Easy to clean </li>
</ul>", 
price: 245.99, category_id: 3, })

stussyHoodie = Item.create!({name: 'Stuss Hoodie', 
description: "<ul>
<li> Your classic skater brand</li>
<li> Newest fabrics just for you </li>
<li> Very comfortable </li>
</ul>", 
price: 834.76, category_id: 3, })

jeans = Item.create!({name: 'Classically Ripped Jeans', 
description:"<ul>
<li> Your classic skater jeans</li>
<li> Very comfortable </li>
<li> Stretchable in the wash </li>
</ul>", 
price: 401.99, category_id: 3, })

jeans1 = Item.create!({name: 'Art Flare Jeans', 
description: "<ul>
<li> Stand out with these outlandish slacks</li>
<li> Be prepared to be unprepared in these </li>
<li> Stretchable in the wash </li>
</ul>", 
price: 767.11, category_id: 3, })

jeans2 = Item.create!({name: 'Artistaclly Flared Jeans', 
description: "<ul>
<li> Stand out with these outlandish slacks</li>
<li> We give Andy Warhol a run for his money </li>
<li> Stretchable in the wash </li>
</ul>", 
price: 767.38, category_id: 3, })



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

jeans2Photo_file = open('https://fashionon-seed.s3.amazonaws.com/jeans2.jpg')
jeans2.photos.attach( io: jeans2Photo_file, filename: 'jeans2.jpg')






p "Created #{User.count} users"
p "Created #{Item.count} items"
p "Created #{Review.count} reviews"
