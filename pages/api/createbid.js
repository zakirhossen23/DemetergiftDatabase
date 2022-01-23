import prisma from "../../lib/prisma";

export default async function handle(req, res) {
    const { Tokenid, Date, UserName, Bidprice } = req.body;
    if (Tokenid) {
        const result = await prisma.tokenbid.create({
            data: {
                Tokenid: Tokenid,
                Date: Date,
                UserName: UserName,
                Bidprice: Bidprice,
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
