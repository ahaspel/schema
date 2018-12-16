# schema
All JSON and GraphQL schemas and transforms will be stored here

They will be updated whenever a commit in master branch of the c# source is tagged with something that starts "30". 

## Use in node:

To include this in your application put a strophe like this in your package.json file:

    "cb-schema": "git+ssh://git@github.com:ahaspel/schema.git#XXX"


Where XXX is the build that Aaron tagged it with.

Then do:

    npm install
    
    
Or just do this:

    npm i --save git+ssh://git@github.com:ahaspel/schema.git   

When you want to upgrade to a later version you need to edit package.json to match the tag you want.

From there you can update the package like so: 

    npm upgrade cb-schema

There are probably other ways to skin this cat.



