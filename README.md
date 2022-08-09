# Server Base - Proyecto ONG

## Envinroment setup

1. Create database
2. Copy .env.example to .env and fill with database credentials.

To install dependencies, run

```bash
npm install
```

3. Migrations:

```bash
npx sequelize-cli db:migrate
```

4. Seeders:

```bash
npx sequelize-cli db:seed:all
```

## Start local server

```bash
npm start
```

## Test Users:

| firstName | lastName | email | password | role | image |
| :-------: | :------: | :---: | :------: | :--: | :---: |
| John | Doe | johndoe@test.com | 12345678 | 1 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| John2 | Doe | johndoe2@test.com | 12345678 | 1 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| John3 | Doe | johndoe3@test.com | 12345678 | 1 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| John4 | Doe | johndoe4@test.com | 12345678 | 1 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| John5 | Doe | johndoe5@test.com | 12345678 | 1 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| John6 | Doe | johndoe6@test.com | 12345678 | 1 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| John7 | Doe | johndoe7@test.com | 12345678 | 1 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| John8 | Doe | johndoe8@test.com | 12345678 | 1 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| John9 | Doe | johndoe9@test.com | 12345678 | 1 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| John10 | Doe | johndoe10@test.com | 12345678 | 1 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| Ziaja | Berg | ziajaberg@test.com | 12345678 | 2 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| Ziaja2 | Berg | ziajaberg2@test.com | 12345678 | 2 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| Ziaja3 | Berg | ziajaberg3@test.com | 12345678 | 2 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| Ziaja4 | Berg | ziajaberg4@test.com | 12345678 | 2 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| Ziaja5 | Berg | ziajaberg5@test.com | 12345678 | 2 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| Ziaja6 | Berg | ziajaberg6@test.com | 12345678 | 2 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| Ziaja7 | Berg | ziajaberg7@test.com | 12345678 | 2 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| Ziaja8 | Berg | ziajaberg8@test.com | 12345678 | 2 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| Ziaja9 | Berg | ziajaberg9@test.com | 12345678 | 2 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
| Ziaja10 | Berg | ziajaberg10@test.com | 12345678 | 2 | https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png <br/>
