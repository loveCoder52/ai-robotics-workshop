import React, { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext(null);


export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    // Auto-remove after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Toast container — fixed bottom-right */}
      <div
        aria-live="polite"
        aria-atomic="false"
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 w-80 max-w-[calc(100vw-2rem)]"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="alert"
            className={`flex items-start gap-3 p-4 rounded-2xl shadow-xl text-sm font-medium transition-all duration-300 animate-fade-up
              ${
                toast.type === "success"
                  ? "bg-brand-mint text-white"
                  : "bg-brand-rose text-white"
              }`}
          >
            <span className="text-lg leading-none">
              {toast.type === "success" ? "✅" : "❌"}
            </span>
            <span className="flex-1">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              aria-label="Dismiss notification"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
};
