/* eslint-disable import/prefer-default-export */
export const formatPrediction = (pred: string) => {
  switch (pred) {
    case 'crack':
      return 'KYD has found a CRACK'
    case 'lack_of_penetration':
      return 'KYD has found LACK OF PENETRATION'
    case 'porosity':
      return 'KYD has found POROSITY'
    case 'no_defect':
      return 'KYD did not find any defects'
    default:
      return 'No prediction is available'
  }
}
