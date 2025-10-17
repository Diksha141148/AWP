// Define AngularJS module
var app = angular.module('portfolioApp', []);

// Controller
app.controller('MainCtrl', ['$scope', function($scope) {

  // Basic info
  $scope.name = "Diksha Bajarang Natake";

  // Certificate data
  $scope.certificates = [
    {
      title: "Red Hat Application Development",
      description: "Successfully certified for Red Hat Application Development: Programming in Java.",
      file: "C:/Users/HP/Desktop/self/redhat.pdf"
    },
    {
      title: "Coursera Software Engineering",
      description: "Successfully certified for Coursera Software Engineering Implementation and Testing.",
      file: "C:/Users/HP/Desktop/self/Coursera Software Engineering Implementation and Testing.pdf"
    },
    {
      title: "Coursera Blockchain Platform",
      description: "Successfully certified for Coursera Blockchain Platform.",
      file: "C:/Users/HP/Desktop/self/Coursera blockchain platform.pdf"
    }
  ];

  // Contact form
  $scope.contact = {};
  $scope.savedContacts = [];

  // Save data temporarily (in memory)
  $scope.saveContact = function() {
    if ($scope.contact.name && $scope.contact.email && $scope.contact.message) {
      $scope.savedContacts.push({
        name: $scope.contact.name,
        email: $scope.contact.email,
        message: $scope.contact.message
      });
      alert("Your message has been stored temporarily (not sent).");
      $scope.contact = {}; // clear form
    } else {
      alert("Please fill in all fields.");
    }
  };

}]);