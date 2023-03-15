// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import 'lib/dayjs'

import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSheet } from 'services/sheet'

dayjs.extend(isSameOrBefore)

export default async function submitFeedback(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') return res.status(405).end()
  const { coupon } = req.query

  const { answers } = await getSheet()
  const rows = await answers.getRows()
  const answer = rows.find(row => row.Cupom === coupon)

  if (!answer) return res.status(404).json({ message: 'Cupom não encontrado' })

  const { Cupom, Validade, Nome, Desconto, Usado } = answer

  const currentDate = dayjs()
  const dueDate = dayjs(Validade.split('/').reverse().join('-'))

  const isValid = !dueDate.isBefore(currentDate, 'date') && Usado === 'FALSE'

  return res.status(200).json({
    coupon: Cupom,
    due_date: Validade,
    name: Nome,
    discount: Desconto,
    isValid
  })
}
