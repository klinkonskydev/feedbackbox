import { GetServerSideProps } from 'next'
import { getSheet } from 'services/sheet'
import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

type Home = {
  companySettings: HomeTemplateProps
}

export default function Home({ companySettings }: Home) {
  return <HomeTemplate {...companySettings} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { settings } = await getSheet()

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
      companySettings
    }
  }
}
