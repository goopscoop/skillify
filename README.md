# skillify
Simple to use Angular Directive to create an interactive skills widget for your professional portfolio. It takes an array of objects containing all the necessary information from your past projects, and the rest of the work is done for you. It's template is built with Bootstrap.

To see it in action, visit my portfolio: [http://codybarrus.com/#cb-skills-widget-anchor](http://codybarrus.com/#cb-skills-widget-anchor)

## How to use

1. Get AngularJS, here's a good CDN - [http://cdnjs.com/libraries/angular.js/](http://cdnjs.com/libraries/angular.js/)
2. Download skillify.js and skillify.html from this repo
3. Construct your objects in the appropriate controller ( more on that below ) and push them into an array.
4. Add `<cb-skillify skills="foo"></cb-skillify>` anywhere you like on your portfolio site, where foo is the array of objects.
5. Style to fit the feel of your site.

## Constructing your objects

It's very important that you construct your objects exactly correct. To make the job easier, below is the constructor function I use.

```
var Project = function( name, languages, frameworks, other, versionControl, links, linkText ){
    this.name = name;
    this.shortDesc = "";
    this.links = links;
    this.linkText = linkText || ["Learn More", "Visit Site", "Github"];
    this.languages = languages || "";
    this.frameworks = frameworks || "";
    this.other = other || "";
    this.versionControl = versionControl || "";
  }
```

Below I'll share an example of the simplest way to construct your objects, then I'll step through what each parameter is.

```
  // First I created a bunch of variable to pass as the arguments in my object constructor function.
  // This first variable is an array of links. The first link points to wherever the user will go to learn more. The second points to the actual site, the third points to it's repo
  var devboxLinks = [ "#devbox", "http://www.devbox.tools", "https://github.com/goopscoop/dev_box" ];
  
  // This next variable is just an array containing a list of the languages used while working on this particular project.
  var devboxLang = [ "Ruby", "JavaScript", "ActiveRecord", "HTML5", "CSS3" ];
  
  // This array lists all of the Frameworks and Libraries used.
  var dbFram = [ "AngularJS", "Ruby on Rails", "jQuery", "Materialize.css", "Papertrail" ];
  
  // This array lists all of the other skill or methodologies that might be worth mentioning
  var dbOther = [ "oAuth", "Markdown", "RESTful Routing", "API Server", "Responsive Design" ];

  // Construct the object
  var devbox = new Project( 'DevBox.tools', devboxLinks, devboxLang, dbFram, dbOther )
  
  // Then add the short description. You can also add this as an argument, but I find this simpler.
  devbox.shortDesc = "DevBox.tools is a place where developers can discover, save, collect, and reference the libraries, frameworks and other tools they need to get the job done.";

```

### Constructor function parameters

- Name - the name of the project you worked on
- langages - an array of strings listing the languages you used on this project.
- frameworks - an array of strings listing the frameworks and libraries you used on this project.
- other - an array of strings listing other skills and methodologies you used on this project.
- versionControl - string, the name of the version control you used
- links - An array of 3 links. First points to a "Learn more" section on the site. Second points to the site itself. Third points to repo.
- linkText - Optional. If you want to overide the link defaults, you can. Takes an array of link show text. Just make sure it lines up with the actual links in the link parameter.

## Array and final step

Once all of your objects are constructed, push them into an array which is part of `$scope`. Add that array to the `skills` attribute in the `<cb-skillify>` tag. It should look like `<cb-skillify skills="myArray"></cb-skillify>`.

## Created by
This directive was created by S. Cody Barrus, aka [goopscoop](https://github.com/goopscoop/). Feel free to clone and contribute. 











