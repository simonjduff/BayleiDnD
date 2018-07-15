cd app
npm install
npm run build
Remove-Item -Recurse -Path ../docs -Exclude "_config.yml" -Force
Copy-Item -Force -Recurse "build/*" "../docs/"
