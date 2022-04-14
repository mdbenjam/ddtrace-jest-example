const trace = require('dd-trace')
const axios = require('axios')

test.concurrent("Concurrent example test case", async () => {
    await axios.default.get("https://google.com")

    expect(trace.scope().active()).not.toBeNull();
})

test("Nonconcurrent example test case", async () => {
    await axios.default.get("https://google.com")

    expect(trace.scope().active()).not.toBeNull();
})