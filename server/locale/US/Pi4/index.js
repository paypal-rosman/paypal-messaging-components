import validOptions from './validOptions';
import getMutations from './mutations';
import logos from './logos';
import styles from '../PPC/styles';

export default {
    localeClass: 'locale--US',
    productName: ['with', 'PayPal.'],
    validOptions,
    minimumSizeOptions: {
        layout: 'text',
        logo: {
            position: 'top',
            type: 'primary'
        }
    },
    getMutations,
    logos,
    styles
};
