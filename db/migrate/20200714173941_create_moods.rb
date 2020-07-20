class CreateMoods < ActiveRecord::Migration[6.0]
  def change
    create_table :moods do |t|
      t.string :name
      t.string :mood_icon

      t.timestamps
    end
  end
end
