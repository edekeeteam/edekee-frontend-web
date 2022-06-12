import PropTypes from "prop-types";

function ModalTitle({ title, desc }) {
  return (
    <>
      <p className="global-text-24 global-modal-sm-mb">{title}</p>
      <p className="global-text-12 global-modal-mb">{desc}</p>
    </>
  );
}

ModalTitle.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ModalTitle;
