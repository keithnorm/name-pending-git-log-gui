require 'rubygems'
require 'ruby-debug'
require 'haml'
require 'ostruct'
require 'git'

require 'sinatra' unless defined?(Sinatra)

configure do
  SiteConfig = OpenStruct.new(
                 :title => 'Git Show',
                 :author => 'Your Name',
                 :url_base => 'http://localhost:4567/',
                 :project_dir => '/Users/keithnorm/Sites/repo_monitor'
               )

  # load models
  $LOAD_PATH.unshift("#{File.dirname(__FILE__)}/lib")
  Dir.glob("#{File.dirname(__FILE__)}/lib/*.rb") { |lib| require File.basename(lib, '.*') }
end
