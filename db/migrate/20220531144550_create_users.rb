class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :location
      t.string :image_URL
      t.timestamps
    end
  end
end
