class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :name
      t.string :sprite
      t.integer :user_id

      t.timestamps
    end
  end
end
