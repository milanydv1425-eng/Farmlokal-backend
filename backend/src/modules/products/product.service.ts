import prisma from "../../config/db";

export const getProducts = async (query: any) => {
  const {
    cursor,
    limit = 10,
    category,
    sort = "createdAt",
    order = "desc",
  } = query;

  return prisma.product.findMany({
    take: Number(limit),
    skip: cursor ? 1 : 0,
    cursor: cursor ? { id: Number(cursor) } : undefined,
    where: category ? { category } : undefined,
    orderBy: { [sort]: order },
  });
};
