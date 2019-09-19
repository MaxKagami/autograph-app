class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.string :subtitle
      t.text :text, null: false
      t.string :image, null: false
      t.date :date, null: false

      t.timestamps
    end
  end
end
