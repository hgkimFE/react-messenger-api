import redisClient from "../redisConnection";

const testKey = "jest";
const testValue = "ok";
describe("redis connection 테스트", () => {
  beforeAll(async () => {
    await redisClient.connect();
  });
  afterAll(async () => {
    await redisClient.disconnect();
  });
  test("최초 접속 상태 확인", () => {
    expect(redisClient.isReady).toBe(true);
  });
  test("set 테스트: 성공 시 'OK' 문자열 반환", async () => {
    expect(await redisClient.set(testKey, testValue)).toBe("OK");
  });
  test("get 테스트: 성공 시 키에 따른 값 반환", async () => {
    expect(await redisClient.get(testKey)).toBe(testValue);
  });
  test("del 테스트: 성공 시 지워진 데이터의 개수 반환", async () => {
    expect(await redisClient.del(testKey)).toBe(1);
  });
});
