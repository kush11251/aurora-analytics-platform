const metrics = require('../models/metrics');
const aggregateMetrics = async () => {
    const result = await metrics.aggregate();
    return result;
};
module.exports = { aggregateMetrics };