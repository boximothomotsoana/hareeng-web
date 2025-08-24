import Modal from "./Modal";

type StatusModalProps = {
  buttonText?: string;
  isOpen: boolean;
  message: string;
  onButtonClick?: () => void;
  onClose: () => void;
  title: string;
  type: "error" | "success";
};

export default function StatusModal({
  buttonText = "OK",
  isOpen,
  message,
  onButtonClick,
  onClose,
  title,
  type,
}: StatusModalProps) {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      onClose();
    }
  };

  const iconBgColor = type === "success" ? "bg-success/20" : "bg-error/20";
  const buttonColor = type === "success" ? "btn-success" : "btn-error";
  const iconColor = type === "success" ? "text-success" : "text-error";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="rounded-2xl bg-base-100 p-8 shadow-2xl">
        {/* Icon */}
        <div
          className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${iconBgColor}`}
        >
          {type === "success" ? (
            <svg
              className={`h-10 w-10 ${iconColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          ) : (
            <svg
              className={`h-10 w-10 ${iconColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          )}
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="mb-4 text-2xl font-bold">{title}</h3>
          <p className="mb-8 leading-relaxed text-base-content/70">{message}</p>

          {/* Button */}
          <button
            className={`btn ${buttonColor} w-full px-8 py-3 text-lg font-semibold`}
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </Modal>
  );
}
