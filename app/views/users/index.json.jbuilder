json.array!(@users) do |user|
  json.extract! user, :id, :email, :user_name, :user_id, :password_digest
  json.url user_url(user, format: :json)
end
