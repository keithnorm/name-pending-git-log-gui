This is a simple git GUI for viewing check-ins and file diffs. This is a more of a toy for me to play with than something you should go off and use, but if you'd like to take it and run with it then by all means.

Currently it runs on Sinatra and uses the git gem to interact with git. No database storage going on. 

I also wrote the javascript in a Zepto.js spirit in that I am staying api-consistent with jQuery but rolling it myself since I don't care if this ever works in IE. 

### Some Todos
* build out the filtering abilities to expose more of the git log options (author name, etc)
* make the syntax highlighting better
* name it
* design it
* have a git hook that pushes updates via sockets to get real time refreshes, though that's more of the fact that I want to do something with git hooks and web sockets
