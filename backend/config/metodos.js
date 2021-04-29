const googleTrends = require('google-trends-api');
/*TODO: mudar o endereço proxy na hora do deploy */

const HttpsProxyAgent = require('https-proxy-agent');
const proxyAgent = new HttpsProxyAgent('http://localhost:3000/');

exports.getOverTime = (req, res) => {

    console.log(`CHAMANDO MÉTODO ${res}`)

    googleTrends.interestOverTime({ keyword: 'Flamengo' })
        .then(function (results) {
            console.log(results);
        })
        .catch(function (err) {
            console.error(err);
        });

}