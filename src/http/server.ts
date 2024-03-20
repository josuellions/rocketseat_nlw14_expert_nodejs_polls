import fastify from "fastify";
import cookie from "@fastify/cookie";
import { fastifyWebsocket } from "@fastify/websocket";

import { voteOnPoll } from "../routes/vote-on-poll";
import { createPoll } from "../routes/create-poll";
import { getPoll } from "../routes/get-poll";
import { pollResults } from "../websockets/poll-results";

const app = fastify();
const port = 3333;

app.register(cookie, {
  secret: "polls-app-nlw14",
  hook: "onRequest",
  //parseOptions: {} //options for parsing cookies
});

app.register(fastifyWebsocket);
app.register(pollResults);
app.register(createPoll);
app.register(voteOnPoll);
app.register(getPoll);

app.listen({ port }).then(() => {
  console.log(`>> HTTP server running port ${port}!`);
});
