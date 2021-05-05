const googleTrends = require('google-trends-api');

exports.getDailyTrends = async (req, res, next) => {

    let trendsByCountry = await googleTrends.dailyTrends({
        geo: 'BR',
        hl: 'PT-BR',
    })
    let promRes = await trendsByCountry;
    let todayTrends = []
    let todayData = ''

    JSON.parse(promRes).default.trendingSearchesDays.forEach(trend => {
        todayData = ({
            formattedDate: trend.formattedDate,
        });
        trend.trendingSearches.forEach(t => {
            todayTrends.push(t)
        });
    });

    if (todayTrends.length > 0) {
        return res.json({ todayData, todayTrends })
    } else {
        return res.json(null)
    }
}