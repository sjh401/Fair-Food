class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.string :cuisine
      t.text :description
      t.string :food_stall
      t.string :img_url
      t.integer :rating
      t.references :location, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
