// Reexport your entry components here
// src/lib/server/prisma.ts
import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();
