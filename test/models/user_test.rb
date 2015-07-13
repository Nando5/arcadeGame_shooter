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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
