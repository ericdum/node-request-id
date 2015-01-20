TESTS = ./test.js #$(shell find tests -type f -name test-*)
-COVERAGE_DIR := out/test/
-COVERAGE_COPY := lib tests

-BIN_MOCHA := ./node_modules/.bin/mocha
-BIN_ISTANBUL := ./node_modules/.bin/istanbul

-TESTS           := $(sort $(TESTS))

-COVERAGE_TESTS := $(addprefix $(-COVERAGE_DIR),$(-TESTS))

default: dev

test:
	@$(-BIN_MOCHA) \
		--reporter tap \
		$(-TESTS)

-pre-test-cov: clean
	@echo 'copy files'
	@mkdir -p $(-COVERAGE_DIR)

	@rsync -av . $(-COVERAGE_DIR) --exclude out --exclude .git --exclude node_modules
	@rsync -av ./node_modules $(-COVERAGE_DIR)

test-cov: -pre-test-cov
	@cd $(-COVERAGE_DIR) && \
		$(-BIN_ISTANBUL) cover ./node_modules/.bin/_mocha -- -u bdd -R tap $(patsubst $(-COVERAGE_DIR)%, %, $(-COVERAGE_TESTS)) && \
	  $(-BIN_ISTANBUL) report html

test-lcov: -pre-test-cov
	@cd $(-COVERAGE_DIR) && \
		$(-BIN_ISTANBUL) cover ./node_modules/.bin/_mocha --report lcovonly -- -R spec $(patsubst $(-COVERAGE_DIR)%, %, $(-COVERAGE_TESTS)) && \
		cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

.-PHONY: default

clean:
	@echo 'clean'
	@-rm -fr out
	@-rm -f coverage.html
