# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Score.destroy_all


u1 = User.create(:email => 'bob@gmail.com', :user_name => 'Bobby', :password => "qwerty", :password_confirmation => "qwerty")
s1 = Score.create(:points => 1000)
s2 = Score.create(:points => 1200)
s3 = Score.create(:points => 1300)

u1.scores << s1 << s2 << s3
u1.save


u2 = User.create(:email => 'dave@gmail.com', :user_name => 'David', :password => "qwerty", :password_confirmation => "qwerty")
s1a = Score.create(:points => 900)
s2a = Score.create(:points => 2400)
s3a = Score.create(:points => 1150)

u2.scores << s1a << s2a << s3a
u2.save


u3 = User.create(:email => 'pete@gmail.com', :user_name => 'Peter', :password => "qwerty", :password_confirmation => "qwerty")
s1b = Score.create(:points => 670)
s2b = Score.create(:points => 6400)
s3b = Score.create(:points => 1900)

u3.scores << s1b << s2b << s3b
u3.save
