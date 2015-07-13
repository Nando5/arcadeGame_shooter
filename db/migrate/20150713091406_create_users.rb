class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :user_name
      t.integer :user_id
      t.string :password_digest

      t.timestamps null: false
    end
  end
end
