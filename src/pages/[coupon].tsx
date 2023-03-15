import { GetServerSideProps } from 'next'
import { getSheet } from 'services/sheet'
import CouponTemplate, { CouponTemplateProps } from 'templates/Coupon'

const Coupon = (props: CouponTemplateProps) => {
  return <CouponTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { coupon } = ctx.query
  const { answers, settings } = await getSheet()

  if (!coupon)
    return {
      props: {
        error: true
      }
    }

  const answersRows = await answers.getRows()
  const answer = answersRows
    .map(row => ({
      coupon: row['Cupom'],
      discount: row['Desconto'],
      validityInDays: row['Validade'],
      name: row['Nome']
    }))
    .find(row => row.coupon === coupon)

  const rows = await settings.getRows()
  const companySettings = rows.map(row => ({
    name: row['Nome'],
    logo: row['Logo'],
    color: row['Cor'],
    couponPercentage: row['Porcentagem do cupom'],
    validityInDays: row['Validade em dias']
  }))[0]

  return {
    props: {
      companySettings,
      answer
    }
  }
}

export default Coupon
