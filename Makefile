start:
	make -j 2 api client

api:
	@echo 'API running...'
	vercel dev

client:
	@echo 'Client running 🖖...'
	npm start

.PHONY: start api client