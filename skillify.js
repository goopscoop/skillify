

ExploreWidget.directive( 'cbSkillify', function(){

  var link = function( scope, element, attrs ){
    scope.allFrameworks = {}
    scope.allLanguages = {}
    scope.allOther = {}
    scope.showSkills = true;
    scope.showProjects = false;
    scope.showSelectedProject = false;

    scope.openSkill = function(activeSkill, projects){
      scope.showSkills = false;
      scope.showProjects = true;
      scope.showSelectedProject = false;
      scope.menuProjects = projects;
      scope.activeSkill = activeSkill;
    }

    scope.skillFromProjectDisplay = function(framework){
      scope.showSkills = false;
      scope.showProjects = true;
      scope.showSelectedProject = false;
      scope.activeSkill = framework;
      scope.menuProjects = scope.allFrameworks[framework] || scope.allLanguages[framework] || scope.allOther[framework];
    }

    scope.backFromProjectDisplayToProjectList = function(){
      scope.showSkills = false;
      scope.showProjects = true;
      scope.showSelectedProject = false;
    }

    scope.backToSkills = function(){
      scope.showSkills = true;
      scope.showProjects = false;
      scope.showSelectedProject = false;
    }

    scope.openProject = function(project){
      scope.showSkills = false;
      scope.showProjects = false;
      scope.showSelectedProject = true;
      scope.displayProjectProperties = $.grep(scope.skills, function( e ){
        return e.name === project;
      });
        console.log(scope.displayProjectProperties)
    }

    scope.skills.forEach( function( el, ind, arr ){
      var name = el.name;
      el.languages.forEach( function( el, ind, arr ){
        if( scope.allLanguages[el] ){
          scope.allLanguages[el].push( name );
        } else {
          scope.allLanguages[el] = [];
          scope.allLanguages[el].push( name );
        }
      });
      el.frameworks.forEach( function( el, ind, arr ){
        if( scope.allFrameworks[el] ){
          scope.allFrameworks[el].push( name );
        } else {
          scope.allFrameworks[el] = [];
          scope.allFrameworks[el].push( name );
        }
      });
      el.other.forEach( function( el, ind, arr ){
        if( scope.allOther[el] ){
          scope.allOther[el].push( name );
        } else {
          scope.allOther[el] = [];
          scope.allOther[el].push( name );
        }
      });
    });
  }

  return {
    restrict: 'E',
    templateUrl: '/js/skillsWidget.html',
    replace: true,
    scope: {
      skills: "="
    },
    link: link
  }

});

// Skillify was created by S. Cody Barrus. Portfolio - http://codybarrus.com Github - https://github.com/goopscoop/