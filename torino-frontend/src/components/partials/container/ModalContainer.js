function ModalContainer({ children, isOpen, setIsOpen }) {
  if (!isOpen) return;

  return (
    <div className="fixed top-0 right-0 w-svw h-svh bg-black/20 z-10 backdrop-blur-sm">
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative min-w-10 min-h-10">
          {children}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 left-2"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalContainer;
