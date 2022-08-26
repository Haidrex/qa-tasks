const request = require("supertest");

const baseUrl = "https://spectrocoin.com";

describe("Spectrocoin BTC ticker", () => {
  it("should return BTC ticker json data with 200 status code", async () => {
    const response = await request(baseUrl)
      .get("/scapi/ticker/usd/btc")
      .expect("Content-Type", "application/json")
      .expect(200)
      .then((res) => {
        expect(res.body.currencyTo).toBe('BTC');
      })
  });
});
