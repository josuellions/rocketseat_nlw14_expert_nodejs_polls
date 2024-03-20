import z, { object } from "zod";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";
import { redis } from "../lib/redis";

export async function getPoll(app: FastifyInstance) {
  app.get("/polls/:pollId", async (req, replay) => {
    const getPollParams = z.object({
      pollId: z.string().uuid(),
    });
    const { pollId } = getPollParams.parse(req.params);

    const poll = await prisma.poll.findUnique({
      where: {
        id: pollId,
      },
      include: {
        option: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    if (!poll) {
      return replay.status(400).send({ message: "Poll not found." });
    }

    const rankStart = 0;
    const rankTop = -1; //Todos | Se deseja somente os três primeiros usar 3

    const result = await redis.zrange(pollId, rankStart, rankTop, "WITHSCORES");

    console.log(">>RESULT RANK");
    console.log(result);

    const votes = result.reduce((obj: any, line: string, index: number) => {
      if (index % 2 === 0) {
        //Verificando se é par
        const score = result[index + 1];

        Object.assign(obj, { [line]: Number(score) }); //Gerando dinamicamente objeto
      }
      return obj;
    }, {} as Record<string, number>);

    console.log(">>RESULT RANK OBJ");
    console.log(votes);

    const formatPolls = {
      poll: {
        id: poll.id,
        title: poll.title,
        options: poll.option.map((option) => {
          return {
            id: option.id,
            title: option.title,
            score: option.id in votes ? votes[option.id] : 0,
          };
        }),
      },
    };

    return replay.status(200).send(formatPolls);
  });
}
