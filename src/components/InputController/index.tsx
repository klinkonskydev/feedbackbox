import { RecommendationButtonsListProps } from 'components/RecomendationButtonsList'
import { StarListProps } from 'components/StarList'
import { cloneElement } from 'react'
import { Controller, Control, Path } from 'react-hook-form'
import { FeedbackSchema } from 'schema/feedback'

export type InputControllerProps = {
  name: Path<FeedbackSchema>
  control: Control<FeedbackSchema, object>
  children: React.ReactElement
} & React.InputHTMLAttributes<HTMLInputElement> &
  StarListProps &
  RecommendationButtonsListProps

const InputController = ({
  name,
  control,
  children,
  ...props
}: InputControllerProps) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) =>
      cloneElement(children, {
        ...field,
        ...props,
        error: error?.message,
        handleChange: (v: number) => field.onChange(v)
      })
    }
  />
)

export default InputController
