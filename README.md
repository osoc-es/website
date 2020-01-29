# oSoC-es website

Website for open Summer of Code

# Template structure

## /templates

Contains the structure of every page, except the changing content

## /content

Contains the content to integrate in the template (essentially, the body and some custom css). Every file will become an independent .html page in the /dist folder

## How to compile

1. ```npx gulp html```


# Translation

Edit the JSON files in `/dist/locales`, the name should be a lower case ISO code (es.json, de.json...).

# Local deploy (generate CSS and HTML from templates)

1. Clone this repository in your computer
2. Install node and npm -> [https://nodejs.org/es/download/]
3. Enter the directory ```cd website/```
4. Install the needed node modules ```npm install```
5. Start the local server ```npm start```

# Production

Use the Dockerfile to generate a cointainer with the generated code



**This site is based on Foundation for Sites Template**
