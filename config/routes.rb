Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :users
  resources :categories
  resources :questions
  resources :answers
  resources :answer_comments
end
