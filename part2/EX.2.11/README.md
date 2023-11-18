Fullstack development environment with docker-compose

Technologies used

- Django
- Angular
- postgres
- nginx

# How to run on Windows 11

git clone https://github.com/tomppatomppa/DevOpsWithDocker.git

$ cd devopswithdocker

$ git checkout remotes/origin/part2

$ cd part2/EX.2.11

$ docker compose up --build

The Django server will wait for postgres db to have status healthy before running startup scripts found in backend/entrypoint.sh

Visti http://localhost

Nginx should serve Angular frontend att http://localhost

Press "Check backend" button to confirm there is a connection to the backend

# Possible errors

if backend/Dockerfile throws error about entrypoint.sh not existing, make sure the "End of line sequence" is <strong>LF</strong> not <strong>CRLF</strong> in entrypoint.sh

This should be set to LF by default in .gitattributes
