
    var app = angular.module('phase1', []);
    
    app.controller('phase1Controller', function ($scope, $http) {
    $scope.selectedsegment = "";
    $scope.segments = [];
    $scope.targetLang = "";
    $scope.buildNo = "";

    $http({
            method: 'GET',
            url: 'http://localhost:9090/api/grc?srcBuildId=b001',
			cache: false,
            data: {  }
        }).then(function (result) {
			console.log("here");
        $scope.segments = result.data;
    });

});

app.controller('phase2Controller', phase2Controller);


app.controller('translateController', translateController);

function translateController($scope,$http){

        $scope.selectedBuildNo = "b001";
        
      $scope.getOutput = function(){

          document.getElementById('displayTextArea').style.display = "block";
        console.log($scope.selectedseg);
        console.log($scope.tLang);
        var lang = $scope.tLang;
        console.log(lang);
       $http({
            method: 'GET',
            url: 'http://localhost:9090/api/grc/translation?srcBuildId='+$scope.selectedBuildNo+'&key='+$scope.selectedseg+'&transLang='+$scope.tLang+'',
			cache: false,
            data: {  }
        }).then(function (result1) {
			console.log(result1.data); 
         var lang = $scope.tLang;
         console.log(lang);
        console.log(result1.data[0]); 
        $scope.trsegment=result1.data[0][lang]
        console.log($scope.trsegment);
       
        
    });  
    };
    
};

function phase2Controller($scope, $http) {
    
        $scope.buildSegments = [];

        $scope.getSegmentsForBuild = function(){
            console.log("entered");

            $http({
            method: 'GET',
            url: 'http://localhost:9090/api/grc?srcBuildId='+$scope.selectedBuildNo+'',
			cache: false,
            data: {  }
        }).then(function (resultSet) {
			console.log("here");
        $scope.buildSegments = resultSet.data;
         });
        };

         $scope.getOutput = function(){

          document.getElementById('displayTextArea1').style.display = "block";
        console.log($scope.selectedseg);
        console.log($scope.tLang);
       $http({
            method: 'GET',
            url: 'http://localhost:9090/api/grc/translation?srcBuildId='+$scope.selectedBuildNo+'&key='+$scope.selectedseg+'&transLang='+$scope.tLang+'',
			cache: false,
            data: {  }
        }).then(function (result1) {
		console.log(result1.data); 
        console.log(result1.data[0]); 
        console.log($scope.tLang);
        var lang = $scope.tLang;
        $scope.outputsegment=result1.data[0][lang];
       
        
    });  
    };
       


};

app.controller('phase3Controller', phase3Controller);


function phase3Controller($scope, $http) {
        $scope.buildSegments = [];

       $scope.getSegmentsForBuild = function(){
            console.log("entered");

            $http({
            method: 'GET',
            url: 'http://localhost:9090/api/grc?srcBuildId='+$scope.selectedSrcBuildNo+'',
			cache: false,
            data: {  }
        }).then(function (resultSet) {
			console.log("here");
        $scope.buildSegments = resultSet.data;
         });
        };



         $scope.getOutput = function(){

          document.getElementById('displayTextArea1').style.display = "block";
        console.log($scope.selectedseg);
        $http({
            method: 'GET',
            url: 'http://localhost:9090/api/grc/compare/builds?key='+$scope.selectedseg+'&targetBuildId='+$scope.selectedTgtBuildNo+'',
			cache: false,
            data: {  }
        }).then(function (result1) {
		console.log(result1.data); 
        console.log(result1.data[0]); 
        var output=result1.data[0].enSegment;
        var input="";
        console.log($scope.buildSegments);
        console.log(output);
        $scope.outputsegment = output;


       
        
    });  
    };
       


};





