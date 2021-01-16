const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports.find = async () => {
  return await prisma.post.findMany();
};

module.exports.findById = async (id) => {
  return await prisma.post.findUnique({ where: { id } });
};

module.exports.create = async (title, content) => {
  return await prisma.post.create({ data: { title, content } });
};

module.exports.update = async (id, title, content) => {
  return await prisma.post.update({
    where: { id: parseInt(id) },
    data: { title, content },
  });
};

module.exports.delete = async (id) => {
  return await prisma.post.delete({ where: { id } });
};
