class CreateVisits < ActiveRecord::Migration[6.1]
  def change
    create_table :visits do |t|
      t.integer :user_id
      t.integer :location_id
      t.boolean :visited
      t.boolean :want_to_visit
      t.timestamps 
    end
  end
end
