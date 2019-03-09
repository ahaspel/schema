[![](https://codebuild.us-east-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiODNEZUJjRjBrdUl1VDl6emRxMXB4djVxRmtPdGhhelhrVGFzeERGWUowSS9SYi9yaGZuYnZzcHMyVmNJUlBrUjNGT0NUTFlINTU4bisrZE1KN0J0VzhVPSIsIml2UGFyYW1ldGVyU3BlYyI6ImN5aStZc1BuaDBHOGNHZG4iLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://us-east-2.console.aws.amazon.com/codesuite/codebuild/projects/build-schema-pipeline/history?region=us-east-2)
# schema
All JSON and GraphQL schemas and transforms live here

They will be updated whenever a commit in master branch of the c# source is tagged with something that starts "30". 

## Use in node:

To include this in your application put a strophe like this in your package.json file:

    "cb-schema": "git+ssh://git@github.com:ahaspel/schema.git#XXX"


Where XXX is the build that Aaron tagged it with.

Then do:

    npm install
    
    
Or just do this:

    npm i --save git+ssh://git@github.com:ahaspel/schema.git   
    
As you can see, you have the choice of tracking master or a tag.      

When you want to upgrade to a later version you need to edit package.json to match the tag you want.

From there you can update the package like so: 

    npm upgrade cb-schema

There are probably other ways to skin this cat.
