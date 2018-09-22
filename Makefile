.PHONY: deploy clean

all: dist clean build

dist:
	git worktree add dist gh-pages

build:
	npm run build

deploy: all
	cd dist && \
	git add --all && \
	git commit -m "Update pages" && \
	git push origin gh-pages

clean:
	rm -rf dist/*
