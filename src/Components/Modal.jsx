function Modal(prop) {

  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title text-success" id="staticBackdropLabel">
              Message Status
            </h5>
            <button
              type="button"
              class="btn-close bg-danger"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-success bg-light">
            {prop.msg}
          </div>
          <div class="modal-footer bg-warning">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
