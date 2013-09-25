require 'sinatra' 

get '/' do
 	erb :index
end

get '/TopPics' do
	erb :"/TopPics/TopPics" 
end

