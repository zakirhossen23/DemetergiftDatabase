import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const { title, description, endDate, Goal, logolink } = req.body;
  if (title) {
    const result = await prisma.event.create({
      data: {
        title: title,
        description: description,
        endDate: endDate,
        Goal: Goal,
        logolink: logolink
      },
    });
    res.json(result);
  }
  return (
    <>
      <h1>Please use post method</h1>
    </>
  )
}
