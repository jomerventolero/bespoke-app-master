

const BespokeServices = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={closeModal}></div>
      <div className="bg-white p-6 rounded shadow-lg z-10 flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold mb-4">Select Your Services</h2>
        <a href="https://it.mybespokestaff.com" className="font-semibold hover:text-brandBlue duration-300 transition-colors">MyBespokeStaff IT Support</a>
        <a href="https://odoo.mybespokestaff.com" className="font-semibold hover:text-brandBlue duration-300 transition-colors">MyBespokeStaff Odoo</a>
        <a href="/" onClick={!closeModal} className="font-semibold hover:text-brandBlue duration-300 transition-colors">MyBespokeStaff Back Office</a>
      </div>
    </div>
  );
};

export default BespokeServices;
