describe("환경변수 체크", () => {
  test("HOST", () => {
    expect(process.env.HOST).toBeDefined();
  });
  test("PORT", () => {
    expect(process.env.PORT).toBeDefined();
    expect(+process.env.PORT).not.toBeNaN();
  });
  test("REDIS_HOST", () => {
    expect(process.env.REDIS_HOST).toBeDefined();
  });
  test("REDIS_PORT", () => {
    expect(process.env.REDIS_PORT).toBeDefined();
    expect(+process.env.REDIS_PORT).not.toBeNaN();
  });
  test("REDIS_SESSION_PREFIX", () => {
    expect(process.env.REDIS_SESSION_PREFIX).toBeDefined();
  });
  test("EXPRESS_SESSION_SECRET", () => {
    expect(process.env.EXPRESS_SESSION_SECRET).toBeDefined();
  });
  test("EXPRESS_SESSION_TIMEOUT", () => {
    expect(process.env.EXPRESS_SESSION_TIMEOUT).toBeDefined();
    expect(+process.env.EXPRESS_SESSION_TIMEOUT).not.toBeNaN();
  });
  test("OAUTH_GOOGLE_CLIENT_ID", () => {
    expect(process.env.OAUTH_GOOGLE_CLIENT_ID).toBeDefined();
  });
  test("OAUTH_GOOGLE_CLIENT_SECRET", () => {
    expect(process.env.OAUTH_GOOGLE_CLIENT_SECRET).toBeDefined();
  });
});
