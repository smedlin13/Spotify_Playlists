class SongsController < ApplicationController
    before_action :set_playlist
    def index
      @songs = @playlist.artist.songs
      render component: 'Songs', props: { playlist: @playlist, artist: @artist, songs: @songs}
    end
  
    def show
      @songs = @playlist.artist.songs.find(params[:id])
      render component: 'Song', props: { playlist: @playlist, artist: @artist, song: @song}
    end
  
    def new
      @song = @playlist.artist.song.new
      render component: 'SongNew', props: { playlist: @playlist, artist: @artist, song: @song}
    end
  
    def create
      @song = @playlist.artist.song.new(artist_params)
      if @song.save
        redirect_to playlist_artist_songs_path
      else
        render component: 'SongNew', props: { playlist: @playlist, artist: @artist, song: @song}
      end
    end
  
    def edit
      @song = @playlist.artist.song.find(params[:id])
      render component: 'SongEdit', props: { playlist: @playlist, artist: @artist, song: @song}
    end
    
    def update
      @song = @playlist.artist.song.find(params[:id])
      if @song.update(song_params)
        redirect_to playlist_artist_songs_path
      else
        render component: 'SongEdit', props: { playlist: @playlist, artist: @artist, song: @song}
      end
    end
  
    def destroy
      @song = @playlist.artist.song.find(params[:id])
      @artist.destroy
      redirect_to playlist_artist_songs_path
    end
  
  
      private
    def set_artist
      @artist = Artist.find(params[:artist_id])
    end
  
    def songs_params
      params.require(:songs).permit(:title, :length)
    end
  
  end