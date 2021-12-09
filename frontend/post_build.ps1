Remove-Item '../public/js' -Recurse -force
Copy-Item "./build/static/js*" -Destination "../public/" -Recurse -force
Copy-Item "./build/static/js*" -Destination "./static/" -Recurse -force

Copy-Item "./build/index.html" -Destination "./templates/frontend/index.html" -Recurse -force