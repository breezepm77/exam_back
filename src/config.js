const PORT = process.env.PORT || 8000;
const {Pool} = require('pg')

const pool = new Pool ({
    connectionString: "postgres://wmvtgdhn:fugNjmHfbiJobd_dMCCfQghisi9gjBK4@tyke.db.elephantsql.com/wmvtgdhn"
})

module.exports = {PORT, pool}