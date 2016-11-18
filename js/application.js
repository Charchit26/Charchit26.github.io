var mainModule = angular.module("mainModule", [ 'ngRoute']);

mainModule.controller("mainCtrlr", function($scope){
   $scope.boo = (typeof $().emulateTransitionEnd == 'function');
});

jQuery(document).ready(function($) {
  $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#f2f2f2', '#7BAABE', '#ffc', '#4BBFC3', '#7BAABE', 'whitesmoke'],
        anchors: ['top','about','skills','work','project','contact'],
        scrollingSpeed: 200,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['Back to top', 'About Me', 'Skills', 'Work', 'Projects', 'Contact Me']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 10,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
    });
});

