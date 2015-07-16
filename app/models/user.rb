# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  user_name       :string
#  user_id         :integer
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
	has_many :scores

	has_secure_password
  	validates :email, :presence => true, :uniqueness => true
end
