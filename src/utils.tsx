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

export const getRecommendations = (pred: string) => {
  switch (pred) {
    case 'crack':
      return [
        'Preheat the base metal before welding or use heat treatment after welding to reduce cooling rate',
        'Ensure that the welding settings like current, voltage, travel speed, are configured correctly',
        'Ensure that welding joint is properly aligned, clean and does not contain any oil, rust or grease',
      ]
    case 'lack_of_penetration':
      return [
        'Ensure that proper welding technique is used. Lower travel speed and torch angle',
        'Adjust welding parameters to increase heat input',
        'Review a welding procedure specification (WPS)',
      ]
    case 'porosity':
      return [
        'Ensure that welding surface is clean',
        'Adjust welding current and travel speed',
        'Adjust gas flow rate',
      ]
    default:
      return null
  }
}
