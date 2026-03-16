class Metrics {
    async aggregate() {
        // Simulating data aggregation
        return { count: 100, sum: 500 };
    }
}
module.exports = new Metrics();