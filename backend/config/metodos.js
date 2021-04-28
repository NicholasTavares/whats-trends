const googleTrends = require('google-trends-api');

exports.getOverTime = async (req, res) => {

    console.log(`CHAMANDO MÉTODO ${res}`)

    let keyword = 'Black lives matter';
    try {
        /**
         * TRENDS OVER TIME
         */
        let trendsOverTime = await googleTrends.interestOverTime({
            keyword: keyword,
            startTime: new Date('2020-01-01'),
            endTime: new Date(),
            granularTimeResolution: true
        });
        // Await promise response
        let promRes = await trendsOverTime;
        // If not response return false
        if (!promRes) {
            // Return false
            return res.render('index.ejs', {
                success: false,
                data: [],
                keyword
            });
        }
        // return res.send(promRes)
        // Create an array of objects time and values
        let arrData = [];
        JSON.parse(promRes).default.timelineData.forEach(t => {
            // console.log(t.formattedTime)
            // console.log(t.value)
            arrData.push({
                time: t.formattedTime,
                value: t.value,
                keyword
            })
        });
        // console.log(arrData);
        // Return the array
        if (arrData.length > 0) {
            return res.render('index.ejs', {
                success: true,
                data: arrData
            });
        }
        // else
        return res.render('index.ejs', {
            success: false,
            data: []
        });
    } catch (error) {
        if (error) throw error;
    }
}