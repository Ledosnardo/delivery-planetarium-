import AdressList from '../components/AddressList';
import FormAddAddress from '../components/FormAddAddress';

function AddressRegistration() {

  return (
    <form className="App">
      <FormAddAddress />
      <AdressList />
    </form>
  );
}

export default AddressRegistration;
