import { rest } from "msw";

export const handlers = [
  rest.get("https://www.testapi.com", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "works" }));
  }),
];
