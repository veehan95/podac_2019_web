# web

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).





## Potetntial QnA
#### benifit/effective of business model?
- ***google*** has used this for years and they had proven this can earn money
- the ***only weakness*** of this model is we need to ***make sure our user base***
- as long we ***have many users***, ***shop owners will be willing*** to have their ***ads in our app***
the way we ***maintain our user base*** is with the ***rewards that the gov is willing to give*** out
- if the ***rewards*** given by the government is ***attractive*** enough, the ***user base*** is ***guarantee***

#### how to prevent false rating
- we ***only*** allow user to ***upload image using their camera***
- which has ***eliminated*** the possibility of them to ***report without valid/trustworthy evidence***
- we can also safely assume they ***wont be using image taken a while ago or taken by others*** as we ***disabled the option of uploading image from storage***

#### how to prevent spam/malicious rating
- this is in our future plan as this will be a ***complex system***
- step 1:
  - we will allow ***shop owners*** to ***appeal against*** the rating (***within 1 week after the rating is given***)
  - we will allow ***enforcer*** to ***rate the user***(the one who gift rating) based on the their ***past reports/rating***
  - we will ***highlight*** those ***users with bad rating*** so that their rating will ***not affect the total rating too much*** or we will ***remove their privileges*** such as some of the rewards cannot be claimed or ***ban them***. depend on the severity they cause
- step 2:
  - we will train a ***AI*** to ***learn the behavior of the user*** and ***prevent them in real time*** base on the information the send to the server

#### who can create an acc for this app
- ***anyone*** can create
- but we will bind ***one acc*** to ***one IC number(malaysian) or passport number(foreigner)***

#### how your app benefits enforces as in a group, coz they are not working as an single individual
- for now we ***did not included it*** in this project/hackathon because it is not the main concern of this app ***yet***
- but in the future, as the ***number of enforce/participant at the backend increases***, it will be a ***critical issue*** of the app
- we will solve this by including ***communication tools*** or allow agent to ***make remark*** at certain location(depend on the needs) or we will get a ***3rd party customer relation managment system*** (CRM)
