import { prisma } from "@/lib/prisma";

async function main() {
  console.log("🌱 seed started... ");
  const result = await prisma.user.createMany({
    data: [
      { name: "Leonardo" },
      { name: "Marceline" },
      { name: "Julia" },
      { name: "Lucas" },
      { name: "Jake" },
    ],
    skipDuplicates: true,
  });
  console.log("📦 result...", result);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
