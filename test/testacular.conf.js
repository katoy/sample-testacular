// base path, that will be used to resolve files and exclude
basePath = '../';

preprocessors = {
  '**/*.coffee': 'coffee'
};

// list of files / patterns to load in the browser
files = [
  MOCHA,
  MOCHA_ADAPTER,
  'node_modules/chai/chai.js',
  'test/lib/sinon-chai.js',
  'test/lib/sinon.js',
  'test/lib/jquery.js',
  'test/lib/angular.js',
  'test/lib/angular-mocks.js',
  'src/**/*.coffee',
  'test/**/test_*.coffee'
];

// list of files to exclude
exclude = ['*.swp', '*~'];

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'junit'];

// See http://shanon-tech.blogspot.jp/2012/11/lets-testacular.html
//     - Testacularについて
junitReporter = {
    outputFile: 'test-results.xml'
};

// web server port
port = 8090;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
// browsers = ['PhantomJS', 'Chrome'];  // for local machine
browsers = ['PhantomJS'];               // for travis

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
// singleRun = false;                  // for local machine
singleRun = true;                      // for travis
