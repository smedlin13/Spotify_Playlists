class CreatePlaylists < ActiveRecord::Migration[6.1]
  def change
    create_table :playlists do |t|
      t.string :img
      t.string :title
      t.string :desc

      t.timestamps
    end
  end
end
