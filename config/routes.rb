# == Route Map
#
#     Prefix Verb   URI Pattern                Controller#Action
#       root GET    /                          users#index
#     scores GET    /scores(.:format)          scores#index
#            POST   /scores(.:format)          scores#create
#  new_score GET    /scores/new(.:format)      scores#new
# edit_score GET    /scores/:id/edit(.:format) scores#edit
#      score GET    /scores/:id(.:format)      scores#show
#            PATCH  /scores/:id(.:format)      scores#update
#            PUT    /scores/:id(.:format)      scores#update
#            DELETE /scores/:id(.:format)      scores#destroy
#      users GET    /users(.:format)           users#index
#            POST   /users(.:format)           users#create
#   new_user GET    /users/new(.:format)       users#new
#  edit_user GET    /users/:id/edit(.:format)  users#edit
#       user GET    /users/:id(.:format)       users#show
#            PATCH  /users/:id(.:format)       users#update
#            PUT    /users/:id(.:format)       users#update
#            DELETE /users/:id(.:format)       users#destroy
#

Rails.application.routes.draw do

  root :to => 'users#index'

  resources :scores
  resources :users
end
