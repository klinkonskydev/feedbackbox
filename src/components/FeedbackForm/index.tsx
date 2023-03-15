import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from 'components/Button'
import InputController from 'components/InputController'
import RecommendationButtonsList from 'components/RecomendationButtonsList'
import StarList from 'components/StarList'
import Textarea from 'components/Textarea'
import Textfield from 'components/Textfield'

import * as S from './styles'
import { FeedbackSchema, feedbackSchema } from 'schema/feedback'

type FeedbackFormProps = {
  color: string
}

const FeedbackForm = ({ color }: FeedbackFormProps) => {
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState('')

  const {
    register,
    formState: { errors },
    control,
    handleSubmit
  } = useForm<FeedbackSchema>({
    resolver: zodResolver(feedbackSchema)
  })

  const onSubmit: SubmitHandler<FeedbackSchema> = async values => {
    const baseUrl = `${process?.env?.BASE_URL || ''}`
    const api = `${baseUrl}/api/coupon`

    try {
      setLoading(true)
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(r => r.json())

      push(baseUrl + response?.coupon)
    } catch (err) {
      setFormError('Algo deu errado.. por favor, tente novamente mais tarde!')
      setLoading(false)
    }
  }

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Textfield
        label="Nome completo"
        placeholder="Matheus Klinkonksy"
        type="text"
        {...register('name', { required: true })}
        error={errors.name?.message}
      />

      <Textfield
        label="Telefone"
        placeholder="(99) 99999-9999"
        type="tel"
        {...register('phone', { required: true })}
        error={errors.phone?.message}
      />

      <div>
        <S.Label>Como foi sua experiência com o estabelecimento?</S.Label>
        <S.Span>Escolha de 1 a 5 estrelas para classificar</S.Span>
        <InputController name="note" control={control}>
          <StarList />
        </InputController>
      </div>

      <S.RecommendWrapper>
        <S.Label>
          Numa escala de 0 a 10, quanto você recomendaria para um amigo?
        </S.Label>

        <InputController name="recommend" control={control}>
          <RecommendationButtonsList color={color} />
        </InputController>
      </S.RecommendWrapper>

      <Textarea
        placeholder="Escreva aqui um comentário"
        {...register('feedback')}
      />

      {!!formError && <S.Error>{formError}</S.Error>}

      <Button type="submit" fullWidth color={color} disabled={loading}>
        {loading ? 'Enviando seu cupom...' : 'Receber meu cupom'}
      </Button>
    </S.Wrapper>
  )
}
export default FeedbackForm
