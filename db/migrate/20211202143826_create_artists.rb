class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.text :desc
      t.belongs_to :playlist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
