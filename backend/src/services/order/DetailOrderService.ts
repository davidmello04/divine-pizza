import prismaClient from "../../prisma";

interface Detailrequest {
    order_id: string;
}

class DetailOrderService {
    async execute({ order_id }: Detailrequest) {
        const ordes = prismaClient.item.findMany({
            where: {
                order_id: order_id,
            },
            include:{
                product: true,
                order: true,
            }
        });

        return ordes;
    }
}

export { DetailOrderService };
