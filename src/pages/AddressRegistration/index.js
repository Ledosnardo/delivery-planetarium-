import AdressList from '../../components/AddressList';
import FormAddAddress from '../../components/FormAddAddress';

import styles from './styles.module.css'

function AddressRegistration() {

  return (
    <div className={styles.container}>
      <FormAddAddress />
      <AdressList />
    </div>
  );
}

export default AddressRegistration;
