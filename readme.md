## Project Procedure ##
* `npm init` : Generate package.json
    * add dependencies:
      1. `npm install angular2 --save`
      5. `npm install typescript --save`
      2. `npm install officegen --save`
      3. `npm install es6-shim --save`
      4. `npm install systemjs --save`
      5. `npm install rxjs --save`
      6. `npm install zone.js --save`
    * add dev-server dependencies:
      1. `npm install concurrently lite-server --save-dev`
      2. Add script into package.json.
      ```json
      "scripts": {
        "tsc": "tsc",
        "tsc:w": "tsc -w",
        "lite": "lite-server",
        "start": "concurrent \"npm run tsc:w\" \"npm run lite\" "
      },
      ```
* `tsc --init` : Generate tsconfig.json
    * change tsconfig.json
    As is
    ```json
    {
        "compilerOptions": {
            "module": "commonjs",
            "target": "es3",
            "noImplicitAny": false,
            "outDir": "built",
            "rootDir": ".",
            "sourceMap": false
        },
        "exclude": [
            "node_modules"
        ]
    }
    ```
    To be:
    ```json
    {
      "compilerOptions": {
        "target": "ES5",
        "module": "system",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false,
        "outDir": "lib"
      },
      "files": [
        "node_modules/angular2/typings/browser.d.ts",
        "app/boot.ts"
      ]
    }
    ```
* `tsd init` : Generate tsd.json & typings folder

## Check-in to Github ##
* `git init`
* ``
