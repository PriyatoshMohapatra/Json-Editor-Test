angular.module('clmMasterApp').controller('MainCtrl', ['$scope', function($scope) {
    $scope.masterData = { "services": { "service": [{ "accountCode": "6608151", "serviceUser": { "profileDetails": { "basicDetails": { "dateOfBirth": { "$date": "1969-02-05T00:00:00.000Z" }, "lastName": "Kumar", "customerFullName": "Rajesh Kumar", "gender": { "masterCode": "M" }, "firstName": "Rajesh", "suffix": { "masterCode": "Sr" } } } }, "serviceDetails": { "serviceNumber": "22009364", "serviceStatus": { "masterCode": "ACT" }, "businessType": { "masterCode": "Postpaid" } }, "customerCode": "C596031", "serviceCode": "1358756" }] }, "billingAccounts": { "billingAccount": [{ "accountCode": "6608151", "customerCode": "C596031", "accountOwnerDetails": { "lastName": "Kumar", "customerFullName": "Kumar Rajesh", "firstName": "Rajesh" } }] } };
    $scope.configuration = {
        "editable": true,
        "viewButtonClass": "btn-info",
        "editButtonClass": "btn-success"
    };
    $scope.options = {
        "mode": "code",
        "modes": [
            "tree",
            "form",
            "code",
            "text"
        ],
        "history": false
    };
    $scope.saveToDB = function() {
        var val = isValid($scope.masterData);
        if (val) { alert("Saved successfully"); } else { alert("Api Error or incorrect JSON"); }
    }

    function isValid(str) {
        if ($('.ace_gutter-cell').hasClass('ace_error')) {
            return false;
        }
        return true;
    }
}]);
