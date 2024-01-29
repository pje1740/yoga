// const csvFilePath = 'src/i18n/translations/texts.csv'
// const outputFilePath = 'src/i18n/locales'

// const csv = require('csv-parser')
// const fs = require('fs')
// const results = []
// const LANGUAGES = ['en', 'ko']

// fs.createReadStream(csvFilePath)
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     LANGUAGES.map((lang) => {
//       const data = results.reduce((prev, curr) => {
//         prev[curr['code']] = curr[lang]

//         return prev
//       }, {})
//       fs.writeFileSync(`${outputFilePath}/${lang}.json`, JSON.stringify(data))
//     })
//   })

const fs = require('fs')
const XLSX = require('xlsx');

const LANGUAGES = ['en', 'ko']

const SHEETS = {
  0: 'ashtanga_primary'
}

const excelFilePath = 'src/i18n/translations/texts.csv'
const outputFilePath = 'src/i18n/locales'

const workbook = XLSX.readFile(excelFilePath);

workbook.SheetNames.map((sheetName, i) => {
  const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  LANGUAGES.map((lang) => {
    const filePath = `${outputFilePath}/${lang}/${SHEETS[i]}.json`
    const data = sheetData.reduce((prev, curr) => {
      prev[curr['code']] = curr[lang]

      return prev
    }, {})
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  })
})

