import './Modal.css';

const Modal = ({ handleClose, show, children, handleSubmit }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  // state for each part of the form
  // if type is form, then use provided values
  // else, use nulls
  // useState hook throughout
  // 3 versions: create, update, delete
  // create: need everything but likes and id
  // update: need everything
  // Delete really only need id

  // debugger;

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={handleClose}>
          Cancel
        </button>
      </section>
    </div>
  );
};

export default Modal;