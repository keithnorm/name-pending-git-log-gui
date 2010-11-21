require 'rubygems'
require 'sinatra'
require 'environment'

configure do
  set :views, "#{File.dirname(__FILE__)}/views"
end

error do
  e = request.env['sinatra.error']
  Kernel.puts e.backtrace.join("\n")
  'Application error'
end

class Array
  
  def rindex(exp)
    self.each do |a|
      return self.index(a) if a.match(exp)
    end
    return nil 
  end

end

helpers do
  def diff_for_file_path(commit, path)
    full_diff = Git::Diff.new(commit.instance_variable_get(:@base), commit.parents.first.sha, commit.sha).patch
    lines = full_diff.lines.to_a
    start_index = lines.rindex(%r(diff --git a/#{ path })) || 0
    rest = lines[(start_index + 1)..lines.size]
    end_index = (rest.rindex(%r(diff --git)) || lines.size) + (lines.size - rest.size)
    puts path
    puts [start_index..end_index]

    lines[start_index..end_index].join(' ')
  end
end

# root page
get '/' do
  git = Git.open(SiteConfig.repo_path)
  @log =  git.log.since('1 week ago').path(params[:path] || 'public/stylesheets/sass')
  haml :root
end
