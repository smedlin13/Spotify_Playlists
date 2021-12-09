# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Playlist.create(img: 'Flower', title: 'Folksy Songs', desc: 'Songs to listen to when moody.')
Playlist.create(img: 'Guitar', title: 'Rock Songs from the 80s', desc: 'When you are feeling nostalgic.')
Playlist.create(img: 'Taylor Swift', title: 'Taylor Time', desc: 'All of T-swifts Hits.')

# 10.times do
#   Playlist.create(name: Faker::Music.name, description: Faker::Music.instrument)
# end 

# puts 'db seededs'

# Artist.create(name: 'John Prine', desc: 'Country Folk', playlist_id: 1)
# Artist.create(name: 'Bon Iver', desc: 'Folk', playlist_id: 1)
# Artist.create(name: 'Sia', desc: 'Pop', playlist_id: 1) 

# Artist.create(name: 'Steve Miller Band', desc: 'Rock', playlist_id: 2)
# Artist.create(name: 'Bon Jovi', desc: 'Rock n roll america', playlist_id: 2)
# Artist.create(name: 'Faces', desc: 'Smooth rock', playlist_id: 2)

# Artist.create(name: 'Taylor Swift', desc: 'Rock Pop', playlist_id: 3)
# Artist.create(name: 'Taylor Swift ft. Bon Iver', desc: 'Country with a folk vibe', playlist_id: 3)
# Artist.create(name: 'Taylor Swift ft. Phoebe Bridgers', desc: 'Sad girl folk pop', playlist_id: 3)

# Song.create(title: "In Spite of Ourselves", length: 2, playlist_id: 1, artist_id: 1)
# Song.create(title: "Born in the USA", length: 5, playlist_id: 1, artist_id: 2)
# Song.create(title: "Behind the Sun", length: 3, playlist_id: 1, artist_id: 3)

# Song.create(title: "The Jungle", length: 3, playlist_id: 2, artist_id: 4)
# Song.create(title: "Born in the USA", length: 4, playlist_id: 2,  artist_id: 5)
# Song.create(title: "Behind the Sun", length: 2, playlist_id: 2, artist_id: 6)

# Song.create(title: "Red", length: 2, playlist_id: 3,  artist_id: 7)
# Song.create(title: "We Are Never Getting Back Together", length: 4, playlist_id: 3,  artist_id: 8)
# Song.create(title: "All Too Well", length: 2, playlist_id: 3, artist_id: 9)
# p Artists.all

