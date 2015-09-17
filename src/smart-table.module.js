ng.module('smart-table', []).run(['$templateCache', function ($templateCache) {
    $templateCache.put('template/smart-table/pagination.html',
        '<nav ng-if="numPages && pages.length >= 2"><ul class="pagination">' +
        '<li><a ng-disabled="currentPage == 1" ng-click="selectPage(1)" >{{stFirst}}</a></li>'+
        '<li><a ng-disabled="currentPage == 1"  ng-click="selectPage(currentPage -1)" >{{stPrevious}}</a></li>'+
        '<li ng-repeat="page in pages" ng-class="{active: page==currentPage}"><a ng-click="selectPage(page)">{{page}}</a></li>' +
        '<li><a ng-disabled="currentPage == numPages" ng-click="selectPage(currentPage +1)" >{{stNext}}</a></li>'+
        '<li><a ng-disabled="currentPage == numPages" ng-click="selectPage(numPages)" >{{stLast}}</a></li>'+
        '</ul></nav>');
}]);