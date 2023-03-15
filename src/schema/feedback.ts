import { z } from 'zod'

export const feedbackSchema = z.object({
  name: z
    .string({ required_error: 'Nome é obrigatório' })
    .nonempty({ message: 'Nome obrigatório' })
    .min(3, { message: 'Digite seu nome completo' }),
  phone: z
    .string({ required_error: 'Telefone é obrigatório' })
    .nonempty({ message: 'Telefone obrigatório' })
    .min(10, { message: 'Digite um telefone valido' }),
  note: z.number({
    invalid_type_error: 'Experiência deve ser um número',
    required_error: 'Nota é obrigatória'
  }),
  recommend: z.number({
    invalid_type_error: 'Recomendação deve ser um número',
    required_error: 'Recomendação é obrigatório'
  }),
  feedback: z.string().optional()
})

export type FeedbackSchema = z.infer<typeof feedbackSchema>
