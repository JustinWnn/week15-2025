'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function addGame(formData: FormData) {
  const gameName = formData.get('game') as string
  const developer = formData.get('developer') as string
  const releaseYear = formData.get('releaseYear') as string

  if (!gameName || !developer || !releaseYear) return

  try {
    await prisma.game.create({
      data: {
        game: gameName,
        developer: developer,
        releaseYear: parseInt(releaseYear),
      },
    })
    revalidatePath('/')
  } catch (error) {
    console.error(error)
  }
}