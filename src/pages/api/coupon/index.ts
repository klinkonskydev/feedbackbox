// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import dayjs from 'dayjs'

import generatecoupon from 'utils/generate-coupon'
import { getSheet } from 'services/sheet'
import { feedbackSchema } from 'schema/feedback'

export default async function submitFeedback(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end()

  try {
    const { name, phone, note, recommend, feedback } = feedbackSchema.parse(
      req.body
    )
    const { answers, settings } = await getSheet()
    const coupon = generatecoupon()

    const settingsRow = await settings.getRows()

    const {
      'Porcentagem do cupom': discountInPercentage,
      'Validade em dias': validityInDays
    } = settingsRow[0]

    const dueDate = dayjs(new Date())
      .add(Number(validityInDays), 'days')
      .format('DD/MM/YYYY')

    await answers.addRow({
      Cupom: coupon,
      Nome: name,
      WhatsApp: phone,
      Experiência: note,
      'Recomenda para um amigo': recommend,
      Feedback: feedback as string,
      Validade: dueDate,
      Desconto: discountInPercentage
    })

    return res.status(201).json({ coupon })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        errors: err.errors.map(({ message, path }) => ({
          message,
          field: path.join('.')
        }))
      })
    }

    return res.status(500).json({ message: 'Internal server error' })
  }
}
