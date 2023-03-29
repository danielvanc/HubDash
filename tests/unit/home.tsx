import "whatwg-fetch";

beforeEach(() => {
  expect.hasAssertions();
});

test("should render a console .log", async () => {
  const api = "https://www.testapi.com";
  const data = await fetch(api).then((res) => res.json());
  expect(data).toEqual({ message: "works" });
});
