var app = angular.module('localization', ['pascalprecht.translate'])

app.config(function($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix: 'languages/',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage('en_US');
	$translateProvider.useSanitizeValueStrategy('escaped');
})

app.controller('MainController', ['$scope', '$rootScope', '$translate', function($scope, $rootScope, $translate) {
	$rootScope.language = {
		current: 'en_US',
		supported: [
			{
				locale: 'de_DE',
				key: 'languages.DE_DE',
				transEng: 'German'
			},
			{
				locale: 'en_US',
				key: 'languages.EN_US',
				transEng: 'English'
			},
			{
				locale: 'ru_RU',
				key: 'languages.RU_RU',
				transEng: 'Russian'
			}
		]
	}
	$translate.use($rootScope.language.current);

	$scope.switchLanguage = function() {
		console.log('switch language to: ' + $rootScope.language.current);
		$translate.use($rootScope.language.current);
	}
}])