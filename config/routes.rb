Rails.application.routes.draw do
  resources :user
  resources :character


  root 'user#new'
  get '/logout' => 'user#logout'
  post '/user/show' => 'user#index'
#          Prefix Verb   URI Pattern                   Controller#Action
#      user_index GET    /user(.:format)               user#index
#                 POST   /user(.:format)               user#create
#        new_user GET    /user/new(.:format)           user#new
#       edit_user GET    /user/:id/edit(.:format)      user#edit
#            user GET    /user/:id(.:format)           user#show
#                 PATCH  /user/:id(.:format)           user#update
#                 PUT    /user/:id(.:format)           user#update
#                 DELETE /user/:id(.:format)           user#destroy
# character_index GET    /character(.:format)          character#index
#                 POST   /character(.:format)          character#create
#   new_character GET    /character/new(.:format)      character#new
#  edit_character GET    /character/:id/edit(.:format) character#edit
#       character GET    /character/:id(.:format)      character#show
#                 PATCH  /character/:id(.:format)      character#update
#                 PUT    /character/:id(.:format)      character#update
#                 DELETE /character/:id(.:format)      character#destroy
#            root GET    /                             user#new
#          logout GET    /logout(.:format)             user#logout
#       user_show POST   /user/show(.:format)          user#index
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
