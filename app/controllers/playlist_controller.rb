class PlaylistController < ApplicationController
  def index
    @playlists = Playlist.all 
    render component: 'Playlists' props: { playlists: @playlists }
  end

  def show
    @playlist = Playlist.fine(params[:id])
    render component: 'PlaylistName' props: { playlist: @playlist }
  end

  def new
    @playlist = Playlist.new
    render component: 'PlaylistNew' props: { playlist: @playlist }
  end

  def edit
    @playlist = Playlist.find(params[:id])
    render component: 'PlaylistEdit' props: { playlist: @playlist }
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      redirect_to root_path
    else
      render component: 'PlaylistNew', props: { playlist: @playlist }
    end
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist.update(playlist_params)
      redirect_to root_path
    else
      render component: 'PlaylistEdit', props: { playlist: @playlist }
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
  end

  private
  def sub_params
    params.require(:playlist).permit(:title)
  end

  def set_playlist
    @playlist = Playlist.find(params[:id])
  end

end
