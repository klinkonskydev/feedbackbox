import ShortUniqueId from 'short-unique-id'

const generateSixNumbers = new ShortUniqueId({
  dictionary: 'number',
  length: 6
})

const generateLetter = new ShortUniqueId({
  dictionary: 'alpha_upper',
  length: 1
})

const generateCoupon = () => {
  const coupon = [
    generateLetter(),
    generateSixNumbers(),
    generateLetter()
  ].join('')

  return coupon
}

export default generateCoupon
