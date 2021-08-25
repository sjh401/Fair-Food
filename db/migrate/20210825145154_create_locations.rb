class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :city
      t.string :img_url
      t.text :description

      t.timestamps
    end
  end
end
