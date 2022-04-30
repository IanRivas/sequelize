the db sequelize const is my conection with the postgres database

tymestamps: false
to dont add created at and updated at
for default it is true

sequelize methods used

- findAll
- findOne
- findByPk
- update
- destroy

# steps

- heroku login
- heroku create
- heroku git:remote -a coin-gappy
- git remote -v
  heroku https://git.heroku.com/coin-gappy.git (fetch)
- git push heroku main

conect to my postgresql
all the info is in

- click the database
- settings
- credentials

psql --host (fill) --port (fill) --username (fill) --password -dbname (fill)
