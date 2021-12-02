# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Playlist.create(img: 'Flower', title: 'Folksy Songs', desc: 'Songs to listen to when moody.')
Playlist.create(img: 'Truck', title: 'Country Time', desc: 'Time to two-step.')
Playlist.create(img: 'Guitar', title: 'Rock Songs from the 80s', desc: 'When you are feeling nostalgic.')
Playlist.create(img: 'Taylor Swift', title: 'Taylor Time', desc: 'All of T-swifts Hits.')

Artist.create(name: 'Taylor Swift', desc: 'Country', playlist_id: 3)
Artist.create(name: 'Bon Iver', desc: 'Folk', playlist_id: 3)
Artist.create(name: 'Sia', desc: 'Pop', playlist_id: 3) 

# p Artists.all
