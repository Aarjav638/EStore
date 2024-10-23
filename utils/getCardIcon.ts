import Assets from '../constants/images';

export const getCardIcon = (cardType: string | undefined) => {
  switch (cardType) {
    case 'visa':
      return Assets.visa;
    case 'mastercard':
      return Assets.mastercard;
    case 'american-express':
      return Assets.amex;
    case 'discover':
      return Assets.discover;
    case 'diners-club':
      return Assets.dinners;
    case 'jcb':
      return Assets.jcb;
    case 'unionpay':
      return Assets.unionpay;
    case 'maestro':
      return Assets.maestro;
    default:
      return Assets.credit;
  }
};
