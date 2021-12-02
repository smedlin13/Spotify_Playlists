class ArtistsController < ApplicationController
  before_action :set_playlist
  def index
    @artists = @playlist.artists
    render component: 'Artists', props: { playlist: @playlist, artists: @artists}
  end

  def show
    @artist = @playlist.artists.find(params[:id])
    render component: 'Artist', props: { playlist: @playlist, artist: @artist}
  end

  def new
    @artist = @playlist.artists.new
    render component: 'ArtistNew', props: {playlist: @playlist, artist: @artist}
  end

  def create
    @artist = @playlist.artists.new(artist_params)
    if @artist.save
      redirect_to playlist_artists_path(@playlist)
    else
      render component: 'ArtistNew', props: { playlist: @playlist, artist: @artist}
    end
  end

  def edit
    @artist = @playlist.artists.find(params[:id])
    render component: 'ArtistEdit', props: { playlist: @playlist, artist: @artist}
  end
  
  def update
    @artist = @playlist.artists.find(params[:id])
    if @artist.update(artist_params)
      redirect_to playlist_artists_path(@artist)
    else
      render component: 'ArtistEdit', props: { playlist: @playlist, artist: @artist}
    end
  end

  def destroy
    @artist = @playlist.artists.find(params[:id])
    @artist.destroy
    redirect_to playlist_artists_path(@artist)
  end


    private
  def set_playlist
    @playlist = Playlist.find(params[:playlist_id])
  end

  def artist_params
    params.require(:artist).permit(:name, :desc)
  end

end
