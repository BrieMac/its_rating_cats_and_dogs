require 'sinatra'
require 'yaml/store'
require 'HTTParty'

Choices = {
  'CAT' => 'Cat',
  'DOG' => 'Dog',
}

get '/' do
  @rando_cat = HTTParty.get('https://aws.random.cat/meow')["file"]
  @title = 'Who is cuter?'
  erb :index
end

post '/cast' do
  @title = 'Thanks for casting your vote!'
  @vote  = params['vote']
  @store = YAML::Store.new 'votes.yml'
  @store.transaction do
    @store['votes'] ||= {}
    @store['votes'][@vote] ||= 0
    @store['votes'][@vote] += 1
  end
  erb :cast
end

get '/results' do
  @title = 'Results so far:'
  @store = YAML::Store.new 'votes.yml'
  @votes = @store.transaction { @store['votes'] }
  erb :results
end
