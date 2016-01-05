/**
 * Created by ARUN on 4/1/2016.
 */

var ReportApp = ReportApp || {};
var ReportService = ReportApp.service('ReportService', function($http){

    this.generateReport = function(body){
        return $http.post( '/reporting/api/report' , JSON.stringify(body),{responseType: 'arraybuffer'});
        //return $http.get('/reporting/odata/templates');
    };
});