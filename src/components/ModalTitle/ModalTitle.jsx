import PropTypes from "prop-types";

function ModalTitle({ title, desc }) {
  return (
    <>
      <p className="global-text-24 global-modal-sm-mb">{title}</p>
      <p className="global-text-12 global-modal-mb" style={{ opacity: 0.6 }}>
        {desc}
      </p>
    </>
  );
}

ModalTitle.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ModalTitle;
