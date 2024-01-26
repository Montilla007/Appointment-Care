# How To Run
### 1. Make an .env file on the API with the following:
 * Add " MONGO_URI=mongodb+srv://rchristerdale:<password>@p2p.c4fywar.mongodb.net/?retryWrites=true&w=majority " for example
    * Can be obtained by creating a new database on https://www.mongodb.com/ and following the instruction
 * Add " JWT_SECRET=8cerPJmJlwHYYDOkd4SRUJrSOO4xtdG4 " for example
    * https://acte.ltd/utils/randomkeygen Choose the " Encryption key 256 "
 * Add " JWT_LIFETIME=30d "
    * 30d means 30 days and it is recommended to just copy and paste
### 2. On the terminal
```bash
npm install && npm start
```

And you're good to go
