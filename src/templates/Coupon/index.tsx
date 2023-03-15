import { copyToClipboard } from 'utils/copy-to-clipboard'
import * as htmlToImage from 'html-to-image'

import Button from 'components/Button'
import Coupon from 'components/Coupon'
import Header from 'components/Header'

import * as S from './styles'
import { useRef, useState } from 'react'
import SaveCouponTemplate from 'templates/SaveCoupon'
import html2canvas from 'html2canvas'

export interface CouponTemplateProps {
  companySettings: CompanySettings
  answer: Answer
}

export interface CompanySettings {
  name: string
  logo: string
  color: string
  couponPercentage: number
}

export interface Answer {
  coupon: string
  discount: number
  validityInDays: string
  name: string
}

const CouponTemplate = ({ answer, companySettings }: CouponTemplateProps) => {
  const couponRef = useRef<HTMLDivElement | null>(null)
  const [saving, setSaving] = useState(false)

  const handleCopyCoupon = () => {
    setSaving(true)
    copyToClipboard(answer.coupon)
    window.setTimeout(() => setSaving(false), 2000)
  }

  const handleSaveCoupon = async () => {
    const element = couponRef.current
    if (!element) return
    const canvas = await html2canvas(element)

    const data = canvas.toDataURL('image/jpg')
    const link = document.createElement('a')

    if (typeof link.download === 'string') {
      link.href = data
      link.download = 'image.jpg'

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      window.open(data)
    }
  }

  return (
    <S.Wrapper>
      <Header
        {...companySettings}
        couponPercentage={answer.discount}
        description="Na sua próxima compra, apresente o cupom abaixo:"
        heading="Obrigado por responder!"
      />

      <Coupon {...answer} ref={couponRef} />

      <S.ButtonsWrapper>
        <Button
          fullWidth
          color={companySettings.color}
          onClick={handleSaveCoupon}
        >
          Salvar cupom
        </Button>
        <Button fullWidth variant="text" onClick={handleCopyCoupon}>
          {saving ? 'Cupom copiado!' : 'Copiar cupom'}
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default CouponTemplate
