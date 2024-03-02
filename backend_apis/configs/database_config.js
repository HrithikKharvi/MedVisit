const mysql = require("mysql2/promise");

//custom requirements
const {usersMap} = require("./database_user_config.js");

module.exports.pools = {};

module.exports.getPool = (industryName, poolMap) => {
    if (poolMap[industryName]) {
        console.log("returning existing pool");
        return poolMap[industryName];
    } else {
        const configsForIndustry = usersMap[industryName];
        console.log(configsForIndustry);
        let pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: configsForIndustry["user"],
            password: configsForIndustry["password"],
            "database": configsForIndustry["database"]
        });

        poolMap[industryName] = pool;

        return pool;
    }
}
