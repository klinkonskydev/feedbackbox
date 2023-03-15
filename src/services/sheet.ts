import { GoogleSpreadsheet } from 'google-spreadsheet'

export const getSheet = async () => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID)
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SPREADSHEET_CLIENT_EMAIL!,
    private_key: process.env.GOOGLE_SPREADSHEET_PRIVATE_KEY!
  })

  await doc.loadInfo()
  const answers = doc.sheetsByTitle['Respostas']
  const settings = doc.sheetsByTitle['Configurações']

  return { answers, settings }
}
