cd app
npm install
npm run build
Copy-Item -Force -Recurse "build/" "../docs"
