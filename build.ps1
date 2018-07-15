$ErrorActionPreference = "Stop"

yaml2json -s "m-chee-daro.yml"

cd app
npm install
npm run build
Remove-Item -Recurse -Path ../docs -Exclude "_config.yml" -Force

Copy-Item -Force "../m-chee-daro.json" build

Copy-Item -Force -Recurse "build/*" "../docs/"
