require 'sinatra' 

get '/' do
  erb :index
end

get '/Linda' do
	"is awesome" 
end

