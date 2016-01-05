/**
 * Created by ARUN on 4/1/2016.
 */
var ReportApp = ReportApp || {};

ReportApp.controller('ReportsController', function($scope,$state,ReportService,$sce) {
    var body = {};
    body.template = {
        "shortid": "EyNbwrXvx",
        "wkhtmltopdf": {
            "orientation": "landscape",
            "pageSize": "Legal"
        }
    };
    body.data = {
        "foo":"I am Foo.I am Foo.I am Foo.I am Foo.I am Foo.I am Foo."
    };

    $scope.data = {};
    $scope.generateReport = function(){
        var promise = ReportService.generateReport(body);
        promise.success(function(response){
            alert(response);
            var file = new Blob([response], {type: 'application/pdf'});
            var fileURL = URL.createObjectURL(file);
            $scope.content = $sce.trustAsResourceUrl(fileURL);
            window.open(fileURL);

        });
        promise.error(function(data){
            alert("error");
        });
    };
});

